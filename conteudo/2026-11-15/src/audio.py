"""Trilha clean e leve da POLVO: pad + arpejo 100 bpm, pops, whoosh, sininho, ticks.
Uso: python3 audio.py meta.json saida.wav"""
import json, sys, wave
import numpy as np

SR = 44100
meta = json.load(open(sys.argv[1]))
DUR = meta['total']
N = int(DUR * SR)
rng = np.random.default_rng(7)

def env(n, a, r):
    e = np.ones(n); na = max(1, int(a*SR)); nr = max(1, int(r*SR))
    e[:na] = np.linspace(0, 1, na); e[-nr:] *= np.exp(-np.linspace(0, 6, nr)); return e

def tone(f, d, a=0.005, r=None, harm=(1, .3, .1)):
    n = int(d*SR); t = np.arange(n)/SR
    s = sum(h*np.sin(2*np.pi*f*(k+1)*t) for k, h in enumerate(harm))
    return s*env(n, a, r or d*0.9)

def fft_conv(x, ir):
    L = len(x)+len(ir)-1; n = 1 << (L-1).bit_length()
    return np.fft.irfft(np.fft.rfft(x, n)*np.fft.rfft(ir, n), n)[:len(x)]

# reverb discreto
irn = int(1.6*SR); IR = rng.standard_normal(irn)*np.exp(-np.linspace(0, 7, irn)); IR[0] = 0; IR /= np.abs(IR).sum()*0.6

music = np.zeros((N, 2)); sfx = np.zeros((N, 2)); duck = np.zeros(N)

def put(buf, x, t, pan=0.0, g=1.0):
    i = int(t*SR); j = min(N, i+len(x))
    if i >= N or j <= i: return
    x = x[:j-i]*g; buf[i:j, 0] += x*(1-pan)*0.5*2**.5; buf[i:j, 1] += x*(1+pan)*0.5*2**.5

# ── música: pad + arpejo (100 bpm)
beat = 60/100
chords = [(57, 60, 64, 67), (53, 57, 60, 64), (55, 59, 62, 67), (52, 55, 60, 64)]  # Am7 Fmaj7 G Em
m2f = lambda m: 440*2**((m-69)/12)
bar = beat*4; t = 0.0; ci = 0
while t < DUR:
    ch = chords[ci % 4]
    for m in ch:  # pad
        f = m2f(m-12); n = int((bar+0.6)*SR); tt = np.arange(n)/SR
        p = (np.sin(2*np.pi*f*tt)+0.5*np.sin(2*np.pi*f*1.003*tt)+0.25*np.sin(2*np.pi*f*2*tt))
        e = np.minimum(1, tt/0.8)*np.minimum(1, (bar+0.6-tt)/0.8)
        put(music, p*e*0.035, t, pan=(m % 5-2)*0.15)
    arp = [ch[0]+12, ch[1]+12, ch[2]+12, ch[3]+12, ch[2]+12, ch[1]+12, ch[3]+12, ch[2]+24]
    for k, m in enumerate(arp):  # colcheias
        put(music, tone(m2f(m), 0.5, 0.004, 0.45, (1, .15, .05))*0.05, t+k*beat/2, pan=0.3 if k % 2 else -0.3)
    t += bar; ci += 1
fade = int(1.5*SR); music[:fade] *= np.linspace(0, 1, fade)[:, None]; music[-fade:] *= np.linspace(1, 0, fade)[:, None]

# ── efeitos
CEG = [m2f(72), m2f(76), m2f(79), m2f(84)]
for ev in meta['events']:
    t0 = ev['t']; ty = ev['type']
    if ty == 'pop':
        n = int(0.09*SR); tt = np.arange(n)/SR; f = 520*np.exp(-tt*18)+380
        x = np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-tt*45)
        put(sfx, x*0.22, t0); duck[int(t0*SR):int((t0+0.2)*SR)] = 1
    elif ty == 'chime':
        f = CEG[ev.get('k', 0) % 3]
        x = tone(f, 0.7, 0.002, 0.68, (1, .25, .08, .04)); x[:int(0.5*SR)] += 0.4*tone(f*2.01, 0.5, 0.002, 0.45, (1,))
        put(sfx, x*0.12, t0, pan=0.15); duck[int(t0*SR):int((t0+0.4)*SR)] = 1
    elif ty == 'whoosh':
        n = int(0.5*SR); tt = np.arange(n)/SR
        nz = rng.standard_normal(n)
        # filtro passa-banda móvel simples: diferença de médias móveis
        sp = np.fft.rfft(nz); fr = np.fft.rfftfreq(n, 1/SR)
        sp *= np.exp(-((fr-3500)/2500)**2) + 0.3*np.exp(-((fr-7000)/2000)**2)
        x = np.fft.irfft(sp, n); x /= np.abs(x).max()
        e = np.sin(np.pi*np.clip(tt/0.5, 0, 1))**2
        for k, pan in enumerate(np.linspace(0.6, -0.6, 8)):
            a, b = k*n//8, (k+1)*n//8
            seg = np.zeros(n); seg[a:b] = (x*e)[a:b]
            put(sfx, seg*0.14, t0-0.05, pan=pan)
        duck[int(t0*SR):int((t0+0.5)*SR)] = 1
    elif ty == 'ticks':
        d = ev['dur']; k = 0; tt = 0.0
        while tt < d:
            x = tone(2400, 0.03, 0.001, 0.028, (1,))
            put(sfx, x*0.05, t0+tt, pan=0.2 if k % 2 else -0.2)
            tt += 0.05+0.12*(tt/d)**2; k += 1
        put(sfx, tone(CEG[2], 0.8, 0.002, 0.75, (1, .3, .1))*0.12, t0+d)

# narração (opcional): argv[3] = pasta com seg01.wav, seg02.wav... (mono 44,1 kHz)
voice = np.zeros(N); vmask = np.zeros(N)
if len(sys.argv) > 3 and meta.get('voice'):
    import os
    for i, t0 in enumerate(meta['voice']):
        f = os.path.join(sys.argv[3], f'seg{i+1:02d}.wav')
        if not os.path.exists(f): continue
        with wave.open(f) as w:
            v = np.frombuffer(w.readframes(w.getnframes()), np.int16).astype(float)/32768
        a0 = int(t0*SR); a1 = min(N, a0+len(v)); voice[a0:a1] += v[:a1-a0]; vmask[a0:a1] = 1
# ducking: suave nos efeitos, forte (-14 dB) sob a voz
k = int(0.15*SR); dk = np.convolve(duck, np.ones(k)/k, 'same'); g = 1-0.45*np.clip(dk, 0, 1)
kv = int(0.35*SR); vm = np.convolve(vmask, np.ones(kv)/kv, 'same'); g *= 1-0.8*np.clip(vm, 0, 1)
music *= g[:, None]
if vmask.any(): sfx *= (1-0.45*np.clip(vm, 0, 1))[:, None]
wet = np.stack([fft_conv(sfx[:, c]+music[:, c]*0.6, IR) for c in range(2)], 1)
bed = music + sfx + wet*0.18
if vmask.any():
    bed *= 0.35/max(1e-9, np.abs(bed).max())   # trilha bem abaixo da voz
    mix = bed + voice[:, None]*0.9
else:
    mix = bed
mix /= max(1e-9, np.abs(mix).max())/0.89
pcm = (mix*32767).astype(np.int16)
with wave.open(sys.argv[2], 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print('ok', sys.argv[2], round(DUR, 1), 's')
