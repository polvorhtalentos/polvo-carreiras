"""Trilha moderna POLVO: pop eletrônico leve a 118 bpm.
Kick suave, palmas no 2 e 4, chimbal com swing, baixo sincopado, acordes com sidechain ("respiração")
e pluck em semicolcheias com eco ping-pong. Primeiro compasso sem bateria (entrada), última frase só acordes.
Função: modern_music(dur, sr) -> np.ndarray (N, 2)."""
import numpy as np

def modern_music(DUR, SR=44100, seed=11):
    rng = np.random.default_rng(seed)
    N = int(DUR*SR) + SR
    L = np.zeros(N); R = np.zeros(N)
    bpm = 118; beat = 60/bpm; bar = 4*beat; s16 = beat/4
    m2f = lambda m: 440*2**((m-69)/12)
    # vi–IV–I–V em Lá menor: Am F C G
    prog = [(57, 60, 64, 69), (53, 57, 60, 65), (48, 55, 60, 64), (55, 59, 62, 67)]
    roots = [45, 41, 48, 43]

    def add(x, t, g=1.0, pan=0.0):
        i = int(t*SR); j = min(N, i+len(x))
        if i >= N or j <= i: return
        x = x[:j-i]*g
        L[i:j] += x*np.sqrt((1-pan)/2); R[i:j] += x*np.sqrt((1+pan)/2)

    def lowpass(x, fc, q=0.0):
        n = len(x); X = np.fft.rfft(x); f = np.fft.rfftfreq(n, 1/SR)
        H = 1/np.sqrt(1+(f/fc)**8)
        if q: H *= 1+q*np.exp(-((f-fc)/(fc*0.25))**2)
        return np.fft.irfft(X*H, n)

    def highpass(x, fc):
        n = len(x); X = np.fft.rfft(x); f = np.fft.rfftfreq(n, 1/SR)
        return np.fft.irfft(X*(1-1/np.sqrt(1+(f/fc)**8)), n)

    def saw(f, n, det=0.0):
        t = np.arange(n)/SR
        out = np.zeros(n)
        for d in (-det, 0, det) if det else (0,):
            ph = (t*f*(1+d)) % 1.0
            out += 2*ph-1
        return out/(3 if det else 1)

    # ── sons de bateria
    def kick():
        n = int(0.32*SR); t = np.arange(n)/SR
        f = 48+70*np.exp(-t*28)
        x = np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-t*9)
        x += 0.25*rng.standard_normal(n)*np.exp(-t*220)
        return x
    def clap():
        n = int(0.25*SR); t = np.arange(n)/SR
        nz = rng.standard_normal(n)
        env = np.zeros(n)
        for o in (0, 0.009, 0.018): env += (t >= o)*np.exp(-np.clip(t-o, 0, None)*90)
        env += 0.35*np.exp(-t*16)
        x = nz*env
        X = np.fft.rfft(x); fr = np.fft.rfftfreq(n, 1/SR); X *= np.exp(-((fr-1600)/1100)**2)
        return np.fft.irfft(X, n)*3
    def hat(open_=False):
        n = int((0.22 if open_ else 0.05)*SR); t = np.arange(n)/SR
        x = highpass(rng.standard_normal(n), 7500)
        return x*np.exp(-t*(14 if open_ else 70))

    K, C, H, OH = kick(), clap(), hat(), hat(True)

    # ── grade de tempo
    nbars = int(np.ceil(DUR/bar))+1
    side = np.ones(N)   # envelope de sidechain
    for b in range(nbars):
        t0 = b*bar
        intro = b == 0
        outro = t0 > DUR-bar*1.2
        ch = prog[b % 4]; root = roots[b % 4]
        # acordes: supersaw filtrado, um por compasso
        n = int(bar*SR)+int(0.4*SR); tt = np.arange(n)/SR
        pad = sum(saw(m2f(m), n, 0.006) for m in ch)
        pad = lowpass(pad, 900 if intro else 1800, q=0.6)
        env = np.minimum(1, tt/0.05)*np.minimum(1, np.clip((bar+0.4-tt)/0.4, 0, 1))
        add(pad*env, t0, 0.045, -0.25); add(pad*env, t0+0.012, 0.045, 0.25)
        if intro:
            continue
        # bateria
        if not outro:
            for q in range(4):
                add(highpass(K, 45), t0+q*beat, 0.26)
                i = int((t0+q*beat)*SR); j = min(N, i+int(0.22*SR))
                if i < N: side[i:j] = np.minimum(side[i:j], 0.35+0.65*np.linspace(0, 1, j-i)**0.6)
            add(C, t0+beat, 0.2, 0.05); add(C, t0+3*beat, 0.2, -0.05)
            for s in range(16):
                sw = 0.018 if s % 2 else 0.0   # swing
                vel = [0.55, 0.25, 0.4, 0.25][s % 4]
                if s in (6, 14): add(OH, t0+s*s16+sw, 0.11, 0.3)
                else: add(H, t0+s*s16+sw, 0.16*vel, 0.3)
        # baixo sincopado (sub + saw filtrado)
        pat = [0, 3, 6, 8, 11, 14]
        for k, s in enumerate(pat):
            dn = s16*(2 if k < len(pat)-1 else 2)
            n = int(dn*SR); tb = np.arange(n)/SR
            f = m2f(root-12 if k % 3 else root-12)
            x = np.sin(2*np.pi*f*tb) + 0.35*lowpass(saw(f, n), 420)
            x *= np.minimum(1, tb/0.004)*np.exp(-tb*3)
            add(x, t0+s*s16, 0.075 if not outro else 0.05)
        # pluck em semicolcheias com eco
        arp = [ch[0]+12, ch[2]+12, ch[3]+12, ch[1]+24, ch[3]+12, ch[2]+12, ch[0]+24, ch[2]+12]
        for s in range(16):
            if s % 4 == 3 and b % 2: continue
            m = arp[s % len(arp)]
            n = int(0.3*SR); tp = np.arange(n)/SR
            f = m2f(m)
            x = (np.sin(2*np.pi*f*tp) + 0.4*np.sin(2*np.pi*2*f*tp)*np.exp(-tp*30) + 0.15*np.sign(np.sin(2*np.pi*f*tp)))*np.exp(-tp*14)
            g = 0.075 if not outro else 0.05
            add(x, t0+s*s16, g, -0.35 if s % 2 else 0.35)
            add(x, t0+s*s16+3*s16, g*0.35, 0.6 if s % 2 else -0.6)   # eco ping-pong
    # sidechain só nos acordes/baixo seria ideal; aqui aplico na mistura inteira, suavizado
    k = int(0.01*SR); c = np.cumsum(np.concatenate([np.zeros(k), side])); side = (c[k:] - c[:-k])/k
    L *= side[:N]; R *= side[:N]
    out = np.stack([L, R], 1)[:int(DUR*SR)]
    out /= max(1e-9, np.abs(out).max())
    return out*0.5
