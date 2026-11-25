# Instruções do projeto POLVO

## Conteúdo (carrosséis, infográficos, motions, legendas)

- Assinatura das mídias: **POLVO RH**. Não usar mais "O RH sem crachá" nem "@orhsemcracha" (pedido do Bruno em 15/11/2026; vale sobre o manual da marca `polvo-brand`).
  - Rodapé dos carrosséis e infográficos: logotipo POL▼O à esquerda e "POLVO RH" à direita.
  - Fechamento dos motions: pílula "POLVO RH" e linha "BRUNO MAGALHÃES · POLVO RH".
- Fluxo dos alertas do Google: ler os alertas do dia em polvorh.talentos@gmail.com, propor 2 temas por e-mail e **perguntar ao Bruno quais temas produzir antes de criar as mídias**.
- Peças de cada dia ficam em `conteudo/AAAA-MM-DD/` (`src/` gera, `out/` entrega). Modelo pronto em `conteudo/2026-11-15/src/`.
- Vídeos animados (motion) e narração com a voz do Bruno: siga a skill do projeto `.claude/skills/polvo-motion/SKILL.md` (roteiro das cenas, `src/motion.sh`, gravação pelo Drive "POLVO · Narrações dos motions", transcrição com Whisper, voz em tom de vídeo viral).
- Pacote por tema (pedido de 24/11): texto do LinkedIn (skill `bruno-top-voice`, 3 ganchos), carrossel + post único + legenda do Instagram e motion de stories (CTA "RESPONDE AQUI NA CAIXINHA."). Tudo numa página publicada (Artifact) com uma rota por tema (`#tema-N`), gerada por `src/gen_page.py`. A página tem download de cada mídia (PNG original, MP4, .txt), do kit do carrossel, de tudo do tema e de tudo junto (ZIPs montados no navegador com JSZip): publicar com `capabilities: {downloads: true}` e os PNGs em `web/m/png/`. Modelo: `conteudo/2026-11-24/`.
- Pautas do LinkedIn Notícias: www.linkedin.com está liberado no ambiente; ler a página com curl e usar só o que ela diz.
- Motion = como fazer na prática o conteúdo do carrossel (4 cenas `passo` com exemplo), nunca uma repetição do carrossel. Capa de Reels: 3 variações diferentes da capa do carrossel (tipográfica, foto, checklist), 1080×1920, com texto dentro do recorte 3:4 do grid (y 330–1590), geradas por `src/shoot_capa.js` (o `motion.sh` já chama). Ver a skill `polvo-motion`.
- Agente semanal (pedido de 25/11): tarefa agendada "Pauta semanal POLVO RH", toda sexta às 16h40 (Brasília), abre uma sessão nova que segue `.claude/skills/polvo-pauta-semanal/SKILL.md`. Na sexta: lê os alertas dos últimos 7 dias → Bruno escolhe os temas → produção completa → página com downloads → aprovação da agenda. Na semana seguinte: publicações distribuídas pela agenda (`ferramentas/instagram/agenda.py`: um tema por dia, mais fortes de terça a quinta; carrossel 12h10, story 19h10, Reels no dia seguinte 18h40), disparadas por `send_later` e feitas com `ferramentas/instagram/ig_publish.py`. Nada é publicado sem aprovação explícita.
