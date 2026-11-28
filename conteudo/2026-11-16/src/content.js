// 16/11/2026 · Motion com personagens · Liderança inclusiva (ilustração conceitual, personagens fictícios)
window.CAST = {
  rafa:  { x: 150, nome: 'RAFA', skin: '#F1C27D', hair: 'short', hairC: '#5A3B22', top: '#A9A6B5' },
  ana:   { x: 345, nome: 'ANA',  skin: '#C68642', hair: 'hijab', hairC: '#7D70B0', top: '#F9F8FB' },
  lider: { x: 540, nome: 'CAROL · LÍDER', skin: '#6B4423', hair: 'afro', hairC: '#1A1410', top: '#F2A13A', lead: true },
  jo:    { x: 735, nome: 'JÔ',   skin: '#E0AC69', hair: 'gray', hairC: '#C4C0CE', top: '#7D70B0', glasses: true },
  bia:   { x: 930, nome: 'BIA',  skin: '#8D5524', hair: 'curly', hairC: '#2B1B10', top: '#9C90D4', wheel: true }
};
window.THEMES = [{
  id: 1, slug: 'lideranca-inclusiva-personagens', nome: 'Quem fala na sua reunião?', alerta: 'Liderança inclusiva',
  capa: { img: 'img/capa-bg.png', pos: '50% 50%', dy: -360, label: 'LIDERANÇA INCLUSIVA', title: 'QUEM FALA NA SUA REUNIÃO?' },
  motion: [
    { type: 'story', label: 'LIDERANÇA INCLUSIVA', caption: 'TODO MUNDO ESTÁ NA REUNIÃO. MAS QUEM FALA?', len: 5.2,
      beats: [ { t: 1.6, who: 'all', act: 'wave' } ] },
    { type: 'story', label: 'CENA 1 · SEM INCLUSÃO', caption: 'A MESMA VOZ DOMINA A CONVERSA.', len: 8.6,
      beats: [
        { t: 0.6, who: 'rafa', say: 'EU ACHO QUE O CERTO É...', dur: 1.9 },
        { t: 2.7, who: 'bia', act: 'hand', dur: 2.6 },
        { t: 3.4, who: 'bia', say: 'MAS E SE...', dur: 0.9, cut: true },
        { t: 4.1, who: 'rafa', say: 'COMO EU DIZIA...', dur: 2.0 },
        { t: 4.4, who: 'bia', act: 'dim' } ] },
    { type: 'story', label: 'CENA 2 · A VIRADA', caption: 'A LÍDER DISTRIBUI A FALA.', len: 7.4,
      beats: [
        { t: 0.6, who: 'lider', say: 'PERAÍ, RAFA. BIA, VOCÊ IA FALAR.', dur: 2.8 },
        { t: 1.6, who: 'bia', act: 'spot' },
        { t: 1.6, who: 'bia', act: 'undim' },
        { t: 3.8, who: 'bia', say: 'E SE A GENTE TESTAR COM O CLIENTE ANTES?', dur: 2.9 } ] },
    { type: 'story', label: 'CENA 3 · O RESULTADO', caption: 'E DÁ O CRÉDITO A QUEM PENSOU.', len: 7.0,
      beats: [
        { t: 0.6, who: 'lider', say: 'BOA, BIA! A IDEIA É SUA.', dur: 2.4 },
        { t: 3.0, who: 'all', act: 'cheer', dur: 2.2 },
        { t: 3.2, who: 'jo', say: 'FAZ TODO SENTIDO.', dur: 1.8 } ] },
    { type: 'list', title: 'LÍDER INCLUSIVO', items: ['DISTRIBUI A FALA', 'CORRIGE INTERRUPÇÃO NA HORA', 'DÁ CRÉDITO A QUEM PENSOU', 'AJUSTA O AMBIENTE PRA TODOS'] },
    { type: 'cta', question: 'QUEM NÃO ESTÁ SENDO OUVIDO NO SEU TIME?' }
  ]
}];
