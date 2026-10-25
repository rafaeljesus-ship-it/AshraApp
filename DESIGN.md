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
