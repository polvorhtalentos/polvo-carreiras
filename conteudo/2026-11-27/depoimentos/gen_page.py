"""Gera web/index.html: página dos depoimentos (LinkedIn + stories) com downloads. Visual branco + lilás."""
import json, html
e = lambda s: html.escape(s, quote=True)
TXT = open('out/linkedin-texto.txt').read()
NOMES = ['capa', 'Luanna Siqueira', 'Luisa Ribeiro', 'Julia Dentello', 'Rariany Monteiro', 'Luana Oliveira', 'chamada final']

def strip(pre, w, h, rotulo):
    return ''.join(
        f'<figure class="peca {pre}"><img src="m/{pre}-{i:02d}.jpg" alt="{rotulo} {i}: {e(NOMES[i-1])}" loading="lazy" width="{w}" height="{h}">'
        f'<figcaption>{i:02d} · {e(NOMES[i-1])}</figcaption>'
        f'<button class="dl" type="button" data-arq="m/{pre}-{i:02d}.png" data-nome="polvo-depoimentos-{pre}-{i:02d}.png">Baixar</button></figure>'
        for i in range(1, 8))

page = f'''<title>Depoimentos POLVO RH</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&display=swap">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<style>
/* Layout: página clara (branco + lilás, como as mídias), um bloco por rede: LinkedIn e Instagram stories. */
:root {{ --fundo:#FFFFFF; --nevoa:#F6F4FC; --lilas-claro:#ECE8F8; --lilas:#9C90D4; --lilas-esc:#6E61A8; --tinta:#13111B; --texto2:#5F5A70; --linha:#E3DEF3;
  --f:'Montserrat','Helvetica Neue',Arial,sans-serif; color-scheme:light }}
* {{ box-sizing:border-box }}
body {{ margin:0; background:var(--fundo); color:var(--tinta); font-family:var(--f); font-weight:500; line-height:1.5;
  padding-left:max(16px, env(safe-area-inset-left, 0px)); padding-right:max(16px, env(safe-area-inset-right, 0px)); padding-block:24px 64px }}
.wrap {{ max-width:1080px; margin:0 auto }}
a {{ color:var(--lilas-esc) }}
button:focus-visible, .tira:focus-visible {{ outline:3px solid var(--lilas-esc); outline-offset:3px }}
.topo {{ display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; padding-bottom:18px; border-bottom:2px solid var(--linha) }}
.logo {{ font-weight:900; letter-spacing:.35em; color:var(--lilas-esc); font-size:20px; display:flex; align-items:baseline }}
.logo svg {{ width:.8em; height:.7em; margin-right:.35em; fill:currentColor }}
.data {{ color:var(--lilas); font-weight:800; font-size:13px; letter-spacing:.14em; text-transform:uppercase }}
.eyebrow {{ color:var(--lilas-esc); font-weight:800; font-size:12px; letter-spacing:.2em; text-transform:uppercase; margin:28px 0 0 }}
h1 {{ font-weight:900; font-size:clamp(30px, 6vw, 50px); line-height:1.05; letter-spacing:-.025em; margin:8px 0 12px; text-wrap:balance }}
h1 em {{ font-style:normal; color:var(--lilas-esc) }}
.intro {{ color:var(--texto2); max-width:64ch; margin:0 0 18px }}
.acoes {{ display:flex; flex-wrap:wrap; align-items:center; gap:10px; margin-top:12px }}
.bloco {{ background:var(--nevoa); border:1px solid var(--linha); border-radius:24px; padding:22px; margin-top:24px; min-width:0 }}
.bloco-head {{ display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; margin-bottom:12px }}
.bloco h2 {{ margin:0; font-weight:900; font-size:22px }}
.tag {{ font-size:12px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; color:var(--lilas-esc); background:var(--lilas-claro); border-radius:99px; padding:5px 12px }}
.tira {{ display:flex; gap:14px; overflow-x:auto; scroll-snap-type:x mandatory; padding-bottom:10px }}
.peca {{ margin:0; scroll-snap-align:start; display:flex; flex-direction:column; align-items:flex-start; gap:6px }}
.peca.linkedin {{ flex:0 0 min(78%, 280px) }}
.peca.story {{ flex:0 0 min(56%, 200px) }}
.peca img {{ width:100%; height:auto; border-radius:14px; display:block; border:1px solid var(--linha); background:#fff }}
figcaption {{ color:var(--texto2); font-size:13px; font-weight:600 }}
.texto {{ white-space:pre-wrap; word-wrap:break-word; font-family:var(--f); font-size:15px; line-height:1.6; background:#fff; border:1px solid var(--linha); border-radius:14px; padding:16px 18px; margin:14px 0 0; max-height:460px; overflow:auto }}
.btn {{ font-family:var(--f); font-weight:800; font-size:14px; letter-spacing:.03em; border-radius:99px; padding:11px 20px; cursor:pointer; border:2px solid var(--lilas-esc) }}
.btn-forte {{ background:var(--lilas-esc); color:#fff }}
.btn-leve {{ background:#fff; color:var(--lilas-esc) }}
.dl {{ display:none; font-family:var(--f); font-weight:800; font-size:12px; color:var(--lilas-esc); background:#fff; border:2px solid var(--lilas); border-radius:99px; padding:6px 14px; cursor:pointer }}
.dl-grande {{ display:none }}
body.pode-baixar .dl, body.pode-baixar .dl-grande {{ display:inline-flex }}
body.pode-baixar .aviso {{ display:none }}
.aviso {{ color:var(--texto2); font-size:13px; margin:8px 0 0 }}
.mini {{ color:var(--texto2); font-size:13px }}
.nota {{ margin-top:32px; color:var(--texto2); font-size:13px; border-top:2px solid var(--linha); padding-top:14px }}
button:disabled {{ opacity:.7; cursor:progress }}
</style>
<div class="wrap">
  <div class="topo"><span class="logo">POL<svg viewBox="0 0 100 88" aria-hidden="true"><path d="M0 0H100L50 88Z"/></svg>O</span><span class="data">POLVO RH · 27/11/2026</span></div>

  <p class="eyebrow">Depoimentos</p>
  <h1>O que as pessoas dizem <em>depois</em> de um processo comigo</h1>
  <p class="intro">Cinco recomendações, em cards pro LinkedIn e stories pro Instagram, no visual branco e lilás. Cada peça tem download, e dá pra baixar tudo junto.</p>
  <div class="acoes"><button class="btn btn-forte dl-grande" type="button" data-zip="tudo">Baixar tudo (.zip)</button><span class="mini">LinkedIn (cards, PDF e texto) e stories, cerca de 6 MB.</span></div>
  <p class="aviso">Os downloads aparecem quando a página termina de carregar no Claude. Se não aparecerem, abra a página num navegador.</p>

  <section class="bloco" aria-labelledby="h-li">
    <div class="bloco-head"><h2 id="h-li">LinkedIn</h2><span class="tag">Carrossel 7 cards · 1080×1350 · PDF</span></div>
    <div class="tira" tabindex="0" aria-label="Carrossel do LinkedIn">{strip('linkedin', 1080, 1350, 'Card')}</div>
    <div class="acoes">
      <button class="btn btn-forte dl-grande" type="button" data-arq="m/linkedin-carrossel-depoimentos.pdf" data-nome="polvo-depoimentos-linkedin-carrossel.pdf">Baixar PDF do carrossel</button>
      <button class="btn btn-leve dl-grande" type="button" data-zip="linkedin">Baixar kit do LinkedIn (.zip)</button>
      <span class="mini">No LinkedIn, poste o PDF em "Adicionar documento": ele vira carrossel.</span>
    </div>
    <pre class="texto" id="txt-li">{e(TXT)}</pre>
    <div class="acoes"><button class="btn btn-forte" type="button" id="copiar">Copiar texto do post</button><button class="btn btn-leve dl-grande" type="button" data-txt="1">Baixar .txt</button></div>
  </section>

  <section class="bloco" aria-labelledby="h-st">
    <div class="bloco-head"><h2 id="h-st">Instagram · stories</h2><span class="tag">7 stories · 1080×1920</span></div>
    <div class="tira" tabindex="0" aria-label="Stories do Instagram">{strip('story', 1080, 1920, 'Story')}</div>
    <div class="acoes"><button class="btn btn-forte dl-grande" type="button" data-zip="stories">Baixar os 7 stories (.zip)</button><span class="mini">Poste na ordem. No último, coloque a figurinha de link ou de mensagem pro direct.</span></div>
  </section>

  <p class="nota">As fotos são as de perfil do LinkedIn de cada profissional. Antes de postar, vale avisar quem foi citado.</p>
</div>
<script>
const NL = String.fromCharCode(10);
let DL = null;
if (window.claude && claude.use) claude.use('downloads').then(d => {{ DL = d; if (d) document.body.classList.add('pode-baixar'); }}).catch(() => {{}});
const busca = async (u) => {{ const r = await fetch(u); if (!r.ok) throw {{ code: 'fetch' }}; return r.blob(); }};
const TXT = document.getElementById('txt-li').textContent;
const LI = [1,2,3,4,5,6,7].map(i => 'linkedin-0' + i + '.png'), ST = [1,2,3,4,5,6,7].map(i => 'story-0' + i + '.png');
async function zip(tipo) {{
  const z = new JSZip();
  if (tipo !== 'stories') {{ const p = tipo === 'tudo' ? 'linkedin/' : ''; for (const f of LI) z.file(p + f, await busca('m/' + f)); z.file(p + 'carrossel-depoimentos.pdf', await busca('m/linkedin-carrossel-depoimentos.pdf')); z.file(p + 'texto-do-post.txt', TXT + NL); }}
  if (tipo !== 'linkedin') {{ const p = tipo === 'tudo' ? 'stories/' : ''; for (const f of ST) z.file(p + f, await busca('m/' + f)); }}
  return z.generateAsync({{ type: 'blob', compression: 'STORE' }});
}}
const MSG = {{ declined: 'Download cancelado', rate_limited: 'Aguarde e tente de novo', host_unavailable: 'Abra num navegador pra baixar', fetch: 'Não achei o arquivo' }};
document.querySelectorAll('[data-arq],[data-zip],[data-txt]').forEach(b => b.addEventListener('click', async () => {{
  if (!DL) return; const rot = b.textContent; b.disabled = true; b.textContent = 'Preparando…';
  try {{
    let nome, dados;
    if (b.dataset.zip) {{ if (!window.JSZip) throw {{ code: 'zip' }}; nome = 'polvo-depoimentos-' + b.dataset.zip + '.zip'; dados = await zip(b.dataset.zip); }}
    else if (b.dataset.txt) {{ nome = 'polvo-depoimentos-texto-linkedin.txt'; dados = TXT + NL; }}
    else {{ nome = b.dataset.nome; dados = await busca(b.dataset.arq); }}
    b.textContent = 'Confirme o download'; await DL.save({{ filename: nome, data: dados }}); b.textContent = 'Baixado';
  }} catch (err) {{ b.textContent = (err && err.code === 'zip') ? 'Não deu pra montar o ZIP aqui' : (MSG[err && err.code] || 'Não foi possível baixar'); }}
  setTimeout(() => {{ b.textContent = rot; b.disabled = false; }}, 2500);
}}));
document.getElementById('copiar').addEventListener('click', (ev) => {{
  const b = ev.currentTarget, rot = b.textContent, el = document.getElementById('txt-li');
  const sel = () => {{ const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = 'Texto selecionado: use Ctrl+C'; setTimeout(() => b.textContent = rot, 2500); }};
  try {{ navigator.clipboard.writeText(el.textContent).then(() => {{ b.textContent = 'Copiado'; setTimeout(() => b.textContent = rot, 1800); }}, sel); }} catch (x) {{ sel(); }}
}});
</script>
'''
open('web/index.html', 'w').write(page)
print('ok', len(page))
