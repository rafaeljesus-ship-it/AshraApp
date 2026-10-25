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

Os assets finais **não estão disponíveis como arquivos individuais**, então o app mostra avatares-placeholder (círculo colorido com inicial). **Para substituir:** coloque `public/characters/<id>.png` (ids: `rafa`, `ali`, `claudia`, `fadia`, `mohamed`, `nour`; PNG quadrado, ≥ 256 px, fundo transparente ou liso). O componente `Avatar` usa o arquivo automaticamente e cai no placeholder se ele não existir. Ilustrações de cenário (pirâmides, Cristo, etc.) ainda não foram incluídas.

## Próximos passos de design

Mapa de trilha ilustrado, tela de resultado com confete e Nour animado (leve), tela "Conheça seus guias" dedicada, ajuste fino a partir de testes com usuários.
