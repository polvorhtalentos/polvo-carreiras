"""Transcreve uma gravação com Whisper (palavra a palavra) pra achar onde começa e termina cada fala
e identificar regravações. Uso: HF_HUB_DISABLE_XET=1 python3 transcrever.py <gravação>
Precisa de: pip install faster-whisper (o modelo 'small' vem do huggingface.co)."""
import sys, subprocess, wave, numpy as np
from faster_whisper import WhisperModel
subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', sys.argv[1], '-ac', '1', '-ar', '16000', '/tmp/_tr.wav'], check=True)
w = wave.open('/tmp/_tr.wav'); x = np.frombuffer(w.readframes(w.getnframes()), np.int16).astype(np.float32)/32768
segs, _ = WhisperModel('small', device='cpu', compute_type='int8').transcribe(x, language='pt', word_timestamps=True)
for s in segs:
    print(f'{s.start:6.1f}-{s.end:6.1f}', '  '.join(f'{wd.start:.2f}{wd.word}' for wd in s.words))
