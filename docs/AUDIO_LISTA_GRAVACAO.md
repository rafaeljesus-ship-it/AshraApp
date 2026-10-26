# Lista de gravação de áudio

Gerada por `tools/gen_recording_list.py`. Cada frase precisa de **duas gravações**: português brasileiro (falante do Brasil) e **árabe egípcio** (falante do Egito, dialeto coloquial — não árabe padrão).

## Como gravar e entregar

1. Uma frase por arquivo, **sem pausas longas no começo/fim** (< 3 s), voz natural e clara, sem música ou ruído.
2. Formato **MP3, mono, 44,1 kHz, 128 kbps**; volume normalizado (cerca de −16 LUFS) para todas soarem parecidas.
3. Nome do arquivo exatamente como na coluna *Arquivo*, em `public/audio/pt-BR/` e `public/audio/ar-EG/`.
4. Rode `python3 tools/build_audio_manifest.py` para atualizar `public/audio/manifest.json`. O app passa a tocar o arquivo; onde não houver, usa a voz do aparelho.
5. Peça ao falante para dizer a frase **como no texto abaixo**; para o árabe, o texto em árabe é a referência (a transliteração é só apoio).

| # | Português | Árabe egípcio | Transliteração | Arquivo PT | Arquivo AR |
|---|---|---|---|---|---|
| 1 | Bom dia | صباح الخير | Sabah el-kheir | `pt-BR/bom-dia.mp3` | `ar-EG/bom-dia.mp3` |
| 2 | Boa noite | مساء الخير | Masa' el-kheir | `pt-BR/boa-noite.mp3` | `ar-EG/boa-noite.mp3` |
| 3 | Seja bem-vindo | أهلاً وسهلاً | Ahlan wa sahlan | `pt-BR/bem-vindo.mp3` | `ar-EG/bem-vindo.mp3` |
| 4 | Tudo bem? | إزيك؟ | Ezzayyak? | `pt-BR/tudo-bem.mp3` | `ar-EG/tudo-bem.mp3` |
| 5 | Tchau | مع السلامة | Ma'a es-salama | `pt-BR/tchau.mp3` | `ar-EG/tchau.mp3` |
| 6 | Obrigado | شكراً | Shukran | `pt-BR/obrigado.mp3` | `ar-EG/obrigado.mp3` |
| 7 | Meu nome é Rafa | اسمي رافا | Ismi Rafa | `pt-BR/meu-nome.mp3` | `ar-EG/meu-nome.mp3` |
| 8 | Qual é o seu nome? | إنت اسمك إيه؟ | Enta ismak eh? | `pt-BR/seu-nome.mp3` | `ar-EG/seu-nome.mp3` |
| 9 | Eu sou do Brasil | أنا من البرازيل | Ana min el-Brazil | `pt-BR/do-brasil.mp3` | `ar-EG/do-brasil.mp3` |
| 10 | Eu sou do Egito | أنا من مصر | Ana min Masr | `pt-BR/do-egito.mp3` | `ar-EG/do-egito.mp3` |
| 11 | Prazer em conhecer | اتشرفنا | Etsharrafna | `pt-BR/prazer.mp3` | `ar-EG/prazer.mp3` |

Total: **11 frases = 22 arquivos**. Conteúdo demonstrativo: revisar o texto com os falantes antes de gravar.
