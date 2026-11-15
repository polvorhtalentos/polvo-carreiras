"""Trata a gravação de um motion (tom de vídeo viral) e separa as falas.

Uso:
  python3 narrate.py <gravação> <n_falas> <pasta_saída> [--spans 53.3-60.6,61.9-68.6,...] [--keep 1,2,4] [--tempo 1.08]

Sem --spans, separa pelos silêncios (3 s entre falas). Com --spans, usa os trechos
informados (em segundos), por exemplo vindos da transcrição com Whisper (transcrever.py).

Tratamento: passa-alta, redução de ruído, EQ (menos "embolado", mais presença e brilho),
de-esser, compressão forte, pausas internas encurtadas (corte seco), leve aceleração sem
mudar o tom e volume em -14 LUFS (padrão das redes).
Saída: seg01.wav... (mono 44,1 kHz) e duracoes.txt.
"""
import sys, subprocess, re, os, wave, argparse
import numpy as np

ap = argparse.ArgumentParser()
ap.add_argument('src'); ap.add_argument('n', type=int); ap.add_argument('out')
ap.add_argument('--spans'); ap.add_argument('--keep'); ap.add_argument('--tempo', type=float, default=1.08)
ap.add_argument('--maxpause', type=float, default=0.16, help='pausa máxima dentro da fala (s)')
A = ap.parse_args()
os.makedirs(A.out, exist_ok=True)
SR = 44100

def ff(args): subprocess.run(['ffmpeg', '-loglevel', 'error', '-y'] + args, check=True)
def rd(f):
    with wave.open(f) as w: return np.frombuffer(w.readframes(w.getnframes()), np.int16).astype(float)/32768
def wr(f, y):
    y = np.clip(y, -1, 1)
    with wave.open(f, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((y*32767).astype(np.int16).tobytes())

# 1) limpeza + timbre
clean = os.path.join(A.out, 'limpo.wav')
af = ','.join([
    'highpass=f=85', 'afftdn=nr=24:nf=-42:tn=1',
    'equalizer=f=160:t=q:w=1:g=1.5',      # corpo
    'equalizer=f=350:t=q:w=1.2:g=-3',     # tira o embolado
    'equalizer=f=3500:t=q:w=1.5:g=3',     # presença
    'highshelf=f=9000:g=2.5',              # brilho
    'deesser=i=0.4',
    'acompressor=threshold=-22dB:ratio=4:attack=5:release=90:makeup=3',
])
ff(['-i', A.src, '-ac', '1', '-ar', str(SR), '-af', af, clean])
X = rd(clean)

# 2) trechos de cada fala
if A.spans:
    spans = [tuple(map(float, s.split('-'))) for s in A.spans.split(',')]
else:
    def speech_spans(thr, mind):
        r = subprocess.run(['ffmpeg', '-i', clean, '-af', f'silencedetect=noise={thr}dB:d={mind}', '-f', 'null', '-'],
                           capture_output=True, text=True).stderr
        st = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', r)]
        en = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', r)]
        total = len(X)/SR; out, cur = [], 0.0
        for a, b in zip(st, en + [total]*(len(st)-len(en))):
            if a-cur > 0.25: out.append((cur, a))
            cur = b
        if total-cur > 0.25: out.append((cur, total))
        return out
    for thr, mind in [(-38, 1.6), (-35, 1.4), (-40, 1.2), (-32, 1.2), (-30, 1.0)]:
        spans = speech_spans(thr, mind)
        if len(spans) >= A.n: break
    if A.keep: spans = [spans[int(i)-1] for i in A.keep.split(',')]
    elif len(spans) > A.n: print(f'AVISO: {len(spans)} trechos pra {A.n} falas; usando os {A.n} últimos. Confira.'); spans = spans[-A.n:]
if len(spans) != A.n: sys.exit(f'ERRO: {len(spans)} trechos pra {A.n} falas: {spans}')

# 3) cada fala: aparar pontas, encurtar pausas internas, acelerar, normalizar
hop = 441
durs = []
for i, (a, b) in enumerate(spans):
    seg = X[int(max(0, a-0.1)*SR):int((b+0.3)*SR)]
    env = np.array([np.sqrt(np.mean(seg[j:j+hop]**2)) for j in range(0, len(seg)-hop, hop)])
    db = 20*np.log10(env+1e-9)
    floor = np.percentile(db, 15); on = db > max(floor+9, db.max()-30)
    on = np.convolve(on.astype(float), np.ones(11), 'same') > 0   # folga de 50 ms pra não comer consoante
    idx = np.where(on)[0]
    s0 = max(0, idx[0]-6); s1 = min(len(on), idx[-1]+18)
    # pausas internas: blocos "off" maiores que maxpause viram maxpause
    keep = []; j = s0; maxf = int(A.maxpause*SR/hop)
    while j < s1:
        if on[j]: keep.append((j, j+1)); j += 1; continue
        k = j
        while k < s1 and not on[k]: k += 1
        L = k-j
        if L > maxf and k < s1: keep.append((j+L//2-maxf//2, j+L//2-maxf//2+maxf))
        else: keep.append((j, k))
        j = k
    parts = []
    for p, q in keep:
        c = seg[p*hop:q*hop].copy()
        if len(c) > 64: n = min(64, len(c)//2); c[:n] *= np.linspace(0, 1, n); c[-n:] *= np.linspace(1, 0, n)
        parts.append(c)
    y = np.concatenate(parts)
    tmp = os.path.join(A.out, f'_tmp{i}.wav'); wr(tmp, y)
    f = os.path.join(A.out, f'seg{i+1:02d}.wav')
    ff(['-i', tmp, '-af', f'atempo={A.tempo},loudnorm=I=-14:TP=-1.2:LRA=7,alimiter=limit=0.89', '-ar', str(SR), '-ac', '1', f])
    os.remove(tmp)
    z = rd(f); fi, fo = int(0.015*SR), int(0.06*SR); z[:fi] *= np.linspace(0, 1, fi); z[-fo:] *= np.linspace(1, 0, fo); wr(f, z)
    durs.append(round(len(z)/SR, 2))
open(os.path.join(A.out, 'duracoes.txt'), 'w').write(','.join(map(str, durs)))
print('ok', len(durs), 'falas:', durs)
