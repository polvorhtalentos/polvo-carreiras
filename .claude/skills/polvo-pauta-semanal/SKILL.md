---
name: polvo-pauta-semanal
description: Agente semanal da POLVO RH. Busca no e-mail os alertas da semana, apresenta os temas pro Bruno escolher, produz todas as mídias (LinkedIn, carrossel, post único, legenda, motion na prática, 3 capas de Reels), publica a página da pauta, pede aprovação e publica no Instagram (carrossel, Reels e stories). Use quando a tarefa agendada de sexta disparar ou quando o Bruno pedir "pauta da semana", "rodar o agente" ou "publicar no Instagram".
---

# Agente semanal · Pauta POLVO RH

Converse com o Bruno sempre em português. Siga o `CLAUDE.md` do repositório, a skill `polvo-motion` e, pros textos de LinkedIn, a skill `bruno-top-voice`. Onde houver conflito com o manual `polvo-brand`, vale o `CLAUDE.md`.

Há **duas paradas obrigatórias pra decisão do Bruno**: a escolha dos temas e a aprovação. Nunca publique nada no Instagram sem a aprovação explícita dele nesta sessão.

## 0. Preparar a sessão

- **Sessão nova (disparada pela tarefa agendada):** traga os modelos do branch onde eles vivem, se ainda não estiverem no branch principal:
  ```bash
  git fetch origin ccr-e5d96407-b68rm2 && git checkout origin/ccr-e5d96407-b68rm2 -- .claude CLAUDE.md conteudo/2026-11-24/src ferramentas .gitignore
  ```
- **Ferramentas:** confira que existem `ffmpeg`, `node` e o Playwright (já vêm no ambiente).

## 1. Buscar a pauta da semana

1. No Gmail (conta polvorh.talentos@gmail.com), busque `from:googlealerts-noreply@google.com newer_than:7d` e leia cada alerta com `get_thread`.
2. Pergunte se o Bruno tem links extras da semana, por exemplo do LinkedIn Notícias. O www.linkedin.com está liberado: leia com `curl` e use só o que a página diz.
3. Liste as notícias por alerta (título, veículo, data e o fato principal) e ignore o que já virou conteúdo (veja as pastas em `conteudo/`).

## 2. Apresentar os temas (parada 1)

Com `AskUserQuestion`, uma pergunta por alerta (no máximo 4 por vez; use mais rodadas se precisar):
- 2 a 3 ângulos POLVO por notícia (carreira, R&S, D&I, DHO, liderança, People Analytics), em `multiSelect`, sempre com a opção "Pular este e-mail".
- Nada é produzido antes da resposta.

## 3. Produzir as mídias

Crie `conteudo/AAAA-MM-DD/` (data de hoje) copiando `conteudo/2026-11-24/src` (o modelo mais recente). Depois:

1. **Fotos:** baixe do Banco de Imagens no Drive (pasta "Banco de Imagens") fotos ainda não usadas, com diversidade real. São 2 por tema: a capa do carrossel (mulher trabalhando, salvo pedido diferente) e a foto do slide 5. Redimensione pra `src/img/tNa.jpg` e `tNb.jpg`.
2. **`src/content.js`, um tema por escolha:**
   - carrossel de 6 slides (capa, texto da notícia, 2 slides ilustrados, foto, fechamento com "Pra praticar esta semana");
   - `info` (post único) e `caption` (legenda com a assinatura);
   - `linkedin` (3 ganchos + corpo, na voz `bruno-top-voice`);
   - `motion`: **como fazer na prática** em 4 cenas `passo` com exemplo, mais o `cta` "RESPONDE AQUI NA CAIXINHA.";
   - temas de D&I levam `di: true`, o que coloca o bloco do Pacto Global no fechamento.
3. **Regras de conteúdo:** só fatos e números das fontes; nada inventado. Uma ideia por slide. Assinatura POLVO RH.
4. **Gerar as mídias:**
   - `cd src && node shoot_static.js` gera os carrosséis e os posts únicos. Corrija todo aviso de OVERFLOW.
   - `./motion.sh <n>` gera o vídeo, a trilha e as 3 capas de Reels. Rode no máximo 2 em paralelo e acompanhe com um loop de espera.
   - Confira as imagens (folhas de contato) e alguns quadros de cada vídeo antes de seguir.
5. **Página da pauta:** gere `web/data.json` e `web/m/` (JPEGs, MP4, PNGs e capas, como em 24/11) e rode `python3 src/gen_page.py DD/MM/AAAA`. Publique um Artifact novo com `capabilities: {downloads: true}`. Se passar de 64 MB, divida a publicação em partes.
6. **GitHub:** commit e push no branch da sessão.

## 4. Aprovação (parada 2)

Mande o link da página e pergunte com `AskUserQuestion`:
- quais temas estão aprovados pra publicar (`multiSelect`);
- qual capa de Reels usar em cada um (1 tipográfica, 2 foto, 3 checklist). Alterne entre as semanas pra o perfil não ficar repetitivo;
- se é pra publicar agora ou um tema por dia, às 12h10 de Brasília. No segundo caso, agende com `send_later` nesta mesma sessão.

Pedidos de ajuste: corrija, gere de novo só o que mudou, republique a página e pergunte de novo. Só publique o que ele aprovou.

## 5. Publicar no Instagram

Requisito: a credencial do Instagram salva no ambiente pra `graph.instagram.com` (Authorization: Bearer). Se a chamada der 401/403 ou "no rule allows host", chame `request_credential` (host `graph.instagram.com`) e explique o motivo. Nunca peça o token no chat.

Pra cada tema aprovado:
```bash
python3 ferramentas/instagram/ig_publish.py --dia AAAA-MM-DD --tema N --preparar   # gera os JPEGs
git add -A && git commit -m "Mídias do Instagram, tema N" && git push               # deixa as mídias públicas
python3 ferramentas/instagram/ig_publish.py --dia AAAA-MM-DD --tema N --dry-run    # confere as URLs públicas
python3 ferramentas/instagram/ig_publish.py --dia AAAA-MM-DD --tema N --tipos carrossel,reels,stories --capa C
```
- O script registra o que publicou em `out/N-*/ig/publicado.json` e não repete.
- **Stories:** a API não coloca figurinhas. Avise o Bruno pra colar a "Caixinha de perguntas" manualmente, se quiser.
- **Se a API recusar o vídeo** pela URL do GitHub: diga isso ao Bruno, entregue o MP4 e a capa pela página e siga com o carrossel.

## 6. Fechamento

Responda com os links publicados (carrossel e Reels), o que ficou pendente, o link da página e o que o Bruno precisa fazer à mão (por exemplo, a caixinha nos stories). Faça commit e push do registro final.
