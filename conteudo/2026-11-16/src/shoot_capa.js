// Gera a capa de Reels (1080×1920) de cada tema: out/<n>-<slug>/capa-reels.png
// Uso: node shoot_capa.js [1,2,3]
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
(async () => {
  global.window = {}; require('./content.js');
  const ids = process.argv[2] ? process.argv[2].split(',').map(Number) : window.THEMES.map(t => t.id);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  for (const id of ids) {
    const t = window.THEMES.find(x => x.id === id);
    const dir = path.resolve(__dirname, '..', 'out', `${id}-${t.slug}`); fs.mkdirSync(dir, { recursive: true });
    await p.goto('file://' + path.join(__dirname, 'capa.html') + '?t=' + id);
    await p.waitForFunction(() => window.__ready === true);
    if (!(await p.evaluate(() => window.__ok))) console.log('AVISO: texto passou da área segura no tema', id);
    await p.screenshot({ path: path.join(dir, 'capa-reels.png') });
    console.log('ok', id);
  }
  await b.close();
})();
