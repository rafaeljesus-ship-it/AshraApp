# ASHRA

Aplicativo gamificado de aprendizagem recíproca **português brasileiro ⇄ árabe egípcio**.
*Um novo idioma. Um novo mundo.*

Esta é a primeira versão (MVP, fluxo vertical): onboarding → escolha de idioma → Home → lição → resultado com XP → progresso salvo no aparelho. Veja `PRODUCT.md` (produto/escopo) e `DESIGN.md` (visual e componentes). O briefing original está em `docs/MASTER_BRIEF_ASHRA.md`.

## Requisitos

- Node.js 20 ou superior (testado com 22; veja `.nvmrc`)
- npm 10+

## Comandos

```bash
npm install        # instala as dependências
npm run dev        # servidor de desenvolvimento (http://localhost:5173)
npm test           # testes (Vitest + Testing Library)
npm run typecheck  # checagem de tipos
npm run build      # typecheck + build de produção em dist/
npm run preview    # serve o build (http://localhost:4173)
```

Sem backend, sem login, sem chaves ou serviços pagos. Tudo roda no navegador.

## Como validar o primeiro fluxo (manual)

1. `npm run dev`, abra no celular ou no modo mobile do navegador (largura ~390 px).
2. **Começar** → escolha o idioma que você fala → escolha o idioma-alvo → digite um nome (opcional).
3. A Home mostra saudação, lição recomendada, XP, nível, conquistas e sequência.
4. Toque na lição recomendada e complete os exercícios (múltipla escolha + montagem de frases). O feedback aparece a cada resposta.
5. Leia a dica cultural, continue e veja o XP ganho. Recarregue a página: XP, lições concluídas e idioma continuam.
6. Escolhendo **العربية** como idioma nativo, a interface inteira passa a ser RTL (`dir="rtl"` no documento) e o conteúdo vira árabe → português.

## Estrutura

```
src/
  content/    dados locais: lições, trilhas, personagens, textos da interface (pt/ar)
  domain/     lógica pura e testada: tipos, geração de exercícios, XP/nível/sequência/conquistas
  state/      contexto React + persistência em localStorage (versionada, tolerante a dados corrompidos)
  screens/    Onboarding, Home, Lições, Conquistas, Perfil, LessonPlayer
  ui/         Avatar (placeholder), Logo, Txt (texto com lang/dir reais), TabBar
```

Para adicionar conteúdo: edite `src/content/lessons.ts`. Cada frase é escrita **uma vez** (`pt`, `ar`, `arTranslit`) e os exercícios dos dois sentidos são gerados a partir dela (`src/domain/exercises.ts`).

## Decisões técnicas

- **React + TypeScript + Vite**, sem roteador nem biblioteca de estado: poucas telas, estado em um reducer simples. Dependências de runtime: `react`, `react-dom` e `@fontsource/noto-sans-arabic` (fonte árabe empacotada para funcionar offline e com shaping correto).
- **RTL real**: `lang`/`dir` no `<html>` conforme o idioma nativo, CSS com propriedades lógicas (`inline-start`, `inset-inline`…), setas espelhadas, e `Txt` marca trechos em outra língua com seu próprio `dir`.
- **Progresso por caminho** (`pt-BR>ar-EG` e `ar-EG>pt-BR` guardam XP e lições separadamente); sequência diária é global.
- **Pontos = "Nur"** (luz, em árabe; nome próprio da ASHRA, não "XP"). Nomes técnicos no código continuam `xp`; só os textos em `src/content/i18n.ts` e os títulos de conquistas usam "Nur" / "نور", fáceis de trocar.
- **Nur uma vez por conclusão**: cada tentativa tem um `attemptId`; o reducer ignora ids já processados. Primeira conclusão = 2 por acerto de primeira + 10 de conclusão + **5 se a lição for perfeita** + **combo** (maior sequência de acertos seguidos: 3–4 → +2; 5 ou mais → +4). Repetição = 5 fixos, sem bônus (evita farmar).
- **Meta diária**: 10, 20 (padrão) ou 30 Nur por dia, escolhida no Perfil; soma todas as conclusões do dia (todos os caminhos) e zera na virada do dia local. A Home mostra a barra; a tela de resultado mostra o detalhamento do bônus e avisa quando a meta é batida (conquista "Meta do dia").
- **Níveis**: nível *n* começa em `50·n·(n−1)` XP (100, 300, 600…), como na referência (320/600 XP no nível 3).

## Android (Fase 4, ainda não feita)

Recomendação: **Capacitor** — empacota o build web (`dist/`) em app Android sem reescrever nada, é gratuito e mantém um único código. Passos previstos: `npm i @capacitor/core @capacitor/cli @capacitor/android`, `npx cap init`, `npm run build`, `npx cap add android`, `npx cap sync`, abrir no Android Studio e gerar o AAB. Não foi adicionado agora para não incluir dependências antes de validar o MVP. Antes de publicar, conferir os requisitos atuais da Google Play (privacidade, classificação etária, segurança de dados, testes fechados).

## Limitações conhecidas / premissas

- **Conteúdo é demonstrativo** (2 lições, 11 frases) e precisa de revisão por falantes nativos dos dois idiomas. Transliteração é aproximada.
- **Personagens**: os avatares em `public/characters/` são recortes das pranchas oficiais (`docs/reference/pranchas/`), não assets finais com fundo transparente; troque-os pela arte de produção quando existir (ver `DESIGN.md`).
- **Sem áudio e sem IA**: nada disso é simulado. Trilhas "Conversas reais" e "Cultura e viagens" aparecem como *Em breve*.
- O texto de interface em árabe foi escrito de forma simples e também precisa de revisão.
- Seleção de nível inicial foi omitida: com só duas lições ela não mudaria nada.
- Os testes cobrem lógica e o fluxo no jsdom; **não foram feitos testes em dispositivo real**.

## Som e voz

- **Voz das frases** (`src/audio/voice.ts`): usa a síntese de voz do aparelho (Web Speech API), sem custo e sem arquivos de áudio. Botão de alto-falante em cada opção, em "Ouvir" e "Lento" no feedback e na frase aprendida da tela de resultado. A voz é escolhida por idioma: árabe egípcio (`ar-EG`) → qualquer árabe (`ar-SA`, …); português do Brasil (`pt-BR`) → qualquer português. Se o aparelho não tiver voz para o idioma (ou o navegador não suportar), o app avisa na tela em vez de ficar mudo sem explicação.
- **Limitação importante:** é voz de máquina do aparelho, não de falante nativo. Em árabe a voz costuma ser do árabe padrão/saudita, não egípcio; a interface avisa isso. Para ensinar pronúncia de verdade, gravar áudios com falantes nativos é o caminho (os arquivos entrariam no lugar da voz de máquina).
- **Sons do jogo** (`src/audio/sfx.ts`): toques, acerto, erro, lição concluída e meta batida, sintetizados no navegador (sem arquivos).
- **Ajustes** no Perfil → "Som e voz": ligar/desligar sons do jogo, ler respostas automaticamente e testar a voz. Preferências ficam salvas no aparelho.
- Não incluído: reconhecimento de fala (microfone), que continua fora do escopo.

### Áudio gravado (recomendado para pronúncia)

O app toca primeiro um **arquivo gravado** (`public/audio/<idioma>/<id-da-frase>.mp3`, listado em `public/audio/manifest.json`) e só usa a voz do aparelho quando não há arquivo. Assim a pronúncia fica igual em qualquer celular, inclusive sem voz em árabe instalada. Lista das frases a gravar: `docs/AUDIO_LISTA_GRAVACAO.md` (e `.csv`). Depois de colocar os MP3: `python3 tools/build_audio_manifest.py`. Quando a voz do aparelho falha, o app mostra os passos para instalar a voz (iPhone, Android ou computador) e quais vozes o aparelho tem.
