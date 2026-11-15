"""Trata a gravação de um motion e separa as falas pelos silêncios.
Uso: python3 narrate.py gravacao.(m4a|mp3|wav|...) N_falas pasta_saida [manter=1,2,...]
Saída: seg01.wav... (mono 44,1 kHz, tratado) e duracoes.txt (lista separada por vírgula)."""
import sys, subprocess, re, os, wave
src, n, out = sys.argv[1], int(sys.argv[2]), sys.argv[3]
os.makedirs(out, exist_ok=True)
clean = os.path.join(out, 'limpo.wav')
# tratamento: passa-alta, redução de ruído, de-esser leve, compressão e volume padrão de redes (-16 LUFS)
af = ('highpass=f=80,afftdn=nf=-25,deesser=i=0.3,'
      'acompressor=threshold=-20dB:ratio=3:attack=10:release=150:makeup=2,'
      'loudnorm=I=-16:TP=-1.5:LRA=9')
subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', src, '-ac', '1', '-ar', '44100', '-af', af, clean], check=True)
def speech_spans(thr, mind):
    r = subprocess.run(['ffmpeg', '-i', clean, '-af', f'silencedetect=noise={thr}dB:d={mind}', '-f', 'null', '-'],
                       capture_output=True, text=True).stderr
    st = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', r)]
    en = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', r)]
    with wave.open(clean) as w: total = w.getnframes()/w.getframerate()
    spans, cur = [], 0.0
    sil = sorted(zip(st, en + [total]*(len(st)-len(en))))
    for a, b in sil:
        if a - cur > 0.25: spans.append((cur, a))
        cur = b
    if total - cur > 0.25: spans.append((cur, total))
    return spans
spans = []
for thr, mind in [(-38, 1.6), (-35, 1.4), (-40, 1.2), (-33, 1.0), (-42, 2.0)]:
    spans = speech_spans(thr, mind)
    if len(spans) >= n: break
keep = [int(x)-1 for x in sys.argv[4].split(',')] if len(sys.argv) > 4 else None
if keep: spans = [spans[i] for i in keep]
elif len(spans) > n: print(f'AVISO: achei {len(spans)} trechos pra {n} falas; usando os {n} últimos (retakes ficam com a última versão?) — confira.')
if len(spans) < n: sys.exit(f'ERRO: achei só {len(spans)} trechos pra {n} falas: {spans}')
spans = spans[-n:] if not keep else spans
import numpy as np
with wave.open(clean) as w:
    X = np.frombuffer(w.readframes(w.getnframes()), np.int16).astype(float)/32768
SR = 44100; hop = 441
durs = []
for i, (a, b) in enumerate(spans):
    seg = X[int(max(0, a-0.1)*SR):int((b+0.3)*SR)]
    env = np.array([np.sqrt(np.mean(seg[j:j+hop]**2)) for j in range(0, len(seg)-hop, hop)])
    db = 20*np.log10(env+1e-9); on = np.where(db > db.max()-35)[0]
    s0 = max(0, on[0]*hop - int(0.06*SR)); s1 = min(len(seg), (on[-1]+1)*hop + int(0.18*SR))
    y = seg[s0:s1].copy(); fi, fo = int(0.02*SR), int(0.08*SR)
    y[:fi] *= np.linspace(0, 1, fi); y[-fo:] *= np.linspace(1, 0, fo)
    f = os.path.join(out, f'seg{i+1:02d}.wav')
    with wave.open(f, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((y*32767).astype(np.int16).tobytes())
    durs.append(round(len(y)/SR, 2))
open(os.path.join(out, 'duracoes.txt'), 'w').write(','.join(map(str, durs)))
print('ok', len(durs), 'falas:', durs)
