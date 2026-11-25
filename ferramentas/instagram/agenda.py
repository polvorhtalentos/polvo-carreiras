"""Monta a agenda de publicações da semana seguinte à produção (sexta).

Uso:
  python3 ferramentas/instagram/agenda.py --dia 2026-11-27 --temas 3,1,5,2 --capas 2,1,3,2 [--saida conteudo/2026-11-27/agenda.json]

--temas vem na ORDEM DE PRIORIDADE (o mais forte primeiro). --capas: a capa de Reels de cada tema, na mesma ordem.

Estratégia (horários de Brasília, com minutos fora do :00 pra fugir da fila do servidor):
- Um tema por dia útil, de segunda a sexta. O 6º tema vai pro sábado; do 7º em diante, pra segunda seguinte.
- Os temas mais fortes vão pro meio da semana (terça, quarta e quinta), quando o engajamento costuma ser maior.
  Ordem dos dias: ter, qua, qui, seg, sex, sáb.
- No dia do tema:
    12h10 carrossel no feed (pico do almoço; post que gera salvamento)
    19h10 story com o motion (puxa pro post; o Bruno cola a caixinha de perguntas)
- No dia seguinte ao do tema: 18h40 Reels (o "como fazer na prática", complementa o carrossel e alcança quem não segue)
  Se o dia seguinte for domingo, o Reels vai pra segunda às 18h40.
- No máximo 1 carrossel e 1 Reels por dia; os Reels caem nos dias seguintes aos carrosséis, então o feed alterna formatos.
"""
import argparse, datetime as dt, json, os

ORDEM_DIAS = [1, 2, 3, 0, 4, 5]          # ter, qua, qui, seg, sex, sáb (0 = segunda)
NOME = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo']

def proxima_segunda(d):
    return d + dt.timedelta(days=(7 - d.weekday()) % 7 or 7)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dia', required=True); ap.add_argument('--temas', required=True); ap.add_argument('--capas', default='')
    ap.add_argument('--saida')
    a = ap.parse_args()
    base = proxima_segunda(dt.date.fromisoformat(a.dia))
    temas = [int(x) for x in a.temas.split(',')]
    capas = [int(x) for x in a.capas.split(',')] if a.capas else [((i % 3) + 1) for i in range(len(temas))]
    itens = []
    for k, (t, c) in enumerate(zip(temas, capas)):
        semana, pos = divmod(k, len(ORDEM_DIAS))
        dia = base + dt.timedelta(days=7 * semana + ORDEM_DIAS[pos])
        reel = dia + dt.timedelta(days=1)
        if reel.weekday() == 6: reel += dt.timedelta(days=1)
        itens += [
            {'tema': t, 'tipo': 'carrossel', 'quando': f'{dia}T12:10:00', 'capa': c},
            {'tema': t, 'tipo': 'stories', 'quando': f'{dia}T19:10:00', 'capa': c},
            {'tema': t, 'tipo': 'reels', 'quando': f'{reel}T18:40:00', 'capa': c},
        ]
    itens.sort(key=lambda x: x['quando'])
    agenda = {'produzido_em': a.dia, 'fuso': 'America/Sao_Paulo', 'itens': itens}
    if a.saida:
        os.makedirs(os.path.dirname(a.saida) or '.', exist_ok=True)
        json.dump(agenda, open(a.saida, 'w'), indent=2, ensure_ascii=False)
    for it in itens:
        d = dt.datetime.fromisoformat(it['quando'])
        print(f"{NOME[d.weekday()]:8} {d:%d/%m %Hh%M}  tema {it['tema']}  {it['tipo']}" + (f" (capa {it['capa']})" if it['tipo'] == 'reels' else ''))

if __name__ == '__main__':
    main()
