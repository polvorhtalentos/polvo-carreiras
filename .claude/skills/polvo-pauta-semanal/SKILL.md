---
name: polvo-pauta-semanal
description: Agente semanal da POLVO RH. Toda sexta lê no e-mail os alertas da semana, apresenta os temas pro Bruno escolher, produz todas as mídias (LinkedIn, carrossel, post único, legenda, motion na prática, 3 capas de Reels), publica a página da pauta, pede aprovação e agenda as publicações no Instagram (carrossel, Reels e stories) distribuídas estrategicamente pela semana seguinte. Use quando a tarefa agendada de sexta disparar ou quando o Bruno pedir "pauta da semana", "rodar o agente" ou "publicar no Instagram".
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

## 4. Aprovação e agenda (parada 2)

1. **Montar a proposta de agenda.** Ordene os temas por força (pauta mais quente e mais útil primeiro) e alterne as capas de Reels entre 1, 2 e 3:
   ```bash
   python3 ferramentas/instagram/agenda.py --dia AAAA-MM-DD --temas 3,1,5,2 --capas 2,1,3,2 --saida conteudo/AAAA-MM-DD/agenda.json
   ```
   Estratégia (o próprio script aplica): um tema por dia útil da **semana seguinte**, com os mais fortes de terça a quinta. No dia do tema, carrossel às 12h10 e story às 19h10. No dia seguinte, Reels às 18h40. No máximo 1 carrossel e 1 Reels por dia.
2. **Pedir a aprovação.** Mande o link da página e a agenda proposta numa tabela (dia, horário, tema, formato, capa). Pergunte com `AskUserQuestion`:
   - quais temas estão aprovados (`multiSelect`);
   - se a agenda está boa ou se ele quer trocar a ordem dos temas ou a capa de algum.
3. **Ajustes:** corrija, gere de novo só o que mudou, republique a página, refaça a agenda e pergunte de novo. Só o que ele aprovou entra na agenda.

## 5. Agendar e publicar no Instagram

Requisito: a credencial do Instagram salva no ambiente pra `graph.instagram.com` (Authorization: Bearer; token gerado no app da Meta em Casos de uso > Gerenciar mensagens e conteúdo no Instagram > Configuração da API com login do Instagram). Confira com `python3 ferramentas/instagram/ig_publish.py --testar`. Se faltar ou vencer (60 dias), chame `request_credential` (host `graph.instagram.com`). Se o Bruno usar o login do Facebook, passe `--plataforma facebook` e o host `graph.facebook.com` e explique o motivo. Nunca peça o token no chat.

**Logo depois da aprovação**, ainda na sexta, deixe tudo pronto e público:
```bash
for N in <temas aprovados>; do python3 ferramentas/instagram/ig_publish.py --dia AAAA-MM-DD --tema $N --preparar; done
git add -A && git commit -m "Mídias do Instagram e agenda aprovada" && git push
for N in <temas aprovados>; do python3 ferramentas/instagram/ig_publish.py --dia AAAA-MM-DD --tema $N --dry-run; done
```

**Depois, agende cada item da agenda nesta mesma sessão** com `send_later`, com `at` no formato `AAAA-MM-DDTHH:MM:00[America/Sao_Paulo]`, `initiation: human_request` e um nome como "Instagram · tema 3 · carrossel". A mensagem é:
> Publicação agendada (agenda aprovada pelo Bruno em DD/MM): rode `python3 ferramentas/instagram/ig_publish.py --dia AAAA-MM-DD --tema N --tipos TIPO --capa C`, confira o resultado e registre o link. Se falhar, avise o Bruno com o motivo e entregue o arquivo pra postar à mão.

Ao disparar cada aviso, publique **só aquele item**:
- o script registra o que publicou em `out/N-*/ig/publicado.json` e não repete;
- faça commit e push do registro e responda em uma linha com o link do post.

Observações:
- **Stories:** a API não coloca figurinhas. No aviso do story, lembre o Bruno de colar a "Caixinha de perguntas", se ele quiser.
- **Se a API recusar o vídeo** pela URL do GitHub: avise o Bruno, entregue o MP4 e a capa pela página e mantenha os carrosséis agendados.
- **Se o Bruno pedir pra pausar ou mudar a agenda:** apague os avisos pendentes com `delete_trigger` (a lista sai em `list_triggers`) e agende de novo.

## 5b. Modo manual (sem acesso à API)

Use este modo quando o acesso à API da Meta não estiver disponível: credencial ausente, conta restrita pela Meta ou app sem portfólio empresarial. A agenda continua a mesma; só muda quem aperta "publicar".
- Agende os mesmos horários com `send_later`. A mensagem de cada aviso pede pra entregar ao Bruno, com `SendUserFile`, os arquivos daquele item:
  - **carrossel:** os 6 PNGs e a legenda;
  - **Reels:** o MP4, a capa escolhida e a legenda;
  - **story:** o MP4 e o lembrete da caixinha.
- O aviso deve ser uma mensagem curta: "Hora de postar: tema N, carrossel. Arquivos abaixo; legenda pronta pra copiar."
- Se o Bruno disser que a API voltou, rode `ig_publish.py --testar` e passe os itens que faltam pro modo automático.

## 6. Fechamento

Na sexta, depois de agendar, responda com a agenda final (tabela), o link da página e o que o Bruno vai precisar fazer à mão (por exemplo, a caixinha nos stories). Ao longo da semana, cada publicação responde com o link do post. Depois da última, mande um resumo com todos os links.
