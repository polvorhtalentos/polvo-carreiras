const { chromium } = require('playwright');const path=require('path'),fs=require('fs');
(async()=>{const t=process.argv[2];const FR=path.join(process.env.SCRATCH_DIR||'/tmp/claude-0/-home-user-polvo-carreiras/172f80cd-50c6-558f-a4aa-77ddf6039c6d/scratchpad','frames'+t+(process.argv[3]?'n':''));
fs.mkdirSync(FR,{recursive:true});
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
const narr=process.argv[3]||'';
await p.goto('file://'+path.join(__dirname,'motion.html')+'?t='+t+(narr?'&narr='+narr:''));await p.waitForFunction(()=>window.__ready);
const meta=await p.evaluate(()=>meta);fs.writeFileSync(path.join(FR,'meta.json'),JSON.stringify(meta));
const N=Math.ceil(meta.total*30);const t0=Date.now();
for(let i=0;i<N;i++){await p.evaluate(x=>render(x),i/30);await p.screenshot({path:path.join(FR,`f${String(i).padStart(5,'0')}.jpg`),type:'jpeg',quality:92});
 if(i===30)console.log('t'+t,'eta s',((Date.now()-t0)/30*N/1000).toFixed(0));}
await b.close();console.log('done',t,N)})();
