const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const b = await chromium.launch();
  for (const a of ['bruno', 'polvo']) for (const [f, h, pre] of [['li', 1350, 'linkedin'], ['st', 1920, 'story']]) {
    const p = await b.newPage({ viewport: { width: 1080, height: h } });
    for (let i = 0; i <= 5; i++) {
      await p.goto('file://' + path.join(__dirname, 'card.html') + `?f=${f}&i=${i}&a=${a}`);
      await p.waitForFunction(() => window.__ready); await p.waitForLoadState('networkidle');
      if (!(await p.evaluate(() => window.__ok))) console.log('OVERFLOW', a, f, i);
      await p.screenshot({ path: path.join(__dirname, 'out', a, `${pre}-${String(i + 1).padStart(2, '0')}.png`) });
    }
  }
  await b.close();
})();
