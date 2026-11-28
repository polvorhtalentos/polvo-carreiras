// Gera 3 capas de Reels (1080×1920) por tema, diferentes da capa do carrossel:
// out/<n>-<slug>/capa-reels-1.png (tipográfica), -2.png (foto), -3.png (checklist).
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
    const velha = path.join(dir, 'capa-reels.png'); if (fs.existsSync(velha)) fs.unlinkSync(velha);
    for (const v of [1, 2, 3]) {
      await p.goto('file://' + path.join(__dirname, 'capa.html') + `?t=${id}&v=${v}`);
      await p.waitForFunction(() => window.__ready === true);
      if (!(await p.evaluate(() => window.__ok))) console.log(`AVISO: tema ${id}, capa ${v}: texto fora da área segura`);
      await p.screenshot({ path: path.join(dir, `capa-reels-${v}.png`) });
    }
    console.log('ok', id);
  }
  await b.close();
})();
