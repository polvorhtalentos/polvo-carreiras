# Instruções do projeto POLVO

## Conteúdo (carrosséis, infográficos, motions, legendas)

- Assinatura das mídias: **POLVO RH**. Não usar mais "O RH sem crachá" nem "@orhsemcracha" (pedido do Bruno em 15/11/2026; vale sobre o manual da marca `polvo-brand`).
  - Rodapé dos carrosséis e infográficos: logotipo POL▼O à esquerda e "POLVO RH" à direita.
  - Fechamento dos motions: pílula "POLVO RH" e linha "BRUNO MAGALHÃES · POLVO RH".
- Fluxo dos alertas do Google: ler os alertas do dia em polvorh.talentos@gmail.com, propor 2 temas por e-mail e **perguntar ao Bruno quais temas produzir antes de criar as mídias**.
- Peças de cada dia ficam em `conteudo/AAAA-MM-DD/` (`src/` gera, `out/` entrega). Modelo pronto em `conteudo/2026-11-15/src/`.
- Narração dos motions com a voz do Bruno: roteiro por cena em `src/narration.js` (o Bruno grava um arquivo por motion, com 3 s de silêncio entre as falas, e sobe na pasta do Drive "POLVO · Narrações dos motions"). Depois: `src/narrar.sh <n> <gravação>` gera `out/<n>-*/motion-narrado.mp4` (trata o áudio, separa as falas, estica as cenas pra caber a fala e abaixa a trilha sob a voz).
  - Fluxo real (motion 1, 15/11): baixar a gravação do Drive, rodar `src/transcrever.py` (Whisper; o Bruno costuma recomeçar no meio, então use a última tomada completa), passar os trechos de cada fala com `narrate.py ... --spans a-b,...` e conferir com nova transcrição dos `seg*.wav` que nenhuma palavra foi cortada.
  - Tom pedido pelo Bruno: voz "de vídeo viral" (limpa, presente, comprimida, pausas internas curtas, 8% mais rápida sem mudar o tom, -14 LUFS). É o padrão do `narrate.py`.
