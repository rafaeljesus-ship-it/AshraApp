# ASHRA — Design

Referência aprovada: `docs/reference/jornada_visual_ashra.jpeg`. É inspiração de direção visual, **não** para copiar pixel a pixel; erros de texto da referência não são reproduzidos.

## Princípios

Vibrante, acolhedor, culturalmente respeitoso e premium; divertido sem ser infantil. Mobile-first (largura máx. de 480 px centralizada), poucos elementos por tela, textos legíveis, poucas animações (respeita `prefers-reduced-motion`).

## Tokens (`src/styles.css`)

| Token | Valor | Uso |
|---|---|---|
| `--emerald` | `#0b6b4f` | Primária, botões, lição recomendada |
| `--gold` | `#e0b84c` | Destaques, progresso, recompensas |
| `--ivory` | `#fbf6e9` | Fundo |
| `--green-soft` / `--red-soft` | `#d8f0dc` / `#fbe0dc` | Acerto / erro |
| `--coral`, `--blue` | `#f6b8a6`, `#bcd8f2` | Trilhas de apoio |
| `--radius` | `18px` | Cards |

Fonte: Noto Sans Arabic (empacotada) para árabe, com fallback do sistema para latim. Alvos de toque ≥ 44–52 px; foco visível em todos os controles.

## Componentes

- **Card** arredondado (trilhas, opções, estatísticas) · **Botão** primário/contorno/perigo · **Chip** de palavra (montagem de frase) · **Barra de progresso** (`<progress>`) · **TabBar** (Início, Lições, Conquistas, Perfil) · **Feedback** de resposta (verde/vermelho + resposta correta) · **Avatar** · **Txt** (texto com `lang`/`dir`).
- Estados: bloqueado / disponível / concluído (trilha); selecionado / certo / errado (opção).

## RTL

`<html lang dir>` segue o idioma nativo. Usar sempre propriedades lógicas (`margin-inline-*`, `inset-inline`, `text-align: start`). Setas e ícones direcionais usam `.flip-rtl`. Trechos em idioma diferente do da interface ficam em `<Txt lang>` para manter direção e shaping. A área de montagem de frase em árabe usa `dir="rtl"` real.

## Personagens e assets

Traços visuais oficiais (não alterar): Rafa — dreads curtos; Ali — careca e barbudo; Claudia — cabelos curtos e encaracolados; Fadia — guia cultural egípcia; Mohamed — guia de gramática; Nour — camelo com detalhes verde-esmeralda e dourados.

As pranchas oficiais (`docs/reference/pranchas/`, ver `LEIA-ME.txt`) **não são assets individuais de produção**. Como solução provisória, os rostos dos 6 personagens foram **recortados e redimensionados (256 px, quadrado)** da prancha 05 para `public/characters/<id>.png`; ficam com fundo da cena, sem transparência. Se um arquivo faltar, o app cai no avatar-placeholder (círculo colorido com inicial). **Para substituir por arte final:** sobrescreva `public/characters/<id>.png` (ids: `rafa`, `ali`, `claudia`, `fadia`, `mohamed`, `nour`; PNG quadrado, ≥ 256 px, fundo transparente ou liso). O componente `Avatar` usa o arquivo automaticamente e cai no placeholder se ele não existir. Os cenários atuais são SVGs simples e originais (`src/ui/Scene.tsx`), sem personagens.

## Próximos passos de design

Mapa de trilha ilustrado, tela de resultado com confete e Nour animado (leve), tela "Conheça seus guias" dedicada, ajuste fino a partir de testes com usuários.

## Refinamento visual v1 (comparação com a referência)

**Diagnóstico (MVP inicial → referência):** a referência é ilustrada e imersiva (cenários do Egito/Brasil, mapa de trilha desenhado, tela de recompensa escura e festiva, personagens 3D). O MVP era plano: cards sem imagem, mapa em lista, recompensa em fundo claro, opções sem marcas de estado.

**Mudanças (somente visuais; comportamento, textos e lógica intactos):**
- `src/ui/Scene.tsx`: cenários SVG originais e simples (Egito, Brasil, Nilo), sem personagens, usados em boas-vindas, cards de idioma, miniatura da lição recomendada, trilhas e mapa. São *stand-ins* até haver arte final.
- Home: pílula de sequência no topo, lição recomendada em card claro com miniatura e botão de play, ícones de estatística em círculos coloridos, trilhas com ilustração e degradê.
- Mapa (aba Lições): trilha com nós circulares (disponível = anel dourado, concluído = dourado, bloqueado = cinza), linha pontilhada e rótulos em pílulas sobre o cenário; trilhas "Em breve" mostram cenário com cadeado.
- Exercícios: barra de progresso mais grossa com degradê, opções com sombra de "botão", marca ✓/✕ (além da cor), barra de ação fixa embaixo com o feedback.
- Recompensa: fundo verde-esmeralda com estrelas, título e números dourados, botão dourado.
- Tudo usa propriedades lógicas, então o RTL continua espelhado corretamente.

**Não alterado:** avatares seguem como placeholders — não existem assets oficiais de personagens no repositório (`public/characters/` não existe) e nenhum foi inventado. Cenários da referência (pirâmides detalhadas, Cristo Redentor etc.) são apenas sugeridos por formas simples.

## Integração dos assets refinados (Home)

Origem: pacote `ASHRA_Assets_Refinados` (README_ASSETS.md / README_REFINAMENTO.md). Os recortes **não são uma biblioteca final**; só foi usado o que passou na inspeção visual.

**Integrados (Home):**
| Arquivo no app | Origem | Tratamento |
|---|---|---|
| `public/characters/bust/fadia.png`, `claudia.png` | `characters/*_character.png` (alpha real) | cortados acima da placa de nome; só o maior componente conectado do alpha; usados no banner da Home (guia da cultura aprendida: Fadia para árabe, Claudia para português) |
| `public/characters/bust/ali.png`, `mohamed.png` | idem | preparados, ainda não usados |
| `public/assets/scenes/egypt_pyramids.png`, `egypt_cafe.png`, `rio_christ.png` | `scenes/egypt_pyramids`, `egypt_city`, `rio_christ` | só a faixa superior (acima do cartão com legenda embutida), com margem para remover cantos arredondados/vizinhos; 250×100 px, `object-fit: cover` |
| `public/assets/icons/xp.png`, `level.png`, `achievements.png`, `streak.png` | `gamification/*` | cortados sem a legenda e sem vizinhos; fundo creme embutido, exibidos em círculo |

**Mantidos como estavam / não usados e por quê:**
- `*_portrait_refined.png`: o fundo quadriculado faz parte da imagem (sem transparência real) — não usados.
- `trail_cards/*`: legendas e botões embutidos — não usados.
- `navigation/*`: legendas e pedaços vizinhos — a TabBar continua com emojis; **falta** um conjunto de ícones limpos (ou ícones vetoriais).
- Bustos de Rafa e Nour: Rafa fica cortado na borda direita e Nour perde a boca ao cortar acima da placa; não foram gerados. Avatares circulares existentes (`public/characters/<id>.png`, recortes da prancha 05) continuam para esses dois.
- Baixa resolução: cenários 250×100 e ícones ~72 px; ok em celular, ficam suaves em telas muito grandes. Para produção, pedir versões em alta resolução.
- Mapa, Lições, Onboarding e Recompensa seguem com os cenários SVG até a próxima etapa.

## Nur, meta diária e recompensa

Home: cartão "Meta diária" com barra (verde) e texto de quanto falta, abaixo das estatísticas. Resultado: detalhamento do ganho (acertos, conclusão, perfeita, combo) em lista dourada e barra da meta. Perfil: seletor 10/20/30 Nur. O ícone de estrela do pacote de assets segue como símbolo do Nur.

## Integração do pacote `ASHRA-assets` (v3)

Todos os arquivos do pacote têm **no máximo 200–240 px** (miniaturas): servem para celular, mas devem ser regerados em 1024 px antes de produção (ver `docs/PROMPTS_ASSETS_GPT.md`).

| Uso no app | Arquivo | Origem / tratamento |
|---|---|---|
| Avatares Ali, Fadia, Mohamed, Nour, Rafa | `public/characters/<id>.png` | `02-personagens/<id>.png` (retratos circulares sobre creme), copiados sem alteração |
| Marca (boas-vindas) | `public/assets/brand/mark.png` | recorte da flor de `01-marca/logo-ashra.png` sem o texto, fundo removido por flood-fill (ampliada 3× com Lanczos) |
| Ícones de estatística | `public/assets/icons/{xp,level,achievements,streak}.png` | `06-icones-gamificacao/*`, sem alteração |
| Ícones da barra inferior | `public/assets/nav/{home,lessons,achievements,profile}.png` | `06-icones-gamificacao/*` com fundo removido por flood-fill, 96 px |
| Cards de trilha da Home | `public/assets/vignettes/{basico,conversas,cultura}.png` | `04-vinhetas-cena/vinheta-05`, `-01`, `-03` |

**Não integrados:** `avatar-usuario-placeholder.png` (é o rosto do Rafa, não um avatar neutro do usuário), Claudia (`claudia.png` tem fundo rosa e estilo/figurino diferentes do resto; mantido o recorte anterior), pranchas de expressões (rostos de ~45 px), `banners-paisagem` (198×100, menores que os atuais), vinhetas 02/04, cartões de onboarding, `fundos-decorativos`, `nav-bar-fundo-pill.png`, `thumbnail-licao-recomendada.png` e `07-icones-ui/*` (já existentes em resolução menor ou com texto embutido). Falta ícone de **Explorar** na barra (não há aba ainda).

A barra inferior agora mostra o item ativo com fundo verde-claro (os ícones coloridos não têm contraste sobre verde-esmeralda).

## Integração dos pacotes `ASHRA_assets_parte_1` e `parte_2` (v4)

Os arquivos vieram com nomes automáticos do gerador; abaixo, o que são e como foram usados. Estes são **de alta resolução e com transparência real** (exceto as telas).

| Conteúdo | Uso no app |
|---|---|
| 6 poses do **Nour** (alpha real): pulando, acenando, pensando, apontando, rindo, deitado | `public/characters/nour/{cheer,wave,think,point,joy,rest}.png`. `cheer` na tela de recompensa, `wave` nas boas-vindas. As outras ficam prontas para estados vazios, erro e dicas. |
| Grade de **6 cenários** (pirâmides, Nilo, bazar, café ao pôr do sol, praia, Pão de Açúcar) | `public/assets/scenes/*.jpg` (551×~455). Usados no banner/miniatura da Home, boas-vindas, cards de idioma e mapa de lições (substituem os SVGs; `Scene.tsx` removido). Mapeamento em `src/ui/art.ts`. |
| **Ícones dourados** (livro, balão, bússola, chama, globo, coração, estrela, troféu) | `public/assets/gold/*.png` (256 px). Usados nas **conquistas** (lista e tela de resultado) no lugar dos emojis. |
| 11 **telas completas** de referência | `docs/reference/telas/*.jpg` (reduzidas). São mockups com texto embutido: **alvo de design**, não assets. |

**Guardados, ainda não usados:** 8 ícones de linha de áudio (alto-falante, ondas, replay, microfone, onda sonora, fone, teclado, mudo) — úteis quando houver áudio; placas em branco (botão verde, faixa com estrela, placa creme, placa menta, barra de progresso com moldura) — úteis como fundos de botões/cards, mas a barra com preenchimento fixo e a placa de alerta (xadrez falso gravado na imagem) **não** servem como estão.

**Pendências de arte:** Claudia (retrato no estilo dos demais), avatar neutro do usuário, ícone de Explorar e ícone de cadeado ilustrado.

## Alinhamento com a jornada de referência (v5)

Comparação tela a tela com `docs/reference/jornada_visual_ashra.jpeg` e `docs/reference/telas/`:

| Tela | Antes | Agora |
|---|---|---|
| Abertura | cenário + mascote | arte do grupo (recorte provisório da própria prancha, 356×367 px) com marca e slogan renderizados pelo app |
| Escolha de idioma | cards pequenos | cards grandes de cenário com legenda "Eu falo / Quero aprender", barra de etapas e Nour com balão "Dois mundos. Uma jornada incrível!" |
| Conheça seus guias | só no Perfil | etapa do onboarding (lista com os 6 retratos) e também no Perfil |
| Home | banner próprio com guia | cabeçalho como na referência (retrato do aprendiz — Rafa para quem aprende árabe, Ali para quem aprende português — saudação e chama com "N dias"), card da lição com cenário, números sob ícones coloridos, trilhas com cenário |
| Lição | cabeçalho simples | rótulo "Lição N · Vocabulário/Frase completa" sobre a barra de progresso |
| Dica cultural | cartão claro | tela imersiva: cenário escuro, balão de fala, guia grande (Fadia/Claudia) e cartão "Dica cultural" com "Legal! Continuar" |
| Recompensa | Nour + números | guia + Nour, 3 cartões brancos (Nur, acertos, sequência), "Você já sabe dizer …", detalhe do bônus, meta diária, botão verde |
| Trilha | lista em cartão | tela cheia com cenário, cabeçalho "Trilha: Básico" com progresso, nós ligados por linha pontilhada; 3 nós "Em breve" bloqueados (sem conteúdo ainda) |

**Ainda diferente da referência (pendente):** introdução da lição com o guia grande + balão + microfone (exige áudio/fala), tela "Seu progresso" com semana de sequência, aba Explorar, sino de notificações, e a arte final do grupo em alta resolução (usar o prompt "Grupo — selfie dos seis").

## Pacote `ASHRA_Assets_Organizados` (v6) — avaliado, nada integrado ao app

Reorganização das mesmas pranchas em pastas. Inspeção:
- `characters/`, `expressions*/`, `bio_cards/`, `app_screens/`, `scenes/`, `cards/`, `ui/`, `branding/`: recortes de 100–310 px, **com texto/legendas embutidos** (placas de nome, botões "Continuar", cartões "Básico", logo com slogan) e pedaços dos vizinhos nas bordas; fundos opacos. Inferiores aos recortes já integrados (v3/v4) e contra a regra de texto só no app.
- `hero_group_banner.png` (1536×353): bom banner com os seis, mas com logo, slogan (pt/ar) e nomes manuscritos gravados na imagem. Pode servir de apoio visual, não como asset de interface.
- `icons/`, `backgrounds/`: 100×113 e 384×135 px; já temos versões melhores (`public/assets/gold`, `scenes`).
- `hi_res_screens/`: 3 mockups em 1170 px, guardados reduzidos (780 px) em `docs/reference/telas_hires/` como referência de detalhe.

Para sair do ciclo de recortes de baixa resolução, os assets precisam ser **gerados individualmente** com os prompts de `docs/PROMPTS_ASSETS_GPT.md` (1024 px, fundo magenta, sem texto).

## Voz e som

Botões redondos de alto-falante (borda verde) ao lado de cada opção; no feedback, "Ouvir" e "Lento" (pílula dourada com tartaruga) e aviso de dialeto. Perfil: interruptores "Sons do jogo" e "Ler as respostas em voz alta" e botão "Testar voz".
