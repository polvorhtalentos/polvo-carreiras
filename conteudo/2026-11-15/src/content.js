// Conteúdo dos posts de 15/11/2026 · alertas do Google
// Cada tema: carrossel (6 slides), infográfico e motion.
window.PACTO = true;
window.THEMES = [
/* ───────────── 1 · REMUNERAÇÃO TOTAL ───────────── */
{
  id: 1, slug: 'remuneracao-total', nome: 'Salário é só uma parte', pilar: 'R&S', di: false,
  alerta: 'Rh brasil', fonte: 'Investing.com · 15/11/2026',
  carousel: [
    { type: 'cover', img: 'img/t1a_hd.jpg', pos: '68% 30%', label: 'REMUNERAÇÃO TOTAL',
      title: 'SALÁRIO É SÓ UMA PARTE DA PROPOSTA', sub: 'COMO COMPARAR OFERTAS PELO PACOTE COMPLETO' },
    { type: 'text', label: 'A NOTÍCIA', title: 'DIRETOR DE RH DO EBAY VENDE US$ 3,82 MI EM AÇÕES',
      body: 'EM MUITAS EMPRESAS, AÇÃO FAZ PARTE DO PACOTE. E O PACOTE TEM MAIS COISA DO QUE O SALÁRIO.',
      source: 'FONTE: INVESTING.COM · 15/11/2026' },
    { type: 'stack', label: 'O QUE ENTRA NA CONTA', title: 'AS 5 CAMADAS DA REMUNERAÇÃO',
      items: [
        ['SALÁRIO FIXO', 'O QUE CAI TODO MÊS'],
        ['VARIÁVEL', 'BÔNUS E PLR (PARTICIPAÇÃO NOS LUCROS)'],
        ['BENEFÍCIOS', 'SAÚDE, VR/VA, PREVIDÊNCIA'],
        ['LONGO PRAZO', 'AÇÕES E STOCK OPTIONS'],
        ['INTANGÍVEIS', 'MODELO DE TRABALHO, APRENDIZADO'] ] },
    { type: 'compare', label: 'NA PRÁTICA', title: 'QUAL PROPOSTA VALE MAIS?',
      left: { head: 'PROPOSTA A', items: ['R$ 8.000 POR MÊS', 'SEM PLR', 'PLANO DE SAÚDE BÁSICO', 'PRESENCIAL 5X'] },
      right: { head: 'PROPOSTA B', items: ['R$ 7.200 POR MÊS', 'PLR DE ATÉ 2 SALÁRIOS', 'PLANO COMPLETO', 'HÍBRIDO'] },
      foot: 'NO ANO, A B PODE PAGAR MAIS. COMPARE O ANO, NÃO O MÊS.', note: 'ILUSTRAÇÃO CONCEITUAL.' },
    { type: 'photo', img: 'img/t1b_hd.jpg', pos: '62% 40%',
      title: 'ANTES DE ACEITAR, PERGUNTE PELO PACOTE COMPLETO.' },
    { type: 'close', practice: 'SOME TUDO O QUE VOCÊ RECEBE NO ANO: SALÁRIO, 13º, FÉRIAS, VARIÁVEL E BENEFÍCIOS. ESSE É O NÚMERO PRA COMPARAR.',
      question: 'VOCÊ JÁ RECUSOU UMA PROPOSTA SÓ OLHANDO O SALÁRIO?' }
  ],
  info: {
    label: 'GUIA RÁPIDO', title: 'REMUNERAÇÃO TOTAL EM 5 CAMADAS',
    items: [
      ['SALÁRIO FIXO', 'CONTE O 13º E 1/3 DE FÉRIAS.'],
      ['VARIÁVEL E PLR', 'QUANTO FOI PAGO NOS ÚLTIMOS ANOS?'],
      ['BENEFÍCIOS', 'QUANTO SAI DO SEU BOLSO?'],
      ['AÇÕES E LONGO PRAZO', 'EM QUANTO TEMPO VOCÊ RECEBE?'],
      ['INTANGÍVEIS', 'MODELO DE TRABALHO E DESLOCAMENTO.'] ],
    tip: 'REGRA DE OURO: COMPARE O VALOR DO ANO, NÃO O DO MÊS.'
  },
  motion: [
    { type: 'count', pre: 'US$ ', value: 3.82, dec: 2, suf: ' MI', caption: 'EM AÇÕES VENDIDAS POR UM DIRETOR DE RH', hold: 3 },
    { type: 'big', title: 'AÇÃO TAMBÉM É SALÁRIO.', sub: 'E O SEU PACOTE PODE TER MAIS DO QUE VOCÊ CONTA.' },
    { type: 'list', title: 'REMUNERAÇÃO TOTAL', items: ['SALÁRIO FIXO', 'VARIÁVEL E PLR', 'BENEFÍCIOS', 'AÇÕES E LONGO PRAZO', 'INTANGÍVEIS'] },
    { type: 'compare', title: 'QUAL VALE MAIS?', left: ['A', 'R$ 8.000', 'SEM PLR'], right: ['B', 'R$ 7.200', 'PLR ATÉ 2 SALÁRIOS'], verdict: 'NO ANO, A B PODE GANHAR.' },
    { type: 'big', title: 'COMPARE O ANO, NÃO O MÊS.', sub: '' },
    { type: 'cta', question: 'VOCÊ JÁ RECUSOU UMA PROPOSTA SÓ PELO SALÁRIO?' }
  ],
  caption: `Um diretor de RH do eBay vendeu US$ 3,82 milhões em ações da empresa. A notícia é sobre mercado financeiro, mas o recado serve pra quem está avaliando uma proposta.

Em muitas empresas, ação faz parte da remuneração. E mesmo onde não tem ação, o pacote tem mais camadas do que o salário: variável, PLR (participação nos lucros), benefícios e até o modelo de trabalho.

Eu oriento sempre o mesmo: compare o valor do ano, não o do mês. Uma proposta com salário menor pode pagar mais no fim do ano.

Pra praticar esta semana: some tudo o que você recebe em 12 meses. Esse é o número que você leva pra negociação.

Você já recusou uma proposta só olhando o salário?

#remuneração #carreira #recrutamento

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics`
},

/* ───────────── 2 · 4 HABILIDADES PRA 2027 ───────────── */
{
  id: 2, slug: '4-habilidades-2027', nome: '4 habilidades pra 2027', pilar: 'DHO', di: false,
  alerta: 'Skill carreira', fonte: 'Fast Company Brasil · 15/11/2026',
  carousel: [
    { type: 'cover', img: 'img/t2a_hd.jpg', pos: '45% 30%', label: 'CARREIRA 2027',
      title: '4 HABILIDADES QUE VÃO PESAR EM 2027', sub: 'O QUE EU VEJO DO LADO DE DENTRO DAS ENTREVISTAS' },
    { type: 'text', label: 'A PAUTA', title: 'O MERCADO MUDOU A PERGUNTA',
      body: 'ANTES: O QUE VOCÊ SABE FAZER? AGORA: COMO VOCÊ APRENDE O QUE AINDA NÃO SABE?',
      source: 'INSPIRADO EM FAST COMPANY BRASIL · 15/11/2026' },
    { type: 'grid', label: 'AS 4 HABILIDADES', title: 'O QUE O RH ESTÁ OLHANDO',
      items: [
        ['ADAPTAR', 'APRENDER RÁPIDO E MUDAR DE ROTA'],
        ['USAR IA', 'USAR, CHECAR E ASSUMIR O RESULTADO'],
        ['COMUNICAR', 'EXPLICAR SEU TRABALHO EM 1 MINUTO'],
        ['DECIDIR', 'TRAZER NÚMERO, NÃO ACHISMO'] ] },
    { type: 'pairs', label: 'NA ENTREVISTA', title: 'COMO CADA UMA É TESTADA',
      items: [
        ['ADAPTAR', 'CONTE QUANDO VOCÊ APRENDEU ALGO DO ZERO.'],
        ['USAR IA', 'COMO VOCÊ CHECA O QUE A FERRAMENTA ENTREGOU?'],
        ['COMUNICAR', 'EXPLIQUE SEU TRABALHO PRA OUTRA ÁREA.'],
        ['DECIDIR', 'QUE NÚMERO MOSTRA QUE DEU CERTO?'] ] },
    { type: 'photo', img: 'img/t2b_hd.jpg', pos: '45% 40%',
      title: 'NÃO PRECISA DAS 4 AMANHÃ. ESCOLHA UMA E TREINE ESTE MÊS.' },
    { type: 'close', practice: 'ESCOLHA UMA DAS 4 HABILIDADES E ESCREVA UM EXEMPLO REAL SEU EM 3 LINHAS.',
      question: 'QUAL DELAS É SEU PONTO FORTE HOJE?' }
  ],
  info: {
    label: 'CARREIRA 2027', title: '4 HABILIDADES E COMO O RH TESTA',
    items: [
      ['ADAPTAR', 'CONTE QUANDO VOCÊ APRENDEU ALGO DO ZERO.'],
      ['USAR IA COM CRITÉRIO', 'COMO VOCÊ CHECA O QUE A IA ENTREGOU?'],
      ['COMUNICAR CLARO', 'EXPLIQUE SEU TRABALHO PRA OUTRA ÁREA.'],
      ['DECIDIR COM DADOS', 'QUE NÚMERO MOSTRA QUE DEU CERTO?'] ],
    tip: 'TENHA UM CASO REAL PRONTO PRA CADA UMA.'
  },
  motion: [
    { type: 'count', pre: '', value: 4, dec: 0, suf: '', caption: 'HABILIDADES QUE VÃO PESAR NA SUA CARREIRA EM 2027', hold: 2.5 },
    { type: 'big', title: 'A PERGUNTA MUDOU.', sub: 'NÃO É SÓ O QUE VOCÊ SABE. É COMO VOCÊ APRENDE.' },
    { type: 'list', title: 'AS 4', items: ['ADAPTAR', 'USAR IA COM CRITÉRIO', 'COMUNICAR CLARO', 'DECIDIR COM DADOS'] },
    { type: 'big', title: 'E O RH VAI TESTAR.', sub: 'TENHA UM CASO REAL PRA CADA UMA.' },
    { type: 'big', title: 'ESCOLHA UMA. TREINE ESTE MÊS.', sub: '' },
    { type: 'cta', question: 'QUAL DELAS É SEU PONTO FORTE HOJE?' }
  ],
  caption: `A Fast Company Brasil trouxe hoje as habilidades que podem fazer diferença na carreira em 2027. Eu aproveitei a pauta pra contar as 4 que eu mais vejo pesar do lado de dentro das entrevistas.

Adaptar, usar IA com critério, comunicar claro e decidir com dados. Nenhuma delas aparece só porque está escrita no currículo. O RH testa com perguntas de situação real.

Pra praticar esta semana: escolha uma das 4 e escreva um exemplo seu em 3 linhas. Na próxima entrevista, ele já está pronto.

Qual delas é seu ponto forte hoje?

#carreira #habilidades #entrevistadeemprego

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics`
},

/* ───────────── 3 · PROVAR SKILL NO CURRÍCULO ───────────── */
{
  id: 3, slug: 'provar-skill-curriculo', nome: 'Skill se prova com fato', pilar: 'R&S', di: false,
  alerta: 'Skill carreira', fonte: 'Fast Company Brasil · 15/11/2026',
  carousel: [
    { type: 'cover', img: 'img/t3a_hd.jpg', pos: '53% 25%', label: 'CURRÍCULO',
      title: 'HABILIDADE NÃO SE DECLARA. SE PROVA.', sub: 'COMO MOSTRAR NO CURRÍCULO E NA ENTREVISTA' },
    { type: 'text', label: 'O PROBLEMA', title: 'QUEM LÊ CURRÍCULO JÁ VIU PROATIVO MIL VEZES',
      body: 'ADJETIVO NÃO DIFERENCIA NINGUÉM. FATO COM NÚMERO DIFERENCIA.',
      source: 'EU LEIO CENTENAS DE CURRÍCULOS POR MÊS. É SEMPRE ASSIM.' },
    { type: 'compare', label: 'ANTES E DEPOIS', title: 'TROQUE O ADJETIVO PELO FATO',
      left: { head: 'ANTES', items: ['PERFIL ANALÍTICO', 'DOMÍNIO DE IA'] },
      right: { head: 'DEPOIS', items: ['CRIEI UM RELATÓRIO QUE CORTOU 2 REUNIÕES POR SEMANA', 'USEI IA PRA REVISAR 300 CONTRATOS EM 4 DIAS, NÃO 10'] },
      foot: 'A HABILIDADE APARECE SOZINHA.', note: 'ILUSTRAÇÃO CONCEITUAL.' },
    { type: 'steps', label: 'A FÓRMULA', title: 'UMA LINHA QUE PROVA',
      items: ['COMECE COM UM VERBO DE AÇÃO', 'DIGA O QUE VOCÊ FEZ', 'MOSTRE O NÚMERO OU O RESULTADO', 'DEIXE A HABILIDADE APARECER SOZINHA'] },
    { type: 'photo', img: 'img/t3b_hd.jpg', pos: '35% 30%',
      title: 'NA ENTREVISTA, TROQUE "EU SOU" POR "UMA VEZ EU..."' },
    { type: 'close', practice: 'PEGUE 3 ADJETIVOS DO SEU CURRÍCULO E TROQUE CADA UM POR UM FATO COM NÚMERO.',
      question: 'QUAL ADJETIVO VOCÊ VAI TIRAR PRIMEIRO?' }
  ],
  info: {
    label: 'CURRÍCULO', title: 'COMO PROVAR UMA HABILIDADE',
    items: [
      ['VERBO DE AÇÃO', 'CRIEI, REDUZI, LIDEREI, AUTOMATIZEI.'],
      ['O QUE VOCÊ FEZ', 'A TAREFA, EM POUCAS PALAVRAS.'],
      ['NÚMERO OU RESULTADO', 'TEMPO, DINHEIRO, VOLUME, QUALIDADE.'],
      ['NA ENTREVISTA', 'SITUAÇÃO, O QUE VOCÊ FEZ E O RESULTADO.'] ],
    tip: 'ANTES: "PERFIL ANALÍTICO". DEPOIS: "CRIEI UM RELATÓRIO QUE CORTOU 2 REUNIÕES POR SEMANA".'
  },
  motion: [
    { type: 'big', title: 'PROATIVO. ANALÍTICO. COMUNICATIVO.', sub: 'O RH JÁ LEU ISSO MIL VEZES HOJE.' },
    { type: 'big', title: 'HABILIDADE NÃO SE DECLARA.', sub: 'SE PROVA.' },
    { type: 'compare', title: 'ANTES E DEPOIS', left: ['ANTES', 'PERFIL ANALÍTICO', ''], right: ['DEPOIS', 'CRIEI UM RELATÓRIO', 'QUE CORTOU 2 REUNIÕES'], verdict: 'O FATO MOSTRA A HABILIDADE.' },
    { type: 'list', title: 'A FÓRMULA', items: ['VERBO DE AÇÃO', 'O QUE VOCÊ FEZ', 'NÚMERO OU RESULTADO'] },
    { type: 'big', title: 'TROQUE "EU SOU" POR "UMA VEZ EU..."', sub: 'NO CURRÍCULO E NA ENTREVISTA.' },
    { type: 'cta', question: 'QUAL ADJETIVO VOCÊ VAI TIRAR PRIMEIRO?' }
  ],
  caption: `Proativo, analítico, comunicativo. Quem lê currículo vê essas palavras o dia inteiro. E elas não diferenciam ninguém.

Habilidade não se declara, se prova. A fórmula que eu oriento é simples: verbo de ação, o que você fez e um número. "Perfil analítico" vira "Criei um relatório que cortou 2 reuniões por semana". A habilidade aparece sozinha.

Na entrevista vale a mesma regra. Troque "eu sou" por "uma vez eu...".

Pra praticar esta semana: pegue 3 adjetivos do seu currículo e troque cada um por um fato com número.

Qual adjetivo você vai tirar primeiro?

#currículo #recrutamento #carreira

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics`
},

/* ───────────── 4 · O QUE AS PREMIADAS FAZEM ───────────── */
{
  id: 4, slug: 'lideres-premiadas', nome: 'Líder não nasce pronto', pilar: 'DHO', di: false,
  alerta: 'Desenvolvimento de líderes empresas', fonte: 'Top Society · 15/11/2026',
  carousel: [
    { type: 'cover', img: 'img/t4a_hd.jpg', pos: '40% 25%', label: 'LIDERANÇA',
      title: 'LÍDER NÃO NASCE PRONTO. É DESENVOLVIDO.', sub: 'O QUE AS EMPRESAS RECONHECIDAS FAZEM DIFERENTE' },
    { type: 'text', label: 'A NOTÍCIA', title: 'EMPRESAS DE SC RECEBEM O PRÊMIO SER HUMANO 2026',
      body: 'ENTRE AS PRÁTICAS DESTACADAS: DESENVOLVIMENTO DE LIDERANÇAS E INCLUSÃO.',
      source: 'FONTE: TOP SOCIETY · 15/11/2026' },
    { type: 'compare', label: 'A DIFERENÇA', title: 'TREINAR É DIFERENTE DE DESENVOLVER',
      left: { head: 'TREINAMENTO PONTUAL', items: ['UMA PALESTRA POR ANO', 'NINGUÉM ACOMPANHA', 'NINGUÉM MEDE'] },
      right: { head: 'DESENVOLVIMENTO', items: ['TRILHA COM PRÁTICA', 'FEEDBACK E MENTORIA', 'INDICADOR DO TIME'] },
      foot: 'PRÊMIO VEM DO SEGUNDO JEITO.', note: '' },
    { type: 'steps', label: 'O PROGRAMA', title: '4 PEÇAS QUE NÃO PODEM FALTAR',
      items: ['DIAGNÓSTICO: O QUE FALTA NO TIME', 'TRILHA COM PRÁTICA NO DIA A DIA', 'ACOMPANHAMENTO COM FEEDBACK', 'MEDIÇÃO: CLIMA, SAÍDAS E PROMOÇÕES'] },
    { type: 'photo', img: 'img/t4b_hd.jpg', pos: '50% 30%',
      title: 'PRÊMIO É CONSEQUÊNCIA. O QUE CONTA É O LÍDER NA SEGUNDA-FEIRA.' },
    { type: 'close', practice: 'ESCOLHA UM COMPORTAMENTO DE LIDERANÇA E PEÇA FEEDBACK SOBRE ELE PRA 2 PESSOAS DO TIME.',
      question: 'SUA EMPRESA TREINA OU DESENVOLVE LÍDERES?' }
  ],
  info: {
    label: 'DESENVOLVIMENTO DE LÍDERES', title: 'O CICLO QUE FORMA LÍDERES',
    items: [
      ['DIAGNÓSTICO', 'O QUE O TIME PRECISA DA LIDERANÇA.'],
      ['TRILHA', 'CONTEÚDO CURTO E PRÁTICA NA SEMANA.'],
      ['ACOMPANHAMENTO', 'MENTORIA E FEEDBACK.'],
      ['MEDIÇÃO', 'CLIMA, SAÍDAS E PROMOÇÕES.'] ],
    tip: 'TREINAR É EVENTO. DESENVOLVER É CICLO.'
  },
  motion: [
    { type: 'big', title: 'LÍDER NÃO NASCE PRONTO.', sub: 'É DESENVOLVIDO.' },
    { type: 'big', title: 'PRÊMIO SER HUMANO 2026', sub: 'EMPRESAS DE SC RECONHECIDAS POR DESENVOLVER LÍDERES E INCLUIR.' },
    { type: 'compare', title: 'TREINAR x DESENVOLVER', left: ['TREINAR', 'UMA PALESTRA', 'POR ANO'], right: ['DESENVOLVER', 'PRÁTICA, FEEDBACK', 'E MEDIÇÃO'], verdict: 'O SEGUNDO É QUE MUDA O TIME.' },
    { type: 'list', title: 'O CICLO', items: ['DIAGNÓSTICO', 'TRILHA COM PRÁTICA', 'ACOMPANHAMENTO', 'MEDIÇÃO'] },
    { type: 'big', title: 'O QUE CONTA É O LÍDER NA SEGUNDA-FEIRA.', sub: '' },
    { type: 'cta', question: 'SUA EMPRESA TREINA OU DESENVOLVE LÍDERES?' }
  ],
  caption: `Empresas de Santa Catarina receberam o Prêmio Ser Humano 2026. Entre as práticas destacadas estão o desenvolvimento de lideranças e a inclusão.

Eu acredito que treinar líder é diferente de desenvolver líder. Uma palestra por ano é evento. Desenvolvimento é ciclo: diagnóstico, prática no dia a dia, acompanhamento com feedback e medição do que mudou no time.

Prêmio é consequência. O que conta é como essa liderança age na segunda-feira.

Pra praticar esta semana: escolha um comportamento de liderança e peça feedback sobre ele pra 2 pessoas do time.

Sua empresa treina ou desenvolve líderes?

#liderança #desenvolvimentohumano #gestãodepessoas

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics`
},

/* ───────────── 5 · LIDERANÇA INCLUSIVA ───────────── */
{
  id: 5, slug: 'lideranca-inclusiva', nome: 'Liderança inclusiva é rotina', pilar: 'D&I', di: true,
  alerta: 'Desenvolvimento de líderes empresas', fonte: 'Top Society · 15/11/2026',
  carousel: [
    { type: 'cover', img: 'img/t5a_hd.jpg', pos: '50% 20%', label: 'LIDERANÇA INCLUSIVA',
      title: 'INCLUSÃO NÃO É DISCURSO. É ROTINA.', sub: '5 ATITUDES DE QUEM LIDERA PRA TODO MUNDO' },
    { type: 'text', label: 'O PONTO', title: 'INCLUSÃO ACONTECE NA REUNIÃO DE TERÇA',
      body: 'NÃO NO EVENTO DO MÊS. QUEM DEFINE O DIA A DIA DO TIME É A LIDERANÇA DIRETA.',
      source: 'PAUTA: PRÊMIO SER HUMANO 2026 · TOP SOCIETY' },
    { type: 'steps', label: 'NA PRÁTICA', title: '5 ATITUDES DE LÍDER INCLUSIVO',
      items: ['DISTRIBUI A FALA NA REUNIÃO', 'DÁ FEEDBACK COM CRITÉRIO CLARO', 'DIVIDE PROJETO VISÍVEL COM JUSTIÇA', 'AJUSTA O AMBIENTE E OS HORÁRIOS', 'CORRIGE PIADA E INTERRUPÇÃO NA HORA'] },
    { type: 'compare', label: 'NA REUNIÃO', title: 'O MESMO TIME, DOIS JEITOS',
      left: { head: 'EXCLUI', items: ['QUEM FALA MAIS ALTO DECIDE', 'IDEIA SEM DONO', 'PAUTA NA HORA'] },
      right: { head: 'INCLUI', items: ['TODO MUNDO OPINA ANTES', 'CRÉDITO PRA QUEM PENSOU', 'PAUTA ENVIADA ANTES'] },
      foot: 'PEQUENO AJUSTE, GRANDE DIFERENÇA.', note: '' },
    { type: 'photo', img: 'img/t5b_hd.jpg', pos: '50% 25%',
      title: 'TIME QUE SE SENTE INCLUÍDO FALA DO PROBLEMA MAIS CEDO.' },
    { type: 'close', practice: 'NA PRÓXIMA REUNIÃO, OUÇA TODO MUNDO ANTES DE DAR A SUA OPINIÃO.',
      question: 'QUAL DESSAS ATITUDES FALTA NO SEU TIME?' }
  ],
  info: {
    label: 'LIDERANÇA INCLUSIVA', title: '5 ATITUDES PRA PRATICAR NA SEMANA',
    items: [
      ['DISTRIBUA A FALA', 'TODO MUNDO OPINA ANTES.'],
      ['CRITÉRIO CLARO', 'FEEDBACK COM O MESMO PADRÃO.'],
      ['PROJETO VISÍVEL', 'REVEZE QUEM APARECE.'],
      ['AMBIENTE', 'ACESSIBILIDADE, HORÁRIO E PAUTA.'],
      ['NA HORA', 'CORRIJA PIADA E INTERRUPÇÃO.'] ],
    tip: 'INCLUSÃO SE MEDE NO DIA A DIA DO TIME, NÃO NO EVENTO DO MÊS.'
  },
  motion: [
    { type: 'big', title: 'INCLUSÃO ACONTECE NA REUNIÃO DE TERÇA.', sub: 'NÃO NO EVENTO DO MÊS.' },
    { type: 'list', title: 'LÍDER INCLUSIVO', items: ['DISTRIBUI A FALA', 'DÁ FEEDBACK COM CRITÉRIO', 'DIVIDE PROJETO VISÍVEL', 'AJUSTA O AMBIENTE', 'CORRIGE NA HORA'] },
    { type: 'compare', title: 'NA REUNIÃO', left: ['EXCLUI', 'QUEM GRITA', 'DECIDE'], right: ['INCLUI', 'TODO MUNDO', 'OPINA ANTES'], verdict: 'PEQUENO AJUSTE. GRANDE DIFERENÇA.' },
    { type: 'big', title: 'TIME INCLUÍDO FALA DO PROBLEMA MAIS CEDO.', sub: '' },
    { type: 'cta', question: 'QUAL DESSAS ATITUDES FALTA NO SEU TIME?' }
  ],
  caption: `Inclusão acontece na reunião de terça, não no evento do mês. Quem define a experiência do time no dia a dia é a liderança direta.

As empresas reconhecidas no Prêmio Ser Humano 2026 juntaram desenvolvimento de líderes e inclusão. Faz sentido. Na prática, eu vejo 5 atitudes fazendo diferença: distribuir a fala, dar feedback com critério claro, dividir projeto visível com justiça, ajustar o ambiente e corrigir piada ou interrupção na hora.

Pra praticar esta semana: na próxima reunião, ouça todo mundo antes de dar a sua opinião.

Qual dessas atitudes falta no seu time?

#liderançainclusiva #diversidadeeinclusão #gestãodepessoas

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics`
},

/* ───────────── 6 · VAGA AFIRMATIVA DE VERDADE ───────────── */
{
  id: 6, slug: 'vaga-afirmativa-de-verdade', nome: 'Vaga afirmativa de verdade', pilar: 'D&I', di: true,
  alerta: 'Inclusão e diversidade Brasil empresas', fonte: 'Agência Brasil · 15/11/2026',
  carousel: [
    { type: 'cover', img: 'img/t6a_hd.jpg', pos: '40% 25%', label: 'VAGA AFIRMATIVA',
      title: 'VAGA AFIRMATIVA DE VERDADE VEM COM ESTRUTURA', sub: 'COMO SABER SE A EMPRESA ESTÁ PRONTA' },
    { type: 'text', label: 'A NOTÍCIA', title: 'CURSO PREPARA SERVIDORES PRA INCLUIR PESSOAS COM DEFICIÊNCIA',
      body: 'BANCO DO BRASIL, TESOURO NACIONAL E INCLUSI LANÇARAM. O FOCO É PREPARAR QUEM RECEBE.',
      source: 'FONTE: AGÊNCIA BRASIL · LANÇADO EM 13/11' },
    { type: 'compare', label: 'A DIFERENÇA', title: 'SÓ ANÚNCIO x INCLUSÃO REAL',
      left: { head: 'SÓ ANÚNCIO', items: ['VAGA PRA BATER NÚMERO', 'TIME NÃO FOI PREPARADO', 'ACESSIBILIDADE IMPROVISADA', 'SOME DEPOIS DE CONTRATAR'] },
      right: { head: 'INCLUSÃO REAL', items: ['VAGA COM PLANO DE CARREIRA', 'GESTOR E TIME PREPARADOS', 'AJUSTES ANTES DO 1º DIA', 'ACOMPANHA OS PRIMEIROS MESES'] },
      foot: '', note: '' },
    { type: 'steps', label: 'NA ENTREVISTA', title: '5 PERGUNTAS PRA VOCÊ FAZER',
      items: ['QUANTAS PESSOAS DO GRUPO JÁ ESTÃO AQUI? EM QUE CARGOS?', 'COMO O TIME FOI PREPARADO?', 'QUE AJUSTES VOCÊS FAZEM NO DIA A DIA?', 'EXISTE GRUPO DE AFINIDADE?', 'COMO É O ACOMPANHAMENTO DEPOIS?'] },
    { type: 'photo', img: 'img/t6b_hd.jpg', pos: '30% 30%',
      title: 'PERGUNTAR SOBRE INCLUSÃO NÃO TE ELIMINA. TE INFORMA.' },
    { type: 'close', practice: 'ESCOLHA 2 DAS 5 PERGUNTAS E LEVE ANOTADAS PRA SUA PRÓXIMA ENTREVISTA.',
      question: 'QUE RESPOSTA SOBRE INCLUSÃO JÁ TE SURPREENDEU?' }
  ],
  info: {
    label: 'VAGA AFIRMATIVA', title: '5 SINAIS DE INCLUSÃO DE VERDADE',
    items: [
      ['REPRESENTATIVIDADE', 'O GRUPO JÁ ESTÁ NA LIDERANÇA.'],
      ['TIME PREPARADO', 'GESTOR E COLEGAS CAPACITADOS.'],
      ['AJUSTES', 'ACESSIBILIDADE ANTES DO 1º DIA.'],
      ['REDE DE APOIO', 'GRUPO DE AFINIDADE ATIVO.'],
      ['ACOMPANHAMENTO', 'CONVERSAS E PLANO DE CARREIRA.'] ],
    tip: 'INCLUIR É PREPARAR QUEM RECEBE, NÃO SÓ ABRIR A VAGA.'
  },
  motion: [
    { type: 'big', title: 'VAGA AFIRMATIVA É SÓ O COMEÇO.', sub: 'O QUE IMPORTA É O QUE VEM DEPOIS.' },
    { type: 'big', title: 'INCLUIR É PREPARAR QUEM RECEBE.', sub: 'BB, TESOURO E INCLUSI LANÇARAM CURSO PRA ISSO.' },
    { type: 'compare', title: 'A DIFERENÇA', left: ['SÓ ANÚNCIO', 'BATE NÚMERO', 'E SOME'], right: ['INCLUSÃO REAL', 'TIME PREPARADO', 'E ACOMPANHA'], verdict: 'PERGUNTE ANTES DE ACEITAR.' },
    { type: 'list', title: 'PERGUNTE NA ENTREVISTA', items: ['QUEM DO GRUPO JÁ ESTÁ AQUI?', 'COMO O TIME FOI PREPARADO?', 'QUE AJUSTES VOCÊS FAZEM?', 'COMO É O ACOMPANHAMENTO?'] },
    { type: 'cta', question: 'QUE RESPOSTA SOBRE INCLUSÃO JÁ TE SURPREENDEU?' }
  ],
  caption: `Banco do Brasil, Tesouro Nacional e a empresa Inclusi lançaram um curso pra capacitar servidores na inclusão de pessoas com deficiência. O foco é preparar quem recebe.

É exatamente isso que separa vaga afirmativa de verdade de anúncio. Vaga aberta só pra bater número, com time despreparado e acessibilidade improvisada, não é inclusão.

Eu atuo com vagas afirmativas e oriento: pergunte. Quantas pessoas do grupo já estão na empresa? Como o time foi preparado? Que ajustes vocês fazem? Como é o acompanhamento depois da contratação? Perguntar não te elimina, te informa.

Pra praticar esta semana: escolha 2 dessas perguntas e leve anotadas pra próxima entrevista.

Que resposta sobre inclusão já te surpreendeu?

#vagasafirmativas #pcd #diversidadeeinclusão

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics`
},

/* ───────────── 7 · D&I COMO ESTRATÉGIA ───────────── */
{
  id: 7, slug: 'di-como-estrategia', nome: 'Diversidade não espera permissão', pilar: 'D&I', di: true,
  alerta: 'Inclusão e diversidade Brasil empresas', fonte: 'Você RH · 15/11/2026',
  carousel: [
    { type: 'cover', img: 'img/t7a_hd.jpg', pos: '50% 22%', label: 'D&I · DIVERSIDADE E INCLUSÃO',
      title: 'DIVERSIDADE NÃO DEPENDE DO CLIMA POLÍTICO', sub: 'POR QUE D&I É DECISÃO DE NEGÓCIO' },
    { type: 'text', label: 'A PAUTA', title: 'DIVERSIDADE NÃO PRECISA DE AUTORIZAÇÃO POLÍTICA',
      body: 'A COLUNA DE CAROLINA IGNARRA NA VOCÊ RH DEFENDE: INCLUSÃO É ESCOLHA ESTRATÉGICA DA EMPRESA.',
      source: 'FONTE: VOCÊ RH · 15/11/2026' },
    { type: 'compare', label: 'O TESTE', title: 'CAMPANHA OU ESTRATÉGIA?',
      left: { head: 'CAMPANHA', items: ['APARECE EM DATA COMEMORATIVA', 'SOME QUANDO O VENTO MUDA', 'FICA SÓ COM O RH'] },
      right: { head: 'ESTRATÉGIA', items: ['ESTÁ NO PLANO DO ANO', 'TEM META E ORÇAMENTO', 'É COBRADA DA LIDERANÇA'] },
      foot: '', note: '' },
    { type: 'flow', label: 'PEOPLE ANALYTICS', title: '3 NÚMEROS QUE MOSTRAM SE É REAL',
      items: [['QUEM ENTRA', 'CONTRATAÇÕES POR GRUPO'], ['QUEM CRESCE', 'PROMOÇÕES POR GRUPO'], ['QUEM FICA', 'SAÍDAS POR GRUPO']] },
    { type: 'photo', img: 'img/t7b_hd.jpg', pos: '30% 40%',
      title: 'PROGRAMA QUE MUDA COM O HUMOR DA ÉPOCA NÃO É PROGRAMA. É CAMPANHA.' },
    { type: 'close', practice: 'DESCUBRA QUANTAS PESSOAS DE GRUPOS SUB-REPRESENTADOS FORAM PROMOVIDAS NA SUA EMPRESA ESTE ANO.',
      question: 'NA SUA EMPRESA, D&I É CAMPANHA OU ESTRATÉGIA?' }
  ],
  info: {
    label: 'DIVERSIDADE E INCLUSÃO', title: 'D&I É CAMPANHA OU ESTRATÉGIA?',
    items: [
      ['ESTÁ NO PLANO DO ANO?', 'OU SÓ APARECE EM DATAS COMEMORATIVAS?'],
      ['TEM META E ORÇAMENTO?', 'OU DEPENDE DE BOA VONTADE?'],
      ['A LIDERANÇA RESPONDE?', 'OU FICA TUDO COM O RH?'],
      ['MEDE O QUE IMPORTA?', 'QUEM ENTRA, QUEM CRESCE E QUEM FICA.'] ],
    tip: '4 RESPOSTAS SIM: ESTRATÉGIA. MENOS QUE ISSO: AINDA É CAMPANHA.'
  },
  motion: [
    { type: 'big', title: 'DIVERSIDADE NÃO PRECISA DE AUTORIZAÇÃO.', sub: 'É DECISÃO DE NEGÓCIO.' },
    { type: 'compare', title: 'CAMPANHA x ESTRATÉGIA', left: ['CAMPANHA', 'SOME QUANDO', 'O VENTO MUDA'], right: ['ESTRATÉGIA', 'TEM META', 'E ORÇAMENTO'], verdict: 'SÓ UMA SOBREVIVE À CRISE.' },
    { type: 'list', title: '3 NÚMEROS QUE NÃO MENTEM', items: ['QUEM ENTRA', 'QUEM CRESCE', 'QUEM FICA'] },
    { type: 'big', title: 'SE NÃO MEDE, É CAMPANHA.', sub: '' },
    { type: 'cta', question: 'NA SUA EMPRESA, D&I É CAMPANHA OU ESTRATÉGIA?' }
  ],
  caption: `"A diversidade não precisa de autorização política." É o título da coluna de Carolina Ignarra na Você RH hoje, e eu concordo.

Quando D&I (diversidade e inclusão) depende do clima da época, é campanha. Aparece em data comemorativa e some quando o vento muda. Estratégia está no plano do ano, tem meta, orçamento e é cobrada da liderança.

O teste mais honesto é olhar 3 números: quem entra, quem cresce e quem fica. Por grupo.

Pra praticar esta semana: descubra quantas pessoas de grupos sub-representados foram promovidas na sua empresa este ano.

Na sua empresa, D&I é campanha ou estratégia?

#diversidadeeinclusão #peopleanalytics #rh

Bruno Magalhães | HR Business Partner | R&S, D&I, DHO e People Analytics`
}
];
