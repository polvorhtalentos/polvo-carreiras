const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const OUT = path.resolve(__dirname, '..', 'out');
(async () => {
  const only = process.argv[2] ? process.argv[2].split(',').map(Number) : [1,2,3,4,5,6,7];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  const slug = { 1:'remuneracao-total',2:'4-habilidades-2027',3:'provar-skill-curriculo',4:'lideres-premiadas',5:'lideranca-inclusiva',6:'vaga-afirmativa-de-verdade',7:'di-como-estrategia' };
  for (const t of only) {
    const dir = path.join(OUT, `${t}-${slug[t]}`); fs.mkdirSync(dir, { recursive: true });
    const jobs = [1,2,3,4,5,6].map(s => ({ q: `k=c&s=${s}`, f: `carrossel-${String(s).padStart(2,'0')}.png` }));
    jobs.push({ q: 'k=i', f: 'infografico.png' });
    for (const j of jobs) {
      await p.goto('file://' + path.join(__dirname, 'static.html') + `?t=${t}&${j.q}`);
      await p.waitForFunction(() => window.__ready === true);
      await p.waitForTimeout(150);
      const ov = await p.evaluate(() => window.__overflow);
      if (ov.length) console.log('OVERFLOW', t, j.f, ov.join(' | '));
      await p.screenshot({ path: path.join(dir, j.f) });
    }
    console.log('ok', t);
  }
  await b.close();
})();
