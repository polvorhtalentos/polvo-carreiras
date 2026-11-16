---
name: polvo-motion
description: Cria vídeos animados (motion, Reels 1080×1920) da POLVO RH com trilha, efeitos sonoros e, quando houver gravação, narração com a voz do Bruno em tom de vídeo viral. Use quando o Bruno pedir motion, Reel, vídeo animado, vídeo narrado, narração, "gravei o motion", ou mandar um áudio pra virar vídeo.
---

# POLVO · Vídeos animados (motion)

Identidade visual e voz: siga o manual `polvo-brand` e o `CLAUDE.md` do repositório. Onde os dois divergem, vale o `CLAUDE.md`. A assinatura é **POLVO RH**, nunca "O RH sem crachá". Converse com o Bruno sempre em português.

O motor já está pronto em `conteudo/2026-11-15/src/`. Pra um novo dia, copie `src/` para `conteudo/AAAA-MM-DD/src/`, troque `content.js` e `narration.js` e crie as pastas `out/<n>-<slug>/`.

## 1. Roteiro das cenas (`content.js`, campo `motion` de cada tema)

Um vídeo tem 5 ou 6 cenas, com uma ideia por cena. O texto vai em CAIXA ALTA e curto. Tipos de cena:

| tipo | campos | uso |
|---|---|---|
| `count` | `pre`, `value`, `dec`, `suf`, `caption`, `hold` | gancho numérico (número sobe e pulsa) |
| `big` | `title`, `sub` | frase de impacto |
| `list` | `title`, `items[]` (até 5, curtos) | cartões entram pela direita com check e sininho |
| `compare` | `title`, `left[3]`, `right[3]`, `verdict` | antes/depois, A x B |
| `cta` | `question` | fechamento: pergunta, "SALVA PRA SUA PRÓXIMA VAGA.", POLVO RH |

Regras:
- **Abertura:** gancho nos 3 primeiros segundos (número ou pergunta).
- **Fechamento:** a última cena é sempre `cta`.
- **Duração:** de 30 a 60 s. Sem narração, a duração de cada cena sai do tamanho do texto. Com narração, a cena se estica pra caber a fala.
- **Fatos:** não invente números nem fatos. Use só o que a fonte traz. Exemplo hipotético só vale com "ilustração conceitual" no carrossel.

## 2. Vídeo sem narração

```bash
cd conteudo/AAAA-MM-DD/src && ./motion.sh <n>          # gera out/<n>-*/motion.mp4
```

O `motion.sh` faz quatro coisas:
- renderiza `motion.html?t=<n>` a 30 fps com o Playwright, usando a função `render(t)` determinística;
- gera a trilha com `audio.py`: pad e arpejo a 100 bpm, pop nas entradas, whoosh nas trocas, sininho nos itens, ticks no contador;
- aplica reverb discreto e ducking (a música abaixa quando um efeito toca);
- codifica em H.264 + AAC com faststart.

Rode até 4 vídeos em paralelo: o processador tem 4 núcleos e cada render leva cerca de 1,5 min.

Antes de codificar, confira quadros soltos: chame `node test_motion.js <n> 3 10 20` e olhe os PNGs.

## 3. Narração com a voz do Bruno

1. **Roteiro falado** (`narration.js`): uma fala por cena, na ordem das cenas, em linguagem de conversa e na voz do Bruno ("eu oriento", "pra"). Números vão por extenso ("três vírgula oitenta e dois milhões").
2. **Pedir a gravação:** gere `roteiro-narracao.txt` e suba como Google Doc na pasta do Drive **"POLVO · Narrações dos motions"** (id `12iydKJo_3Dkx7zUY0u1lctWsdYDB9_nH`). Peça um arquivo por motion (`motion 1.mp3`, ...). O Bruno pode emendar as falas e recomeçar quando errar.
3. **Baixar** com `download_file_content` do Google Drive. O arquivo vai pra `tool-results/`; copie de lá.
4. **Transcrever** com o Whisper pra achar cada fala e as regravações:
   ```bash
   pip install -q faster-whisper   # se faltar
   HF_HUB_DISABLE_XET=1 python3 transcrever.py gravacao.mp3
   ```
   O modelo `small` vem do huggingface.co, que já está liberado no ambiente "Padrão". Se o pacote `av` falhar ao abrir o arquivo, o `transcrever.py` já converte com o ffmpeg antes. Use a **última tomada completa** de cada fala. O Bruno costuma avisar "vou gravar tudo de novo", e tudo antes disso é descartado. Monte os trechos com cerca de 0,2 s de folga antes e depois das palavras.
5. **Tratar e separar** a voz, já no tom de vídeo viral:
   ```bash
   python3 narrate.py gravacao.mp3 <n_falas> /tmp/polvo-motion/voz<n> --spans 53.3-60.6,61.9-68.6,...
   ```
   Sem `--spans`, o script separa pelos silêncios. O tratamento:
   - passa-alta e redução de ruído;
   - EQ: corta o embolado em 350 Hz, realça a presença em 3,5 kHz e o brilho em 9 kHz;
   - de-esser e compressão 4:1;
   - pausas internas reduzidas a 0,16 s;
   - `atempo` 1.08, que acelera sem mudar o tom;
   - volume em -14 LUFS.

   Ajuste com `--tempo` e `--maxpause` se o Bruno pedir mais calma.
6. **Conferir** antes de montar o vídeo: transcreva de novo cada `seg0X.wav` e confirme que nenhuma palavra foi cortada. Avise o Bruno quando houver dúvida de leitura (palavra trocada, hesitação). Você não consegue ouvir: diga isso e peça que ele ouça.
7. **Montar o vídeo:**
   ```bash
   ./motion.sh <n> /tmp/polvo-motion/voz<n>                # gera out/<n>-*/motion-narrado.mp4
   ```
   A fala começa 0,3 s depois da entrada da cena. A cena dura pelo menos a fala + 0,9 s; na última, a fala + 2,2 s. A música cai cerca de 14 dB sob a voz, e os efeitos ficam mais baixos.

## 4. Entrega

- **Nome no chat:** "Reel · Título". Envie o MP4 com `SendUserFile`. A versão sem narração (`motion.mp4`) continua junto.
- **Resumo:** diga a duração, o que foi conferido (transcrição e LUFS) e o que o Bruno precisa ouvir.
- **Commit e push** no branch de trabalho. Os zips ficam fora do git (`.gitignore`).

## Checklist

1. Fundo Tinta, logotipo POL▼O no topo esquerdo, barra laranja de progresso, só Montserrat e só cores da paleta.
2. Texto dentro da área segura (y 260–1560), uma ideia por cena, sem cortes.
3. Gancho no começo e CTA com pergunta, "SALVA PRA SUA PRÓXIMA VAGA." e **POLVO RH** no fim.
4. Áudio sem clipar. Com narração: nenhuma palavra cortada e voz em cerca de -14 LUFS.
5. Nenhum fato ou número inventado.
