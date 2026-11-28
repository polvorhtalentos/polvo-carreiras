"""Monta web/data.json e web/m/ (JPEGs pra exibir, PNGs originais pra baixar, MP4 do story) a partir de out/.
Uso (de conteudo/AAAA-MM-DD):  python3 src/build_web.py && python3 src/gen_page.py DD/MM/AAAA"""
import json, os, shutil, subprocess

themes = json.loads(subprocess.run(['node', '-e', "global.window={};require('./src/content.js');console.log(JSON.stringify(window.THEMES))"],
                                   capture_output=True, text=True, check=True).stdout)
os.makedirs('web/m/png', exist_ok=True)

def jpg(src, dst):
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', src, '-q:v', '3', dst], check=True)

data = []
for t in themes:
    n, d = t['id'], f"out/{t['id']}-{t['slug']}"
    pares = [(f'{d}/carrossel-0{i}.png', f't{n}-c{i}') for i in range(1, 7)] + [(f'{d}/infografico.png', f't{n}-info')] + \
            [(f'{d}/capa-reels-{v}.png', f't{n}-capa-{v}') for v in (1, 2, 3)]
    for src, nome in pares:
        shutil.copyfile(src, f'web/m/png/{nome}.png'); jpg(src, f'web/m/{nome}.jpg')
    shutil.copyfile(f'{d}/motion.mp4', f'web/m/t{n}-story.mp4')
    data.append({k: t[k] for k in ('id', 'slug', 'nome', 'pilar', 'di', 'alerta', 'fonte', 'link', 'fato', 'linkedin', 'caption')}
                | {'capa': t['carousel'][0]['title']})
json.dump(data, open('web/data.json', 'w'), ensure_ascii=False, indent=1)
print('web/ pronto:', len(data), 'temas')
