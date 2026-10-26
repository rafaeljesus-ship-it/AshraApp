#!/usr/bin/env python3
"""Writes docs/AUDIO_LISTA_GRAVACAO.md and docs/audio_recording_list.csv from src/content/lessons.ts."""
import re, csv
src = open('src/content/lessons.ts', encoding='utf-8').read()
pat = re.compile(r"id:\s*'([^']+)',\s*pt:\s*'([^']*)',\s*ar:\s*'([^']*)',\s*arTranslit:\s*(?:\"([^\"]*)\"|'([^']*)')")
rows = [(m[1], m[2], m[3], m[4] or m[5]) for m in pat.finditer(src)]
with open('docs/audio_recording_list.csv', 'w', newline='', encoding='utf-8-sig') as f:
    w = csv.writer(f)
    w.writerow(['id', 'portugues', 'arabe_egipcio', 'transliteracao', 'arquivo_pt', 'arquivo_ar'])
    for i, pt, ar, tr in rows:
        w.writerow([i, pt, ar, tr, f'public/audio/pt-BR/{i}.mp3', f'public/audio/ar-EG/{i}.mp3'])
md = ["# Lista de gravação de áudio\n",
 "Gerada por `tools/gen_recording_list.py`. Cada frase precisa de **duas gravações**: português brasileiro (falante do Brasil) e **árabe egípcio** (falante do Egito, dialeto coloquial — não árabe padrão).\n",
 "## Como gravar e entregar\n",
 "1. Uma frase por arquivo, **sem pausas longas no começo/fim** (< 3 s), voz natural e clara, sem música ou ruído.",
 "2. Formato **MP3, mono, 44,1 kHz, 128 kbps**; volume normalizado (cerca de −16 LUFS) para todas soarem parecidas.",
 "3. Nome do arquivo exatamente como na coluna *Arquivo*, em `public/audio/pt-BR/` e `public/audio/ar-EG/`.",
 "4. Rode `python3 tools/build_audio_manifest.py` para atualizar `public/audio/manifest.json`. O app passa a tocar o arquivo; onde não houver, usa a voz do aparelho.",
 "5. Peça ao falante para dizer a frase **como no texto abaixo**; para o árabe, o texto em árabe é a referência (a transliteração é só apoio).\n",
 "| # | Português | Árabe egípcio | Transliteração | Arquivo PT | Arquivo AR |", "|---|---|---|---|---|---|"]
for n, (i, pt, ar, tr) in enumerate(rows, 1):
    md.append(f"| {n} | {pt} | {ar} | {tr} | `pt-BR/{i}.mp3` | `ar-EG/{i}.mp3` |")
md.append(f"\nTotal: **{len(rows)} frases = {2*len(rows)} arquivos**. Conteúdo demonstrativo: revisar o texto com os falantes antes de gravar.")
open('docs/AUDIO_LISTA_GRAVACAO.md', 'w', encoding='utf-8').write("\n".join(md) + "\n")
print(len(rows), 'phrases')
