#!/usr/bin/env bash
# Gera a versão narrada de um motion a partir da gravação do Bruno.
# Uso: ./narrar.sh <numero_do_motion> <arquivo_de_audio> [falas_a_manter, ex: 1,2,4,5,6,7]
set -euo pipefail
cd "$(dirname "$0")"
T=$1; REC=$2; KEEP=${3:-}
S=${SCRATCH:-/tmp/polvo-narracao}; mkdir -p "$S"
N=$(node -e "global.window={};require('./narration.js');console.log(window.NARRATION[$T].length)")
OUTDIR=$(ls -d ../out/$T-*)
python3 narrate.py "$REC" "$N" "$S/voz$T" $KEEP
D=$(cat "$S/voz$T/duracoes.txt")
rm -rf "$S/frames${T}n"; SCRATCH_DIR="$S" node render_video.js "$T" "$D" >/dev/null
python3 audio.py "$S/frames${T}n/meta.json" "$S/mix$T.wav" "$S/voz$T"
ffmpeg -loglevel error -y -framerate 30 -i "$S/frames${T}n/f%05d.jpg" -i "$S/mix$T.wav" -c:v libx264 -preset medium -crf 19 \
  -pix_fmt yuv420p -c:a aac -b:a 192k -shortest -movflags +faststart "$OUTDIR/motion-narrado.mp4"
echo "pronto: $OUTDIR/motion-narrado.mp4"
