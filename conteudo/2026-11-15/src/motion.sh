#!/usr/bin/env bash
# Renderiza o motion de um tema (com trilha e efeitos). Com a pasta de voz, gera a versão narrada.
# Uso: ./motion.sh <tema> [pasta_voz_com_seg01.wav_e_duracoes.txt]
# Saída: ../out/<tema>-*/motion.mp4  ou  motion-narrado.mp4
set -euo pipefail
cd "$(dirname "$0")"
T=$1; VOZ=${2:-}
export SCRATCH_DIR=${SCRATCH_DIR:-/tmp/polvo-motion}; mkdir -p "$SCRATCH_DIR"
OUTDIR=$(ls -d ../out/$T-*)
if [ -n "$VOZ" ]; then D=$(cat "$VOZ/duracoes.txt"); FR="$SCRATCH_DIR/frames${T}n"; NAME=motion-narrado.mp4
else D=""; FR="$SCRATCH_DIR/frames$T"; NAME=motion.mp4; fi
rm -rf "$FR"
node render_video.js "$T" $D >/dev/null
python3 audio.py "$FR/meta.json" "$SCRATCH_DIR/mix$T.wav" $VOZ
ffmpeg -loglevel error -y -framerate 30 -i "$FR/f%05d.jpg" -i "$SCRATCH_DIR/mix$T.wav" -c:v libx264 -preset medium -crf 19 \
  -pix_fmt yuv420p -c:a aac -b:a 192k -shortest -movflags +faststart "$OUTDIR/$NAME"
[ -f shoot_capa.js ] && node shoot_capa.js "$T" >/dev/null && echo "capa: $OUTDIR/capa-reels.png"
echo "pronto: $OUTDIR/$NAME"
