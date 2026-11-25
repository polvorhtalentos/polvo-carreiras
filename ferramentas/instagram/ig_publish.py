"""Publica no Instagram (API do Instagram com login do Instagram) o carrossel, o Reels e o story de um tema.

Uso:
  python3 ferramentas/instagram/ig_publish.py --dia 2026-11-24 --tema 3 --tipos carrossel,reels,stories --capa 2 [--dry-run]

Como funciona:
- A API exige mídia em URL pública. As mídias ficam no repositório (público) e são servidas por
  raw.githubusercontent.com no branch atual. Por isso, ANTES de publicar: `--preparar` gera os JPEGs,
  depois faça commit + push, e só então rode sem `--preparar`.
- O token nunca passa por aqui: o proxy da sessão injeta "Authorization: Bearer <token>" nas chamadas
  a graph.instagram.com (credencial salva no ambiente). Este script manda um valor fictício que o proxy troca.
- É idempotente: o que já foi publicado fica em out/<n>-<slug>/ig/publicado.json e não é repetido.
"""
import argparse, json, os, subprocess, sys, time, urllib.parse, urllib.request

API = 'https://graph.instagram.com/v21.0'
REPO = 'polvorhtalentos/polvo-carreiras'
RAIZ = subprocess.run(['git', 'rev-parse', '--show-toplevel'], capture_output=True, text=True).stdout.strip()

def api(method, path, **params):
    url = API + path
    data = None
    if method == 'GET' and params: url += '?' + urllib.parse.urlencode(params)
    elif params: data = urllib.parse.urlencode(params).encode()
    req = urllib.request.Request(url, data=data, method=method, headers={'Authorization': 'Bearer TOKEN_INJETADO_PELO_PROXY'})
    try:
        with urllib.request.urlopen(req, timeout=120) as r: return json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit(f'ERRO da API ({e.code}) em {path}: {e.read().decode(errors="ignore")[:600]}')

def tema(dia, n):
    src = os.path.join(RAIZ, 'conteudo', dia, 'src')
    js = subprocess.run(['node', '-e', f"global.window={{}};require('{src}/content.js');const t=window.THEMES.find(x=>x.id=={n});console.log(JSON.stringify({{slug:t.slug,caption:t.caption}}))"], capture_output=True, text=True, check=True).stdout
    t = json.loads(js); t['dir'] = os.path.join(RAIZ, 'conteudo', dia, 'out', f"{n}-{t['slug']}"); return t

def preparar(t):
    ig = os.path.join(t['dir'], 'ig'); os.makedirs(ig, exist_ok=True)
    for i in range(1, 7):
        subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', os.path.join(t['dir'], f'carrossel-0{i}.png'), '-q:v', '2', os.path.join(ig, f'slide-0{i}.jpg')], check=True)
    for v in (1, 2, 3):
        subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', os.path.join(t['dir'], f'capa-reels-{v}.png'), '-q:v', '2', os.path.join(ig, f'capa-{v}.jpg')], check=True)
    print('JPEGs prontos em', ig, '\nAgora: git add + commit + push, e rode de novo sem --preparar.')

def url_publica(caminho):
    branch = subprocess.run(['git', 'rev-parse', '--abbrev-ref', 'HEAD'], capture_output=True, text=True).stdout.strip()
    rel = os.path.relpath(caminho, RAIZ)
    return f'https://raw.githubusercontent.com/{REPO}/{urllib.parse.quote(branch)}/{urllib.parse.quote(rel)}'

def checa(url):
    try:
        with urllib.request.urlopen(urllib.request.Request(url, method='HEAD'), timeout=30) as r: return r.status == 200
    except Exception: return False

def espera(cid, limite=600):
    t0 = time.time()
    while time.time() - t0 < limite:
        st = api('GET', f'/{cid}', fields='status_code,status').get('status_code')
        if st == 'FINISHED': return
        if st in ('ERROR', 'EXPIRED'): sys.exit(f'ERRO: o Instagram recusou a mídia {cid} ({st}).')
        time.sleep(8)
    sys.exit(f'ERRO: a mídia {cid} não terminou de processar em {limite} s.')

def publica(ig_id, cid):
    espera(cid)
    mid = api('POST', f'/{ig_id}/media_publish', creation_id=cid)['id']
    return mid, api('GET', f'/{mid}', fields='permalink').get('permalink', '')

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dia', required=True); ap.add_argument('--tema', type=int, required=True)
    ap.add_argument('--tipos', default='carrossel,reels,stories'); ap.add_argument('--capa', type=int, default=1)
    ap.add_argument('--preparar', action='store_true'); ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()
    t = tema(a.dia, a.tema)
    if a.preparar: return preparar(t)
    ig = os.path.join(t['dir'], 'ig'); log_p = os.path.join(ig, 'publicado.json')
    log = json.load(open(log_p)) if os.path.exists(log_p) else {}
    slides = [url_publica(os.path.join(ig, f'slide-0{i}.jpg')) for i in range(1, 7)]
    video = url_publica(os.path.join(t['dir'], 'motion.mp4'))
    capa = url_publica(os.path.join(ig, f'capa-{a.capa}.jpg'))
    faltando = [u for u in slides + [video, capa] if not checa(u)]
    if faltando: sys.exit('ERRO: estas mídias não estão públicas ainda (faltou commit + push?):\n' + '\n'.join(faltando))
    if a.dry_run:
        print('OK: todas as mídias estão públicas.'); print('\n'.join(slides + [video, capa])); return
    me = api('GET', '/me', fields='user_id,username'); ig_id = me['user_id']
    print('Conta:', me.get('username'))
    tipos = [x.strip() for x in a.tipos.split(',') if x.strip()]
    if 'carrossel' in tipos and 'carrossel' not in log:
        filhos = [api('POST', f'/{ig_id}/media', image_url=u, is_carousel_item='true')['id'] for u in slides]
        for f in filhos: espera(f, 120)
        cid = api('POST', f'/{ig_id}/media', media_type='CAROUSEL', children=','.join(filhos), caption=t['caption'])['id']
        log['carrossel'] = dict(zip(('id', 'link'), publica(ig_id, cid))); print('Carrossel publicado:', log['carrossel']['link'])
    if 'reels' in tipos and 'reels' not in log:
        cid = api('POST', f'/{ig_id}/media', media_type='REELS', video_url=video, cover_url=capa, caption=t['caption'], share_to_feed='true')['id']
        log['reels'] = dict(zip(('id', 'link'), publica(ig_id, cid))); print('Reels publicado:', log['reels']['link'])
    if 'stories' in tipos and 'stories' not in log:
        cid = api('POST', f'/{ig_id}/media', media_type='STORIES', video_url=video)['id']
        log['stories'] = dict(zip(('id', 'link'), publica(ig_id, cid))); print('Story publicado.')
    json.dump(log, open(log_p, 'w'), indent=2, ensure_ascii=False)
    print('Registro:', log_p)

if __name__ == '__main__':
    main()
