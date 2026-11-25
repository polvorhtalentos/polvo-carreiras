// Conteúdos de 24/11/2026 · alertas do Google (16, 17, 21 e 22/11) + 2 pautas do LinkedIn Notícias
// Cada tema: carrossel Instagram (6), post único (infográfico), legenda, texto LinkedIn e motion de stories.
window.THEMES = [
/* ───────── 1 · RH SUPERESTIMA A IA ───────── */
{ id: 1, slug: 'rh-superestima-ia', nome: 'Seu RH está em que fase da IA?', pilar: 'People Analytics', di: false,
  alerta: 'Alerta Rh brasil · 16/11', fonte: 'RH Pra Você · 16/11/2026',
  link: 'https://rhpravoce.com.br/redacao/motiva-anuncia-gisele-takekawa',
  fato: 'Líderes de RH superestimam a maturidade em IA de suas áreas, mostra pesquisa citada pelo RH Pra Você.',
  carousel: [
    { type: 'cover', img: 'img/t1a.jpg', pos: '55% 35%', label: 'IA NO RH', title: 'SEU RH USA IA. MAS EM QUE FASE ELE ESTÁ?', sub: 'O TESTE DE MATURIDADE QUE EU USO' },
    { type: 'text', label: 'A PESQUISA', title: 'LÍDERES DE RH SUPERESTIMAM A MATURIDADE EM IA DAS PRÓPRIAS ÁREAS',
      body: 'TER FERRAMENTA NÃO É SER MADURO. MATURIDADE É O QUE A IA MUDA NAS DECISÕES.', source: 'FONTE: RH PRA VOCÊ · 16/11/2026' },
    { type: 'flow', label: 'O CAMINHO', title: 'AS 3 FASES DA IA NO RH',
      items: [['EFICIÊNCIA', 'AUTOMATIZA TRIAGEM E TAREFAS'], ['VISIBILIDADE', 'DADOS DE PESSOAS NA MESA DA DIRETORIA'], ['INTELIGÊNCIA', 'ANTECIPA RISCOS E ORIENTA DECISÕES']] },
    { type: 'compare', label: 'O AUTOENGANO', title: 'O QUE PARECE x O QUE É',
      left: { head: 'PARECE MADURO', items: ['TEMOS LICENÇA DE IA', 'O TIME JÁ TESTOU', 'FIZEMOS UM PILOTO'] },
      right: { head: 'É MADURO', items: ['A IA MUDOU UMA DECISÃO', 'TODO MUNDO USA TODA SEMANA', 'TEM INDICADOR DE ANTES E DEPOIS'] }, foot: '', note: '' },
    { type: 'photo', img: 'img/t1b.jpg', pos: '50% 40%', title: 'FERRAMENTA SEM PROCESSO É SÓ MAIS UMA ASSINATURA.' },
    { type: 'close', practice: 'LISTE 3 DECISÕES DE PESSOAS DO ÚLTIMO MÊS. EM QUANTAS A IA OU OS DADOS AJUDARAM DE VERDADE?', question: 'EM QUE FASE O SEU RH ESTÁ HOJE?' } ],
  info: { label: 'IA NO RH', title: 'TESTE DE MATURIDADE EM 4 PERGUNTAS',
    items: [['USO', 'A IA ESTÁ NA ROTINA SEMANAL DO TIME?'], ['PROCESSO', 'EXISTE UM FLUXO ESCRITO DE USO?'], ['DADO', 'VOCÊ MEDE O ANTES E O DEPOIS?'], ['DECISÃO', 'ALGUMA DECISÃO MUDOU POR CAUSA DELA?']],
    tip: '4 RESPOSTAS SIM: FASE 3. MENOS QUE ISSO, AINDA É PILOTO.' },
  motion: [
    { type: 'big', title: 'SEU RH USA IA?', sub: 'TODO RH DIZ QUE SIM.' },
    { type: 'big', title: 'LÍDERES DE RH SUPERESTIMAM A MATURIDADE EM IA.', sub: 'FONTE: RH PRA VOCÊ' },
    { type: 'list', title: 'AS 3 FASES DA IA NO RH', items: ['EFICIÊNCIA', 'VISIBILIDADE', 'INTELIGÊNCIA'] },
    { type: 'cta', question: 'EM QUE FASE ESTÁ O SEU RH?', save: 'RESPONDE AQUI NA CAIXINHA.' } ],
  linkedin: {
    ganchos: ['Seu RH usa IA. Mas em que fase ele está de verdade?', 'Ter licença de IA não é ser maduro em IA.', 'Uma pesquisa mostrou que líderes de RH superestimam a própria maturidade em IA. Eu não me surpreendi.'],
    corpo: `Uma pesquisa citada pelo RH Pra Você mostrou que líderes de RH superestimam a maturidade em IA das próprias áreas.

Eu entendo o porquê. É fácil confundir ter ferramenta com ter maturidade. Licença comprada, time que já testou, um piloto rodando. Parece avanço, e é. Mas ainda não é maturidade.

Eu uso IA no RH há 2 anos. Comecei automatizando triagem e revisão de descrições de cargo. Só depois de muito ajuste a gente chegou em gerar inteligência pra diretoria.

Por isso eu olho pra IA no RH em 3 fases:

📌 Eficiência operacional: a IA tira tarefa repetitiva do caminho.
📌 Visibilidade estratégica: os dados de pessoas chegam na mesa de quem decide.
📌 Inteligência organizacional: a IA ajuda a antecipar risco e orientar decisão.

O teste que eu faço é simples. Pega as decisões de pessoas do último mês. Em quantas a IA ou os dados mudaram alguma coisa de verdade?

Se a resposta for "nenhuma", tudo bem. É ponto de partida, não sentença. Mas é bom saber onde a gente está antes de dizer onde quer chegar.

E no seu RH? Em que fase vocês estão hoje? O que falta pra próxima?

#RHEstratégico #PeopleAnalytics #IA` },
  caption: `Seu RH usa IA. Mas em que fase ele está?

Uma pesquisa citada pelo RH Pra Você mostrou que líderes de RH superestimam a maturidade em IA das próprias áreas. Ter ferramenta é diferente de ter maturidade.

Eu olho em 3 fases: eficiência (tira tarefa repetitiva), visibilidade (dados de pessoas na mesa da diretoria) e inteligência (antecipa riscos e orienta decisões).

Pra praticar esta semana: liste 3 decisões de pessoas do último mês e veja em quantas a IA ou os dados ajudaram de verdade.

Em que fase o seu RH está hoje?

#ianorh #peopleanalytics #rh

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics` },

/* ───────── 2 · ALEGRIA NO TRABALHO ───────── */
{ id: 2, slug: 'alegria-no-trabalho', nome: 'Alegria no trabalho não cabe num formulário', pilar: 'Clima e cultura', di: false,
  alerta: 'Alerta Rh brasil · 16/11', fonte: 'Você RH · 16/11/2026',
  link: 'https://vocerh.abril.com.br/politicasepraticas/brasil-ocupa-o-4o-lugar-no-indice-global-de-alegria-no-ambiente-trabalho/',
  fato: 'Brasil ocupa o 4º lugar no índice global de alegria no ambiente de trabalho; 48% dos gestores de RH consideram os auxílios de alimentação importantes para a produtividade.',
  carousel: [
    { type: 'cover', img: 'img/t2a.jpg', pos: '50% 35%', label: 'CLIMA', title: 'BRASIL É 4º EM ALEGRIA NO TRABALHO. E NA SUA EMPRESA?', sub: 'O QUE FAZ ALGUÉM GOSTAR DE TRABALHAR' },
    { type: 'text', label: 'A PESQUISA', title: 'BRASIL É 4º NO ÍNDICE GLOBAL DE ALEGRIA NO TRABALHO',
      body: 'E 48% DOS GESTORES DE RH VEEM O AUXÍLIO-ALIMENTAÇÃO COMO IMPORTANTE PRA PRODUTIVIDADE.', source: 'FONTE: VOCÊ RH · 16/11/2026' },
    { type: 'compare', label: 'O EQUILÍBRIO', title: 'BENEFÍCIO AJUDA. MAS NÃO SEGURA SOZINHO.',
      left: { head: 'O PACOTE DÁ', items: ['VR E VA', 'DAY OFF', 'HAPPY HOUR'] },
      right: { head: 'O DIA A DIA DÁ', items: ['LÍDER QUE ESCUTA', 'TRABALHO COM SENTIDO', 'RECONHECIMENTO'] }, foot: 'OS DOIS JUNTOS FAZEM O CLIMA.', note: '' },
    { type: 'steps', label: 'NA PRÁTICA', title: 'COMO MEDIR DE VERDADE',
      items: ['CONVERSE, NÃO SÓ DISPARE FORMULÁRIO', 'GARANTA SIGILO NAS RESPOSTAS', 'TRANSFORME FALAS EM INDICADOR POR ÁREA', 'DEVOLVA O QUE VAI MUDAR, COM PRAZO'] },
    { type: 'photo', img: 'img/t2b.jpg', pos: '45% 30%', title: 'FORMULÁRIO GENÉRICO NÃO MEDE CLIMA. MEDE PACIÊNCIA.' },
    { type: 'close', practice: 'PERGUNTE A 3 PESSOAS DO TIME O QUE FAZ ELAS QUEREREM VIR TRABALHAR. ANOTE AS PALAVRAS QUE SE REPETEM.', question: 'O QUE MAIS TE DÁ ALEGRIA NO TRABALHO?' } ],
  info: { label: 'CLIMA', title: 'O QUE SUSTENTA A ALEGRIA NO TRABALHO',
    items: [['LIDERANÇA', 'LÍDER QUE ESCUTA E DÁ RETORNO.'], ['SENTIDO', 'SABER POR QUE O TRABALHO IMPORTA.'], ['RECONHECIMENTO', 'ESFORÇO VISTO E DITO EM VOZ ALTA.'], ['BENEFÍCIOS', 'CUIDADO COM O BÁSICO.']],
    tip: 'BENEFÍCIO ATRAI. O DIA A DIA É QUE SEGURA.' },
  motion: [
    { type: 'count', value: 4, dec: 0, unit: 'º', caption: 'LUGAR DO BRASIL NO ÍNDICE GLOBAL DE ALEGRIA NO TRABALHO', hold: 2 },
    { type: 'big', title: 'BENEFÍCIO AJUDA.', sub: 'MAS QUEM SEGURA O CLIMA É O DIA A DIA.' },
    { type: 'list', title: 'O QUE SUSTENTA', items: ['LÍDER QUE ESCUTA', 'TRABALHO COM SENTIDO', 'RECONHECIMENTO'] },
    { type: 'cta', question: 'O QUE MAIS TE DÁ ALEGRIA NO TRABALHO?', save: 'RESPONDE AQUI NA CAIXINHA.' } ],
  linkedin: {
    ganchos: ['Formulário de clima com pergunta genérica não mede clima. Mede paciência.', 'O Brasil é 4º lugar em alegria no trabalho. Mas alegria não se mede só com benefício.', 'Eu poderia ter mandado um formulário. Preferi sentar com cada pessoa.'],
    corpo: `O Brasil ocupa o 4º lugar num índice global de alegria no ambiente de trabalho, segundo a Você RH. Na mesma pesquisa, 48% dos gestores de RH dizem que auxílio-alimentação é importante pra produtividade.

Concordo. Benefício bem feito é cuidado com o básico. Mas eu aprendi que ele atrai mais do que segura.

Quando fui entender o clima do ecossistema onde trabalho, eu poderia ter disparado um formulário. Preferi sentar com cada pessoa. E o que apareceu nas conversas quase nunca era sobre o pacote. Era sobre o líder que escuta, o trabalho que faz sentido e o esforço que alguém vê.

O que eu levo disso:

✅ Converse antes de disparar pergunta genérica.
✅ Garanta sigilo. Sem isso, ninguém fala de verdade.
✅ Transforme as falas em indicador por área, sem expor ninguém.
✅ Devolva o que vai mudar, com prazo. Escuta sem retorno vira desconfiança.

Alegria no trabalho é uma balança: benefício de um lado, dia a dia do outro. Quando um pesa demais, a outra ponta sente.

E pra você? O que mais te dá vontade de trabalhar, além do salário e dos benefícios?

#Cultura #ClimaOrganizacional #RHEstratégico` },
  caption: `O Brasil é 4º lugar em alegria no trabalho, segundo a Você RH. E 48% dos gestores de RH dizem que auxílio-alimentação ajuda na produtividade.

Benefício ajuda, mas não segura sozinho. O que eu mais ouço nas conversas de clima é sobre líder que escuta, trabalho com sentido e reconhecimento.

Pra medir isso, formulário genérico não basta. Converse, garanta sigilo, transforme as falas em indicador e devolva o que vai mudar.

Pra praticar esta semana: pergunte a 3 pessoas do time o que faz elas quererem vir trabalhar.

O que mais te dá alegria no trabalho?

#climaorganizacional #cultura #rh

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics` },

/* ───────── 3 · TENDÊNCIAS 2027 ───────── */
{ id: 3, slug: 'tendencias-2027', nome: 'Tendência só vale quando vira plano', pilar: 'DHO', di: false,
  alerta: 'Alerta Rh brasil · 17/11', fonte: 'Mundo RH · 17/11/2026',
  link: 'https://mundorh.com.br/ipsos-prepara-debate-sobre-tendencias-que-podem-influenciar-o-brasil-em-2027/',
  fato: 'A Ipsos realiza em 1º de dezembro um debate sobre tendências que podem influenciar o Brasil em 2027. Para o RH, acompanhar esses movimentos ajuda no planejamento de competências e na adaptação das equipes.',
  carousel: [
    { type: 'cover', img: 'img/t3a.jpg', pos: '55% 62%', label: 'TENDÊNCIAS 2027', title: '2027 COMEÇA NO PLANEJAMENTO DE AGORA', sub: 'COMO O RH PREPARA O TIME PRO ANO QUE VEM' },
    { type: 'text', label: 'A PAUTA', title: 'IPSOS DEBATE EM 1º/12 AS TENDÊNCIAS PRO BRASIL EM 2027',
      body: 'PRO RH, TENDÊNCIA SÓ VALE QUANDO VIRA PLANO DE COMPETÊNCIAS.', source: 'FONTE: MUNDO RH · 17/11/2026' },
    { type: 'flow', label: 'O CAMINHO', title: 'DA TENDÊNCIA AO PLANO',
      items: [['LER', 'O QUE MUDA NO NEGÓCIO'], ['MAPEAR', 'QUE HABILIDADE VAI FALTAR'], ['AGIR', 'DESENVOLVER, CONTRATAR OU AUTOMATIZAR']] },
    { type: 'pairs', label: 'EM DEZEMBRO', title: '4 PERGUNTAS PRO SEU TIME',
      items: [['NEGÓCIO', 'O QUE MUDA NA NOSSA ÁREA EM 2027?'], ['TIME', 'QUE HABILIDADE FALTA PRA ISSO?'], ['PLANO', 'DESENVOLVER, CONTRATAR OU AUTOMATIZAR?'], ['PRAZO', 'O QUE FAZEMOS NO 1º TRIMESTRE?']] },
    { type: 'photo', img: 'img/t3b.jpg', pos: '45% 40%', title: 'TENDÊNCIA QUE NÃO VIRA PLANO É SÓ CONVERSA DE FIM DE ANO.' },
    { type: 'close', practice: 'ESCOLHA UMA HABILIDADE QUE SEU CARGO VAI PEDIR EM 2027 E RESERVE 30 MINUTOS POR SEMANA PRA ELA.', question: 'QUE HABILIDADE VOCÊ VAI DESENVOLVER EM 2027?' } ],
  info: { label: 'PLANEJAMENTO 2027', title: 'DA TENDÊNCIA AO PLANO DO TIME',
    items: [['LEIA O CENÁRIO', 'O QUE MUDA NO NEGÓCIO EM 2027.'], ['MAPEIE A LACUNA', 'O QUE FALTA NO TIME.'], ['DECIDA O CAMINHO', 'DESENVOLVER, CONTRATAR OU AUTOMATIZAR.'], ['PONHA PRAZO', 'METAS DO 1º TRIMESTRE NO PDI.']],
    tip: 'PDI: PLANO DE DESENVOLVIMENTO INDIVIDUAL.' },
  motion: [
    { type: 'big', title: '2027 JÁ COMEÇOU.', sub: 'PELO MENOS NO PLANEJAMENTO.' },
    { type: 'big', title: 'TENDÊNCIA SÓ VALE QUANDO VIRA PLANO.', sub: '' },
    { type: 'list', title: 'DA TENDÊNCIA AO PLANO', items: ['LEIA O CENÁRIO', 'MAPEIE A LACUNA', 'DECIDA O CAMINHO', 'PONHA PRAZO'] },
    { type: 'cta', question: 'QUE HABILIDADE VOCÊ VAI DESENVOLVER EM 2027?', save: 'RESPONDE AQUI NA CAIXINHA.' } ],
  linkedin: {
    ganchos: ['Todo dezembro tem lista de tendência. Pouca vira plano.', 'Tendência que não vira plano de competências é só conversa de fim de ano.', '2027 já começou. Pelo menos no planejamento.'],
    corpo: `A Ipsos vai debater no dia 1º de dezembro as tendências que podem influenciar o Brasil em 2027. O Mundo RH lembrou um ponto que eu acho central: pro RH, acompanhar esses movimentos ajuda no planejamento de competências.

Todo fim de ano chove lista de tendência. O problema é que pouca coisa sai da apresentação e vira plano.

O caminho que eu sigo com as lideranças é curto:

🎯 Ler o cenário: o que muda no nosso negócio no ano que vem?
🎯 Mapear a lacuna: que habilidade vai faltar, comparando com o que o time já tem?
🎯 Decidir o caminho: desenvolver quem está na casa, contratar ou automatizar?
🎯 Pôr prazo: o que entra no PDI já no primeiro trimestre?

Nada cravado em pedras. O plano vai ser ajustado com a roda andando. Mas sem ele, janeiro chega e a gente começa o ano apagando incêndio.

E eu levo uma crença pra essa conversa: não tem ninguém que não possa ser desenvolvido. A lacuna de hoje pode ser a força de amanhã, se alguém planejar.

Na sua área, qual habilidade vai fazer mais falta em 2027? Vocês já estão preparando o time pra isso?

#RHEstratégico #DesenvolvimentoHumano #Tendências2027` },
  caption: `2027 começa no planejamento de agora.

A Ipsos debate no dia 1º/12 as tendências que podem influenciar o Brasil em 2027. Pro RH, tendência só vale quando vira plano de competências.

O caminho: ler o cenário, mapear a lacuna do time, decidir entre desenvolver, contratar ou automatizar, e pôr prazo no PDI (plano de desenvolvimento individual).

Pra praticar esta semana: escolha uma habilidade que seu cargo vai pedir em 2027 e reserve 30 minutos por semana pra ela.

Que habilidade você vai desenvolver em 2027?

#carreira #tendencias2027 #desenvolvimento

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics` },

/* ───────── 4 · SÓ 4% DOS LÍDERES USAM IA NO TIME ───────── */
{ id: 4, slug: 'lideres-ia-no-time', nome: 'IA no time é combinado, não talento', pilar: 'Liderança', di: false,
  alerta: 'Alerta Desenvolvimento de líderes · 21/11', fonte: 'IstoÉ Dinheiro · 21/11/2026',
  link: 'https://istoedinheiro.com.br/ia-empresas-adocao-sistematica-equipes-pesquisa-groovia',
  fato: 'IA nas empresas: só 4% dos líderes relatam uso sistemático nas equipes (pesquisa citada pela IstoÉ Dinheiro).',
  carousel: [
    { type: 'cover', img: 'img/t4a.jpg', pos: '35% 30%', label: 'LIDERANÇA E IA', title: 'SÓ 4% DOS LÍDERES USAM IA DE FORMA SISTEMÁTICA NO TIME', sub: 'O QUE SEPARA O TESTE DO HÁBITO' },
    { type: 'text', label: 'A PESQUISA', title: 'SÓ 4% DOS LÍDERES RELATAM USO SISTEMÁTICO DE IA NAS EQUIPES',
      body: 'SEM COMBINADO, A IA FICA NO TESTE: CADA PESSOA USA DO SEU JEITO, QUANDO LEMBRA.', source: 'FONTE: ISTOÉ DINHEIRO · 21/11/2026' },
    { type: 'compare', label: 'A DIFERENÇA', title: 'USO SOLTO x USO SISTEMÁTICO',
      left: { head: 'SOLTO', items: ['CADA UM DO SEU JEITO', 'DEPENDE DE QUEM GOSTA', 'NINGUÉM MEDE'] },
      right: { head: 'SISTEMÁTICO', items: ['FLUXO COMBINADO', 'FAZ PARTE DA ROTINA', 'TEM INDICADOR'] }, foot: '', note: '' },
    { type: 'steps', label: 'O PAPEL DO LÍDER', title: '4 PASSOS PRA VIRAR HÁBITO',
      items: ['ESCOLHA UMA TAREFA REPETITIVA DO TIME', 'TESTE JUNTO E ESCREVA O PASSO A PASSO', 'COMBINE O QUE A IA FAZ E QUEM REVISA', 'MEÇA O TEMPO ANTES E DEPOIS'] },
    { type: 'photo', img: 'img/t4b.jpg', pos: '50% 50%', title: 'IA NO TIME NÃO É TALENTO INDIVIDUAL. É COMBINADO COLETIVO.' },
    { type: 'close', practice: 'ESCOLHA UMA TAREFA QUE SEU TIME REPETE TODA SEMANA E DESENHE ONDE A IA PODE ENTRAR NELA.', question: 'NO SEU TIME, A IA É HÁBITO OU TESTE?' } ],
  info: { label: 'LIDERANÇA E IA', title: 'DO TESTE AO HÁBITO: IA NO TIME',
    items: [['ESCOLHA', 'UMA TAREFA REPETITIVA DO TIME.'], ['DOCUMENTE', 'O PASSO A PASSO TESTADO JUNTO.'], ['COMBINE', 'O QUE A IA FAZ E QUEM REVISA.'], ['MEÇA', 'O TEMPO ANTES E DEPOIS.']],
    tip: 'QUEM REVISA O QUE A IA ENTREGA? COMBINE ISSO ANTES.' },
  motion: [
    { type: 'count', value: 4, dec: 0, unit: '%', caption: 'DOS LÍDERES USAM IA DE FORMA SISTEMÁTICA NO TIME', hold: 2 },
    { type: 'big', title: 'SEM COMBINADO, A IA FICA NO TESTE.', sub: 'CADA UM USA DO SEU JEITO.' },
    { type: 'list', title: 'DO TESTE AO HÁBITO', items: ['ESCOLHA UMA TAREFA', 'ESCREVA O PASSO A PASSO', 'COMBINE QUEM REVISA', 'MEÇA ANTES E DEPOIS'] },
    { type: 'cta', question: 'NO SEU TIME, A IA É HÁBITO OU TESTE?', save: 'RESPONDE AQUI NA CAIXINHA.' } ],
  linkedin: {
    ganchos: ['Só 4% dos líderes usam IA de forma sistemática nas equipes. O resto ainda está no teste.', 'IA no time não é talento individual. É combinado coletivo.', 'Todo mundo no seu time usa IA. Mas cada um do seu jeito. Isso não é adoção.'],
    corpo: `Uma pesquisa citada pela IstoÉ Dinheiro mostrou que só 4% dos líderes relatam uso sistemático de IA nas equipes.

Não me assusta. O que eu vejo no dia a dia é a IA dependendo de quem gosta de tecnologia. Uma pessoa usa muito, outra nunca abriu, e ninguém sabe dizer o que mudou.

Quando comecei a usar IA no RH, o primeiro ganho veio de uma tarefa só: triagem. Escolhi um processo repetitivo, testei junto, escrevi o passo a passo e combinei o que a IA fazia e o que a gente revisava. Foi trabalho de formiguinha. Mas virou rotina.

É isso que separa o teste do hábito:

👉 Uma tarefa repetitiva escolhida pelo time, não pela moda.
👉 Um passo a passo escrito, que qualquer pessoa consegue seguir.
👉 Um combinado claro de quem revisa o que a IA entrega.
👉 Uma medida simples de antes e depois.

O papel da liderança aqui não é saber mais de IA do que o time. É criar o combinado.

E no seu time? A IA já é hábito ou ainda é teste? Qual tarefa você escolheria primeiro?

#Liderança #IA #RHEstratégico` },
  caption: `Só 4% dos líderes relatam uso sistemático de IA nas equipes, segundo pesquisa citada pela IstoÉ Dinheiro.

Sem combinado, a IA fica no teste: cada pessoa usa do seu jeito, quando lembra. Virar hábito pede 4 passos: escolher uma tarefa repetitiva, escrever o passo a passo, combinar quem revisa o que a IA entrega e medir o antes e o depois.

Pra praticar esta semana: escolha uma tarefa que seu time repete toda semana e desenhe onde a IA pode entrar nela.

No seu time, a IA é hábito ou teste?

#lideranca #inteligenciaartificial #gestaodepessoas

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics` },

/* ───────── 5 · LIDERANÇAS NEGRAS +20% DE RENDA ───────── */
{ id: 5, slug: 'formacao-liderancas-negras', nome: 'Formação vira ascensão', pilar: 'D&I', di: true,
  alerta: 'Alerta Desenvolvimento de líderes · 21/11', fonte: 'Paraíba Business · 21/11/2026',
  link: 'https://paraibabusiness.com.br/formacao-de-liderancas-negras-eleva-renda-media-em-20-aponta-pesquisa/',
  fato: 'Formação de lideranças negras eleva a renda média em 20%, aponta pesquisa. A formação e o desenvolvimento de profissionais negros ampliam a progressão profissional e o acesso a cargos de liderança.',
  carousel: [
    { type: 'cover', img: 'img/t5a.jpg', pos: '35% 35%', label: 'LIDERANÇA NEGRA', title: 'FORMAR LIDERANÇAS NEGRAS ELEVA A RENDA EM 20%', sub: 'QUANDO O DESENVOLVIMENTO VIRA ASCENSÃO' },
    { type: 'text', label: 'A PESQUISA', title: 'FORMAÇÃO DE LIDERANÇAS NEGRAS ELEVA RENDA MÉDIA EM 20%',
      body: 'DESENVOLVIMENTO AMPLIA A PROGRESSÃO E O ACESSO A CARGOS DE LIDERANÇA.', source: 'FONTE: PARAÍBA BUSINESS · 21/11/2026' },
    { type: 'compare', label: 'A DIFERENÇA', title: 'CURSO SOLTO x PROGRAMA DE ASCENSÃO',
      left: { head: 'CURSO SOLTO', items: ['TREINA E ACABA', 'NINGUÉM ABRE PORTA', 'SEM CARGO EM VISTA'] },
      right: { head: 'ASCENSÃO', items: ['TRILHA COM PRÁTICA', 'MENTORIA E PATROCÍNIO', 'CARGO-ALVO COM PRAZO'] }, foot: 'FORMAÇÃO VIRA RENDA QUANDO VIRA PROMOÇÃO.', note: '' },
    { type: 'steps', label: 'NA EMPRESA', title: 'COMO ESTRUTURAR',
      items: ['MAPEIE TALENTOS NEGROS COM POTENCIAL', 'MONTE UMA TRILHA COM PRÁTICA REAL', 'LIGUE CADA PESSOA A UM PATROCINADOR', 'ACOMPANHE PROMOÇÕES POR GRUPO'] },
    { type: 'photo', img: 'img/t5b.jpg', pos: '55% 35%', title: 'NÃO TEM NINGUÉM QUE NÃO POSSA SER DESENVOLVIDO.' },
    { type: 'close', practice: 'SE VOCÊ LIDERA, PERGUNTE: QUEM ESTOU PREPARANDO PRA MINHA CADEIRA? SE A RESPOSTA NÃO TEM DIVERSIDADE, COMECE POR AÍ.', question: 'SUA EMPRESA FORMA LIDERANÇAS NEGRAS?' } ],
  info: { label: 'LIDERANÇA NEGRA', title: 'DO DESENVOLVIMENTO À LIDERANÇA',
    items: [['MAPEAR', 'QUEM TEM POTENCIAL E QUER CRESCER.'], ['FORMAR', 'TRILHA COM PRÁTICA, NÃO SÓ CURSO.'], ['PATROCINAR', 'LÍDER SÊNIOR QUE ABRE PORTAS.'], ['PROMOVER', 'CARGO-ALVO COM PRAZO.'], ['MEDIR', 'PROMOÇÕES E RENDA POR GRUPO.']],
    tip: 'FORMAÇÃO VIRA RENDA QUANDO VIRA PROMOÇÃO.' },
  motion: [
    { type: 'count', value: 20, dec: 0, ipre: '+', unit: '%', caption: 'DE RENDA MÉDIA COM A FORMAÇÃO DE LIDERANÇAS NEGRAS', hold: 2 },
    { type: 'big', title: 'FORMAÇÃO VIRA ASCENSÃO.', sub: 'QUANDO TEM PLANO DE VERDADE.' },
    { type: 'list', title: 'O QUE FUNCIONA', items: ['TRILHA COM PRÁTICA', 'MENTORIA E PATROCÍNIO', 'CARGO-ALVO COM PRAZO'] },
    { type: 'cta', question: 'SUA EMPRESA FORMA LIDERANÇAS NEGRAS?', save: 'RESPONDE AQUI NA CAIXINHA.' } ],
  linkedin: {
    ganchos: ['Formar lideranças negras eleva a renda média em 20%. O número importa. O caminho até ele importa mais.', 'Não tem ninguém que não possa ser desenvolvido. Mas tem muita gente que nunca foi convidada a se desenvolver.', 'Curso não promove ninguém. Plano promove.'],
    corpo: `Uma pesquisa divulgada pelo Paraíba Business aponta que a formação de lideranças negras eleva a renda média em 20%. E mostra que desenvolver profissionais negros amplia a progressão e o acesso a cargos de liderança.

Eu levo uma crença pra vida: não tem ninguém que não possa ser desenvolvido. O problema é que muita gente talentosa nunca foi convidada pra esse desenvolvimento.

E tem um detalhe que eu vejo muito: empresa que oferece um curso, entrega o certificado e para por aí. Formação só vira renda quando vira promoção. E promoção precisa de plano.

O que faz diferença, na minha prática:

✅ Mapear quem tem potencial e quer crescer, com critério escrito.
✅ Trilha com prática real, não só conteúdo.
✅ Um patrocinador: alguém sênior que abre porta e coloca o nome da pessoa na mesa.
✅ Cargo-alvo com prazo, registrado no PDI.
✅ Acompanhar promoções por grupo. Se não mede, não sabe se está funcionando.

Pra quem lidera, a pergunta é simples: quem você está preparando pra sua cadeira? Se a resposta não tem diversidade, dá pra começar por aí.

Na sua empresa, existe um caminho estruturado pra formar lideranças negras? O que tem funcionado?

#LiderançaNegra #DiversidadeEInclusão #DesenvolvimentoHumano` },
  caption: `Formar lideranças negras eleva a renda média em 20%, aponta pesquisa divulgada pelo Paraíba Business.

Mas curso solto não promove ninguém. Formação vira renda quando vira promoção. Pra isso, a empresa precisa mapear talentos, montar trilha com prática, ligar cada pessoa a um patrocinador e acompanhar as promoções por grupo.

Pra praticar esta semana: se você lidera, pergunte quem você está preparando pra sua cadeira.

Sua empresa forma lideranças negras?

#liderancanegra #diversidadeeinclusao #carreira

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics` },

/* ───────── 6 · NEGROS NA LIDERANÇA ───────── */
{ id: 6, slug: 'negros-na-lideranca', nome: 'Onde o funil trava', pilar: 'D&I', di: true,
  alerta: 'Alerta Inclusão e diversidade · 22/11', fonte: 'Bahia Econômica · 22/11/2026',
  link: 'https://bahiaeconomica.com.br/economia-e-politica/empresas-ampliam-presenca-de-profissionais-negros-em-cargos-de-lideranca-212177',
  fato: 'Empresas ampliam a presença de profissionais negros em cargos de liderança; a atuação na agenda de diversidade e inclusão rendeu reconhecimentos.',
  carousel: [
    { type: 'cover', img: 'img/t6a.jpg', pos: '60% 30%', label: 'DIVERSIDADE E INCLUSÃO', title: 'MAIS PESSOAS NEGRAS NA LIDERANÇA. COMO ACELERAR?', sub: 'O FUNIL QUE TODO RH PRECISA OLHAR' },
    { type: 'text', label: 'A NOTÍCIA', title: 'EMPRESAS AMPLIAM PRESENÇA DE PROFISSIONAIS NEGROS NA LIDERANÇA',
      body: 'ESSE AVANÇO APARECE QUANDO A EMPRESA ACOMPANHA TODO O CAMINHO, NÃO SÓ A ENTRADA.', source: 'FONTE: BAHIA ECONÔMICA · 22/11/2026' },
    { type: 'flow', label: 'PEOPLE ANALYTICS', title: 'ONDE O FUNIL TRAVA',
      items: [['ENTRADA', 'QUEM É CONTRATADO'], ['CRESCIMENTO', 'QUEM É PROMOVIDO'], ['DECISÃO', 'QUEM CHEGA À LIDERANÇA']], note: 'PEOPLE ANALYTICS: DECISÃO SOBRE PESSOAS COM BASE EM DADOS.' },
    { type: 'pairs', label: 'PRO RH', title: '3 PERGUNTAS QUE DESTRAVAM',
      items: [['CONTRATAÇÃO', 'A LISTA FINAL DE CANDIDATOS É DIVERSA?'], ['PROMOÇÃO', 'OS CRITÉRIOS ESTÃO ESCRITOS?'], ['SUCESSÃO', 'QUEM ESTÁ SENDO PREPARADO PRA LIDERAR?']] },
    { type: 'photo', img: 'img/t6b.jpg', pos: '35% 30%', title: 'DIVERSIDADE NA ENTRADA É COMEÇO. NA DECISÃO É MUDANÇA.' },
    { type: 'close', practice: 'LEVANTE QUANTAS PESSOAS NEGRAS FORAM PROMOVIDAS NO SEU TIME NESTE ANO. O NÚMERO MOSTRA ONDE AGIR.', question: 'NA SUA EMPRESA, ONDE O FUNIL TRAVA?' } ],
  info: { label: 'DIVERSIDADE E INCLUSÃO', title: 'O FUNIL DA LIDERANÇA NEGRA',
    items: [['ENTRADA', 'QUEM É CONTRATADO, POR GRUPO.'], ['CRESCIMENTO', 'QUEM É PROMOVIDO, POR GRUPO.'], ['DECISÃO', 'QUEM CHEGA À LIDERANÇA.'], ['PERMANÊNCIA', 'QUEM FICA E QUEM SAI.']],
    tip: 'MEÇA CADA ETAPA POR GRUPO. O NÚMERO MOSTRA ONDE AGIR.' },
  motion: [
    { type: 'big', title: 'MAIS PESSOAS NEGRAS NA LIDERANÇA.', sub: 'EMPRESAS ESTÃO AMPLIANDO ESSA PRESENÇA.' },
    { type: 'list', title: 'ONDE OLHAR', items: ['QUEM ENTRA', 'QUEM CRESCE', 'QUEM LIDERA', 'QUEM FICA'] },
    { type: 'big', title: 'O NÚMERO MOSTRA ONDE AGIR.', sub: '' },
    { type: 'cta', question: 'ONDE O FUNIL TRAVA NA SUA EMPRESA?', save: 'RESPONDE AQUI NA CAIXINHA.' } ],
  linkedin: {
    ganchos: ['Diversidade na entrada é começo. Na cadeira de decisão é mudança.', 'Empresas estão ampliando a presença de pessoas negras na liderança. A pergunta é: onde o seu funil trava?', 'Contratar com diversidade e promover sem diversidade é só mudar o problema de lugar.'],
    corpo: `A Bahia Econômica mostrou empresas ampliando a presença de profissionais negros em cargos de liderança, com reconhecimento pela atuação em diversidade e inclusão.

Boa notícia. E ela me lembra de um aprendizado que os dados me deram.

Quando o RH olha só pra contratação, comemora cedo. Diversidade na entrada é começo. Na cadeira de decisão é mudança. E entre uma e outra existe um funil que quase ninguém mede.

Eu olho quatro pontos, sempre por grupo:

📌 Quem entra: a lista final de candidatos é diversa?
📌 Quem cresce: os critérios de promoção estão escritos ou dependem de quem é mais "visto"?
📌 Quem lidera: quem está sendo preparado pra sucessão?
📌 Quem fica: onde estão as saídas, e por quê?

Quando cruzei dados de clima, de desligamento e de liderança, aprendi que o problema raramente está onde a gente imagina. O número mostra onde agir. E evita que a gente gaste energia no lugar errado.

Na sua empresa, em qual dessas etapas o funil trava? Vocês já medem isso por grupo?

#DiversidadeEInclusão #PeopleAnalytics #LiderançaNegra` },
  caption: `Empresas estão ampliando a presença de profissionais negros na liderança, mostra a Bahia Econômica.

Pra acelerar, o RH precisa olhar o funil inteiro, por grupo: quem entra, quem cresce, quem chega à liderança e quem fica. Diversidade na entrada é começo. Na decisão é mudança.

Pra praticar esta semana: levante quantas pessoas negras foram promovidas no seu time neste ano.

Na sua empresa, onde o funil trava?

#diversidadeeinclusao #liderancanegra #peopleanalytics

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics` },

/* ───────── 7 · MÊS DA CONSCIÊNCIA NEGRA ───────── */
{ id: 7, slug: 'consciencia-negra-o-ano-todo', nome: 'O mês acaba, a agenda não', pilar: 'D&I', di: true,
  alerta: 'LinkedIn Notícias · 11/11', fonte: 'LinkedIn Notícias · nov/2026',
  link: 'https://www.linkedin.com/news/story/m%C3%AAs-da-consci%C3%AAncia-negra-confira-as-conversas-7777244/',
  fato: 'LinkedIn Notícias reuniu conversas do Mês da Consciência Negra. Em uma delas, Maurício Rodrigues (Bayer) lembra que pessoas negras são 55% da população brasileira e conta que, em 5 anos, o número de pessoas negras no quadro da Bayer cresceu 40% e a representatividade negra dobrou na liderança e nas novas contratações, com grupo de afinidade (BayAfro), trainee, desenvolvimento de lideranças negras e parceria com o MOVER.',
  carousel: [
    { type: 'cover', img: 'img/t7a.jpg', pos: '50% 25%', label: 'CONSCIÊNCIA NEGRA', title: 'O MÊS DA CONSCIÊNCIA NEGRA ACABA. A AGENDA NÃO.', sub: 'O QUE FAZ A DIVERSIDADE ANDAR O ANO TODO' },
    { type: 'text', label: 'O CENÁRIO', title: 'PESSOAS NEGRAS SÃO 55% DA POPULAÇÃO. A LIDERANÇA AINDA NÃO REFLETE ISSO.',
      body: 'NO LINKEDIN, PROFISSIONAIS DIVIDIRAM AVANÇOS E O QUE AINDA FALTA.', source: 'FONTE: LINKEDIN NOTÍCIAS · NOV/2026' },
    { type: 'grid', label: 'UM CASO COMPARTILHADO', title: 'O QUE A BAYER CONTOU',
      items: [['AFINIDADE', 'GRUPO RACIAL HÁ MAIS DE 10 ANOS'], ['ENTRADA', 'PROGRAMAS DE TRAINEE'], ['ASCENSÃO', 'FORMAÇÃO DE LÍDERES NEGROS'], ['REDE', 'PARCERIA COM O MOVER']] },
    { type: 'pairs', label: 'EM 5 ANOS', title: 'O RESULTADO RELATADO',
      items: [['+40%', 'PESSOAS NEGRAS NO QUADRO'], ['2X', 'REPRESENTATIVIDADE NA LIDERANÇA'], ['2X', 'NAS NOVAS CONTRATAÇÕES']] },
    { type: 'photo', img: 'img/t7b.jpg', pos: '60% 35%', title: 'MUDAR O CENÁRIO PASSA POR QUEM A GENTE CONTRATA E PROMOVE.' },
    { type: 'close', practice: 'ESCOLHA UMA DECISÃO DE PESSOAS DESTA SEMANA (CONTRATAR, PROMOVER, INDICAR) E OLHE QUEM FICOU DE FORA.', question: 'O QUE SUA EMPRESA FAZ DEPOIS DE NOVEMBRO?' } ],
  info: { label: 'CONSCIÊNCIA NEGRA', title: 'DIVERSIDADE O ANO TODO: 4 FRENTES',
    items: [['ENTRADA', 'TRAINEE E VAGAS AFIRMATIVAS.'], ['PERTENCIMENTO', 'GRUPO DE AFINIDADE ATIVO.'], ['ASCENSÃO', 'FORMAÇÃO DE LIDERANÇAS NEGRAS.'], ['REDE', 'PARCERIAS QUE ACELERAM A INCLUSÃO.']],
    tip: 'MEÇA QUEM ENTRA, QUEM CRESCE E QUEM FICA. O ANO INTEIRO.' },
  motion: [
    { type: 'count', value: 55, dec: 0, unit: '%', caption: 'DA POPULAÇÃO BRASILEIRA É NEGRA. A LIDERANÇA AINDA NÃO REFLETE ISSO.', hold: 2 },
    { type: 'big', title: 'O MÊS ACABA.', sub: 'A AGENDA NÃO.' },
    { type: 'list', title: 'O QUE FAZ ANDAR', items: ['GRUPO DE AFINIDADE', 'PROGRAMA DE TRAINEE', 'FORMAÇÃO DE LÍDERES', 'PARCERIAS'] },
    { type: 'cta', question: 'O QUE SUA EMPRESA FAZ DEPOIS DE NOVEMBRO?', save: 'RESPONDE AQUI NA CAIXINHA.' } ],
  linkedin: {
    ganchos: ['O Mês da Consciência Negra acaba. A agenda não pode acabar junto.', 'Pessoas negras são 55% da população brasileira. Olha a liderança da sua empresa e me diz se esse número aparece.', 'Diversidade que só aparece em novembro é campanha. A que aparece em março é estratégia.'],
    corpo: `O LinkedIn Notícias reuniu conversas do Mês da Consciência Negra. Uma delas me chamou atenção pela concretude.

Maurício Rodrigues, da Bayer, lembrou que pessoas negras são 55% da população brasileira, e que o mundo corporativo ainda não reflete isso. Depois contou o que a empresa vem fazendo: grupo de afinidade racial há mais de uma década, programas de trainee, desenvolvimento de lideranças negras e parceria com o MOVER. Em cinco anos, segundo ele, o número de pessoas negras no quadro cresceu 40%, e a representatividade negra dobrou na liderança e nas novas contratações.

O que eu tiro disso é simples: nada disso cabe num mês.

Diversidade que só aparece em novembro é campanha. A que muda número é a que está nas decisões de todo dia:

👉 Quem a gente contrata.
👉 Quem a gente promove.
👉 Quem a gente prepara pra sucessão.
👉 Quem a gente escuta quando algo não vai bem.

É trabalho de formiguinha, com meta, orçamento e alguém cobrando o resultado.

O mês acaba agora. O que a sua empresa vai fazer em dezembro, em março, em julho?

#ConsciênciaNegra #DiversidadeEInclusão #LiderançaNegra` },
  caption: `O Mês da Consciência Negra acaba. A agenda não.

No LinkedIn Notícias, Maurício Rodrigues, da Bayer, lembrou que pessoas negras são 55% da população e contou o que a empresa fez: grupo de afinidade, trainee, formação de lideranças negras e parceria com o MOVER. Em 5 anos, relatou +40% de pessoas negras no quadro e representatividade dobrada na liderança e nas contratações.

Pra praticar esta semana: escolha uma decisão de pessoas da semana e olhe quem ficou de fora.

O que a sua empresa faz depois de novembro?

#consciencianegra #diversidadeeinclusao #liderancanegra

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics` },

/* ───────── 8 · COP31 SEM ACORDO ───────── */
{ id: 8, slug: 'cop31-clima-e-carreira', nome: 'Clima também é pauta de carreira', pilar: 'Carreira e ESG', di: false,
  alerta: 'LinkedIn Notícias · 23/11', fonte: 'LinkedIn Notícias · 23/11/2026',
  link: 'https://www.linkedin.com/news/story/o-que-impediu-um-acordo-na-cop31-9750610/',
  fato: 'A COP31 terminou no domingo (22) em Antália, na Turquia, sem consenso. União Europeia e ilhas do Pacífico rejeitaram o rascunho por deixar de fora a menção explícita a combustíveis fósseis e o mapa do caminho proposto pelo Brasil na COP30. Também houve impasse sobre o financiamento climático, diante do risco de o aquecimento ultrapassar 1,5°C.',
  carousel: [
    { type: 'cover', img: 'img/t8a.jpg', pos: '62% 35%', label: 'CLIMA E TRABALHO', title: 'A COP31 TERMINOU SEM ACORDO. E A SUA CARREIRA COM ISSO?', sub: 'POR QUE O RH PRECISA ACOMPANHAR ESSA PAUTA' },
    { type: 'text', label: 'A NOTÍCIA', title: 'COP31 TERMINA SEM CONSENSO NA TURQUIA',
      body: 'IMPASSE SOBRE COMBUSTÍVEIS FÓSSEIS, O MAPA DO CAMINHO PROPOSTO PELO BRASIL E O FINANCIAMENTO CLIMÁTICO.', source: 'FONTE: LINKEDIN NOTÍCIAS · 23/11/2026' },
    { type: 'flow', label: 'O EFEITO EM CADEIA', title: 'COMO O CLIMA CHEGA NO TRABALHO',
      items: [['NEGÓCIO', 'SETORES MUDAM DE MODELO'], ['FUNÇÕES', 'CARGOS SE TRANSFORMAM'], ['HABILIDADES', 'TODO MUNDO APRENDE ALGO NOVO']] },
    { type: 'pairs', label: 'TRANSIÇÃO JUSTA', title: 'O PAPEL DO RH',
      items: [['MAPEAR', 'QUAIS FUNÇÕES MUDAM COM A TRANSIÇÃO'], ['REQUALIFICAR', 'PREPARAR QUEM JÁ ESTÁ NA CASA'], ['CUIDAR', 'MUDAR SEM DEIXAR NINGUÉM PRA TRÁS']] },
    { type: 'photo', img: 'img/t8b.jpg', pos: '60% 40%', title: 'TRANSIÇÃO ENERGÉTICA TAMBÉM É PAUTA DE PESSOAS.' },
    { type: 'close', practice: 'PESQUISE COMO A TRANSIÇÃO ENERGÉTICA PODE AFETAR A SUA ÁREA E ANOTE UMA HABILIDADE QUE VALE APRENDER.', question: 'SUA EMPRESA JÁ FALA DE CLIMA COM O TIME?' } ],
  info: { label: 'CLIMA E TRABALHO', title: 'TRANSIÇÃO JUSTA: O QUE O RH PODE FAZER',
    items: [['MAPEAR', 'FUNÇÕES QUE MUDAM COM A TRANSIÇÃO.'], ['REQUALIFICAR', 'TRILHAS PRA QUEM JÁ ESTÁ NA CASA.'], ['RECRUTAR', 'HABILIDADES VERDES NAS NOVAS VAGAS.'], ['COMUNICAR', 'EXPLICAR AO TIME O QUE MUDA E POR QUÊ.']],
    tip: 'TRANSIÇÃO JUSTA: MUDAR O NEGÓCIO SEM DEIXAR PESSOAS PRA TRÁS.' },
  motion: [
    { type: 'big', title: 'COP31: SEM ACORDO.', sub: 'IMPASSE SOBRE COMBUSTÍVEIS FÓSSEIS E FINANCIAMENTO.' },
    { type: 'big', title: 'E O QUE ISSO TEM A VER COM CARREIRA?', sub: '' },
    { type: 'list', title: 'O CLIMA CHEGA NO TRABALHO', items: ['SETORES MUDAM DE MODELO', 'CARGOS SE TRANSFORMAM', 'NOVAS HABILIDADES'] },
    { type: 'cta', question: 'SUA EMPRESA JÁ FALA DE CLIMA COM O TIME?', save: 'RESPONDE AQUI NA CAIXINHA.' } ],
  linkedin: {
    ganchos: ['A COP31 terminou sem acordo. E isso tem mais a ver com RH do que parece.', 'Transição energética também é pauta de pessoas.', 'Quando o modelo de negócio muda, quem prepara as pessoas pra mudança?'],
    corpo: `A COP31 terminou no domingo, em Antália, na Turquia, sem consenso. Segundo o LinkedIn Notícias, União Europeia e ilhas do Pacífico rejeitaram o rascunho por deixar de fora a menção explícita a combustíveis fósseis e o mapa do caminho proposto pelo Brasil na COP30. O financiamento climático também travou.

Pode parecer pauta distante do RH. Eu acho que não é.

Quando um setor muda de modelo, as funções mudam junto. Cargo some, cargo nasce, e todo mundo precisa aprender alguma coisa nova. Com ou sem acordo global, essa conversa vai chegar nas empresas. A pergunta é se o RH vai estar preparado.

Eu enxergo três papéis pra gente:

🎯 Mapear quais funções mudam com a transição.
🎯 Requalificar quem já está na casa, antes de pensar em substituir.
🎯 Comunicar com transparência o que muda e por quê.

Tem um nome bonito pra isso: transição justa. Na prática, é mudar o negócio sem deixar pessoas pra trás.

Na sua empresa, clima e transição energética já entraram na conversa sobre pessoas? Ou ainda ficam só no relatório de sustentabilidade?

#ESG #RHEstratégico #Carreira` },
  caption: `A COP31 terminou sem acordo em Antália, na Turquia, com impasse sobre combustíveis fósseis, o mapa do caminho proposto pelo Brasil e o financiamento climático.

Parece longe do RH, mas não é. Quando setores mudam de modelo, cargos se transformam e todo mundo precisa aprender algo novo. O papel do RH: mapear funções que mudam, requalificar quem está na casa e cuidar de uma transição justa.

Pra praticar esta semana: pesquise como a transição energética pode afetar a sua área e anote uma habilidade que vale aprender.

Sua empresa já fala de clima com o time?

#esg #carreira #transicaoenergetica

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics` }
];
