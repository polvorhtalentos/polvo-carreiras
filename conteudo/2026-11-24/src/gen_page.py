"""Gera web/index.html: painel com uma página (rota #tema-N) por tema, com LinkedIn, Instagram e Stories.
Uso: python3 src/gen_page.py  (rodar de conteudo/AAAA-MM-DD, depois de gerar web/data.json e web/m/)"""
import json, html, sys

DATA = json.load(open('web/data.json'))
DIA = sys.argv[1] if len(sys.argv) > 1 else '24/11/2026'
e = lambda s: html.escape(s, quote=True)

def tema(t):
    n = t['id']
    hooks = ''.join(
        f'<label class="hook"><input type="radio" name="h{n}" id="h{n}-{i}" value="{i}"{" checked" if i == 0 else ""}><span>{e(h)}</span></label>'
        for i, h in enumerate(t['linkedin']['ganchos']))
    slides = ''.join(f'<img src="m/t{n}-c{i}.jpg" alt="Slide {i} do carrossel" loading="lazy" width="1080" height="1350">' for i in range(1, 7))
    return f'''
<section class="tema" id="tema-{n}" hidden>
  <a class="voltar" href="#inicio">← Todos os temas</a>
  <header class="tema-head">
    <p class="eyebrow">{e(t['alerta'])} · {e(t['pilar'])}</p>
    <h2>{e(t['nome'])}</h2>
    <p class="fato">{e(t['fato'])}</p>
    <p class="fonte">Fonte: <a href="{e(t['link'])}" target="_blank" rel="noopener">{e(t['fonte'])}</a></p>
  </header>

  <div class="bloco">
    <div class="bloco-head"><h3>LinkedIn</h3><span class="tag">Texto · voz Top Voice</span></div>
    <p class="ajuda">Escolha o gancho. O texto copiado já sai com ele no topo.</p>
    <div class="hooks">{hooks}</div>
    <pre class="texto" id="li-{n}"></pre>
    <button class="copiar" data-alvo="li-{n}" type="button">Copiar texto do LinkedIn</button>
  </div>

  <div class="bloco">
    <div class="bloco-head"><h3>Instagram</h3><span class="tag">Carrossel 6 slides · 1080×1350</span></div>
    <div class="carrossel" tabindex="0" aria-label="Carrossel: deslize para ver os 6 slides">{slides}</div>
    <div class="dupla">
      <figure class="post-unico"><img src="m/t{n}-info.jpg" alt="Post único (infográfico)" loading="lazy" width="1080" height="1350"><figcaption>Post único · infográfico</figcaption></figure>
      <div class="legenda">
        <h4>Legenda</h4>
        <pre class="texto" id="ig-{n}">{e(t['caption'])}</pre>
        <button class="copiar" data-alvo="ig-{n}" type="button">Copiar legenda</button>
      </div>
    </div>
  </div>

  <div class="bloco">
    <div class="bloco-head"><h3>Stories</h3><span class="tag">Motion 9:16 · com trilha</span></div>
    <div class="story-wrap">
      <video src="m/t{n}-story.mp4" controls playsinline preload="metadata" poster="m/t{n}-c1.jpg"></video>
      <ul class="dicas">
        <li>Suba o vídeo inteiro: o Instagram corta em partes de até 60 s sozinho.</li>
        <li>Na última tela, cole a figurinha <b>Caixinha de perguntas</b> logo abaixo da pergunta.</li>
        <li>Texto dentro da área segura: nada fica escondido pela barra do app.</li>
      </ul>
    </div>
  </div>
</section>'''

cards = ''.join(f'''
  <a class="card" href="#tema-{t['id']}">
    <img src="m/t{t['id']}-c1.jpg" alt="" loading="lazy" width="1080" height="1350">
    <span class="card-txt"><span class="eyebrow">{e(t['pilar'])}{' · D&amp;I' if t['di'] and t['pilar'] != 'D&I' else ''}</span><b>{e(t['nome'])}</b><span class="mini">{e(t['fonte'])}</span></span>
  </a>''' for t in DATA)

li = {t['id']: {'ganchos': t['linkedin']['ganchos'], 'corpo': t['linkedin']['corpo']} for t in DATA}

page = f'''<title>Pauta POLVO RH {DIA[:5]}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800;900&display=swap">
<style>
/* Layout: painel escuro POLVO; grade de capas na entrada, cada tema em rota própria com 3 blocos (LinkedIn, Instagram, Stories). */
:root {{
  --tinta:#13111B; --sup:#1E1B29; --sup2:#2A2638; --borda:#3A3649;
  --lav:#9C90D4; --lavd:#7D70B0; --lar:#F2A13A; --papel:#F9F8FB; --nevoa:#C4C0CE; --cinza:#A9A6B5;
  --f:'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  color-scheme: dark;
}}
* {{ box-sizing:border-box }}
body {{ margin:0; background:var(--tinta); color:var(--papel); font-family:var(--f); font-weight:500; line-height:1.5;
  padding-left:max(16px, env(safe-area-inset-left, 0px)); padding-right:max(16px, env(safe-area-inset-right, 0px)); padding-block:24px 64px }}
.wrap {{ max-width:1080px; margin:0 auto }}
a {{ color:var(--lav) }}
a:focus-visible, button:focus-visible, input:focus-visible + span, .carrossel:focus-visible {{ outline:3px solid var(--lar); outline-offset:3px }}
.topo {{ display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; padding-bottom:20px; border-bottom:1px solid var(--borda) }}
.logo {{ font-weight:900; letter-spacing:.35em; color:var(--lav); font-size:20px; display:flex; align-items:baseline }}
.logo svg {{ width:.8em; height:.7em; margin-right:.35em; fill:currentColor }}
.topo .data {{ color:var(--cinza); font-weight:700; font-size:13px; letter-spacing:.14em; text-transform:uppercase }}
.eyebrow {{ display:block; color:var(--lar); font-weight:800; font-size:12px; letter-spacing:.2em; text-transform:uppercase; margin:0 }}
h1 {{ font-weight:900; font-size:clamp(30px, 6vw, 52px); line-height:1.05; letter-spacing:-.02em; margin:28px 0 10px; text-wrap:balance }}
.intro {{ color:var(--nevoa); max-width:62ch; margin:0 0 28px }}
.grade {{ display:grid; grid-template-columns:repeat(auto-fill, minmax(230px, 1fr)); gap:18px }}
.card {{ display:flex; flex-direction:column; text-decoration:none; color:var(--papel); background:var(--sup); border:1px solid var(--borda); border-radius:18px; overflow:hidden; transition:transform .15s, border-color .15s }}
.card:hover {{ transform:translateY(-3px); border-color:var(--lavd) }}
.card img {{ width:100%; height:auto; aspect-ratio:4/5; object-fit:cover; display:block }}
.card-txt {{ display:flex; flex-direction:column; gap:6px; padding:14px 16px 18px }}
.card-txt b {{ font-weight:800; font-size:17px; line-height:1.25 }}
.mini {{ color:var(--cinza); font-size:13px }}
.voltar {{ display:inline-block; margin:22px 0 8px; font-weight:700; text-decoration:none }}
.tema-head h2 {{ font-weight:900; font-size:clamp(28px, 5.4vw, 46px); line-height:1.08; letter-spacing:-.02em; margin:10px 0 14px; text-wrap:balance }}
.fato {{ color:var(--nevoa); max-width:68ch; margin:0 0 6px }}
.fonte {{ color:var(--cinza); font-size:14px; margin:0 0 8px }}
.bloco {{ background:var(--sup); border:1px solid var(--borda); border-radius:22px; padding:22px; margin-top:22px; min-width:0 }}
.bloco-head {{ display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; margin-bottom:10px }}
.bloco h3 {{ margin:0; font-weight:900; font-size:22px }}
.tag {{ font-size:12px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; color:var(--tinta); background:var(--lav); border-radius:99px; padding:5px 12px }}
.ajuda {{ color:var(--cinza); font-size:14px; margin:0 0 12px }}
.hooks {{ display:grid; gap:10px; margin-bottom:14px }}
.hook {{ display:flex; gap:12px; align-items:flex-start; background:var(--sup2); border:1px solid var(--borda); border-radius:14px; padding:12px 14px; cursor:pointer; font-weight:700 }}
.hook input {{ accent-color:var(--lar); margin-top:4px; flex:0 0 auto }}
.hook:has(input:checked) {{ border-color:var(--lar) }}
.texto {{ white-space:pre-wrap; word-wrap:break-word; font-family:var(--f); font-size:15px; line-height:1.6; background:var(--tinta); border:1px solid var(--borda); border-radius:14px; padding:16px 18px; margin:0 0 12px; max-height:520px; overflow:auto }}
.copiar {{ font-family:var(--f); font-weight:800; font-size:14px; letter-spacing:.04em; color:var(--tinta); background:var(--lar); border:0; border-radius:99px; padding:12px 20px; cursor:pointer }}
.copiar.ok {{ background:var(--lav) }}
.carrossel {{ display:flex; gap:12px; overflow-x:auto; scroll-snap-type:x mandatory; padding-bottom:10px }}
.carrossel img {{ flex:0 0 min(78%, 300px); width:min(78%, 300px); height:auto; border-radius:12px; scroll-snap-align:start }}
.dupla {{ display:grid; grid-template-columns:minmax(0, 300px) minmax(0, 1fr); gap:20px; margin-top:18px; align-items:start }}
.post-unico {{ margin:0 }}
.post-unico img {{ width:100%; height:auto; border-radius:12px; display:block }}
figcaption {{ color:var(--cinza); font-size:13px; margin-top:6px }}
.legenda h4 {{ margin:0 0 8px; font-weight:800 }}
.story-wrap {{ display:grid; grid-template-columns:minmax(0, 300px) minmax(0, 1fr); gap:20px; align-items:start }}
video {{ width:100%; aspect-ratio:9/16; background:#000; border-radius:16px; display:block }}
.dicas {{ margin:0; padding-left:18px; color:var(--nevoa); display:grid; gap:8px }}
.rodape {{ margin-top:40px; color:var(--cinza); font-size:13px; border-top:1px solid var(--borda); padding-top:16px }}
@media (max-width:640px) {{ .dupla, .story-wrap {{ grid-template-columns:1fr }} .post-unico, video {{ max-width:320px }} }}
@media (prefers-reduced-motion:reduce) {{ .card {{ transition:none }} }}
</style>
<div class="wrap">
  <div class="topo"><span class="logo">POL<svg viewBox="0 0 100 88" aria-hidden="true"><path d="M0 0H100L50 88Z"/></svg>O</span><span class="data">POLVO RH · {DIA}</span></div>

  <section id="inicio">
    <h1>Pauta da semana</h1>
    <p class="intro">{len(DATA)} temas a partir dos alertas do Google e das notícias do LinkedIn. Cada tema tem o texto do LinkedIn, o carrossel e o post único do Instagram com legenda, e o motion pros stories.</p>
    <div class="grade">{cards}
    </div>
  </section>
  {''.join(tema(t) for t in DATA)}
  <p class="rodape">Feito pra Bruno Magalhães · POLVO RH. Fatos e números vêm só das fontes citadas em cada tema.</p>
</div>
<script>
const LI = {json.dumps(li, ensure_ascii=False)};
function montaLI(n) {{
  const sel = document.querySelector('input[name="h' + n + '"]:checked');
  const i = sel ? +sel.value : 0;
  document.getElementById('li-' + n).textContent = LI[n].ganchos[i] + '\\n\\n' + LI[n].corpo;
}}
Object.keys(LI).forEach(n => {{
  montaLI(n);
  document.querySelectorAll('input[name="h' + n + '"]').forEach(r => r.addEventListener('change', () => montaLI(n)));
}});
document.querySelectorAll('.copiar').forEach(b => b.addEventListener('click', () => {{
  const el = document.getElementById(b.dataset.alvo);
  const rot = b.textContent;
  const feito = () => {{ b.textContent = 'Copiado'; b.classList.add('ok'); setTimeout(() => {{ b.textContent = rot; b.classList.remove('ok'); }}, 1800); }};
  const selec = () => {{ const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = 'Texto selecionado: use Ctrl+C'; setTimeout(() => b.textContent = rot, 2500); }};
  try {{ navigator.clipboard.writeText(el.textContent).then(feito, selec); }} catch (err) {{ selec(); }}
}}));
function rota() {{
  const h = location.hash.replace('#', '');
  const alvo = /^tema-\\d+$/.test(h) && document.getElementById(h) ? h : 'inicio';
  document.querySelectorAll('#inicio, .tema').forEach(s => s.hidden = s.id !== alvo);
  document.querySelectorAll('video').forEach(v => {{ if (!v.closest('#' + alvo)) v.pause(); }});
  window.scrollTo(0, 0);
}}
addEventListener('hashchange', rota);
rota();
</script>
'''
open('web/index.html', 'w').write(page)
print('ok', len(page))
