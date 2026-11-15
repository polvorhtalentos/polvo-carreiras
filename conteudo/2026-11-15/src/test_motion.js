const { chromium } = require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
const t=process.argv[2];await p.goto('file://'+path.join(__dirname,'motion.html')+'?t='+t);await p.waitForFunction(()=>window.__ready);
const m=await p.evaluate(()=>({total:meta.total,starts:meta.events.filter(e=>e.type==='whoosh').map(e=>e.t)}));console.log(JSON.stringify(m));
const times=process.argv.slice(3).map(Number);
for(const x of times){await p.evaluate(x=>render(x),x);await p.screenshot({path:`/tmp/claude-0/-home-user-polvo-carreiras/172f80cd-50c6-558f-a4aa-77ddf6039c6d/scratchpad/m${t}_${x}.png`,scale:'css'});}
await b.close()})();
