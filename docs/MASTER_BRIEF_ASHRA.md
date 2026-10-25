# ASHRA — Master Brief para Claude Code

## Como usar este documento

1. Crie uma pasta de projeto chamada `ashra-app` no computador.
2. Copie este documento e a pasta `referencias/` para dentro do projeto (ou abra este pacote e use os arquivos nele).
3. Abra a pasta no terminal e inicie Claude Code.
4. Cole o prompt da seção **Primeira instrução para Claude Code**.
5. Peça para executar uma etapa por vez, rodar os testes e explicar como validar o resultado.

Não tente construir todas as funcionalidades de uma vez. Primeiro planeje, depois implemente um fluxo vertical completo.

---

## 1. Visão do produto

**Nome:** ASHRA  
**Tagline:** Um novo idioma. Um novo mundo.

ASHRA é um aplicativo gamificado de aprendizagem recíproca que aproxima falantes de português brasileiro e árabe, com foco inicial em português brasileiro e árabe egípcio coloquial. O produto ensina idioma e contexto cultural por meio de trilhas, exercícios, personagens, conquistas e pequenas vitórias diárias.

A experiência deve ser vibrante, acolhedora, culturalmente respeitosa e visualmente premium — divertida sem parecer infantil demais. A referência visual aprovada está em `referencias/jornada_visual_ashra.jpeg`. Use-a como inspiração de direção visual, não como tela para copiar pixel a pixel. Corrija textos, ortografia, lógica de navegação e detalhes culturais antes de implementar.

## 2. Público e direção de aprendizagem

Dois caminhos equivalentes:

1. Falantes de português brasileiro aprendendo árabe egípcio.
2. Falantes de árabe aprendendo português brasileiro.

Não basta inverter traduções. A seleção de idioma nativo e idioma-alvo deve influenciar as instruções, a direção da escrita, as traduções e as explicações. Para a primeira versão, priorize um conjunto pequeno de conteúdo revisável e consistente.

## 3. Elenco oficial

Preserve as características visuais e os papéis em todas as telas, ilustrações e textos:

- **Rafa:** brasileiro negro, com dreads curtos. É um aprendiz de árabe egípcio e representa a perspectiva de quem está começando.
- **Ali:** egípcio, careca e barbudo. Está aprendendo português brasileiro; suas situações podem explorar expressões cotidianas, gírias e diferenças culturais com humor respeitoso.
- **Claudia:** brasileira, cabelos curtos e encaracolados. É a guia do Brasil e do português brasileiro: cultura, expressões, música, gastronomia e costumes.
- **Fadia:** guia cultural egípcia. Apresenta o Egito, o árabe egípcio e os costumes locais com acolhimento e contexto.
- **Mohamed:** guia de gramática, estrutura das frases e expressões, com explicações claras e práticas.
- **Nour:** camelo mascote com detalhes verde-esmeralda e dourados. Acompanha trilhas, XP, desafios, conquistas e recompensas.

Evite estereótipos nacionais, religiosos ou linguísticos. Não atribua a um personagem características que contradigam a lista oficial.

## 4. Direção visual e UX

- Paleta: verde-esmeralda, dourado suave, creme/ivory e cores vibrantes de apoio para trilhas e estados de jogo.
- Personagens 3D cartunizados, expressivos, consistentes e de acabamento polido.
- Cards arredondados, hierarquia tipográfica forte, ícones claros, feedback de acerto/erro e recompensas visíveis.
- Sensação de aventura, descoberta cultural e progresso.
- Gamificação evidente: XP, sequência diária, níveis, conquistas, mapa de trilhas e lição recomendada.
- Evitar excesso de elementos, visual infantilizado, texto minúsculo e excesso de animações.
- Mobile-first, com adaptação a tamanhos diferentes de tela.
- O árabe deve usar fonte compatível, shaping correto, alinhamento e layout RTL reais; não simular RTL apenas alinhando o texto à direita.
- A interface deve manter acessibilidade, contraste, áreas de toque adequadas e estados de foco/erro.
- Se os assets aprovados não estiverem disponíveis como arquivos individuais, não inventar que estão. Criar placeholders consistentes e documentar como substituí-los.

## 5. Escopo do MVP

### Incluir

1. Onboarding simples.
2. Escolha do idioma nativo e do idioma que a pessoa quer aprender.
3. Seleção de nível inicial, se necessário.
4. Home com saudação, lição recomendada, XP, nível, sequência diária e trilhas.
5. Lista/mapa de lições com estados bloqueado, disponível e concluído.
6. Lição jogável de ponta a ponta com vocabulário, tradução, transliteração e explicação curta.
7. Exercícios de múltipla escolha e montagem de frases.
8. Feedback imediato de resposta certa ou errada.
9. Tela de conclusão com XP/recompensa e botão de continuar.
10. Dicas culturais com Claudia, Fadia ou Mohamed, conforme o tema.
11. Perfil/progresso com conquistas básicas.
12. Persistência local de idioma escolhido, XP, lições concluídas e progresso.
13. Conteúdo separado da interface em arquivos de dados locais.
14. Testes dos principais fluxos e instruções de execução.

### Não incluir na primeira versão

- Login obrigatório, sincronização em nuvem ou backend complexo.
- Pagamentos, assinaturas ou paywall.
- Tutor generativo de IA ou API paga.
- Reconhecimento de fala ou pronúncia avançada.
- Chat público, rede social ou comunidade completa.
- Ranking competitivo, notificações push ou recursos que exijam infraestrutura.

Não representar áudio, IA ou funcionalidades como se estivessem funcionando se forem apenas placeholders. É aceitável indicar “em breve” de forma honesta, mas priorize fluxos funcionais.

## 6. Conteúdo educacional

- Começar com poucas lições bem estruturadas, não centenas de itens superficiais.
- Organizar conteúdo em dados locais, com campos como idioma de origem, idioma-alvo, texto original, transliteração quando aplicável, tradução, explicação, opções de resposta e resposta correta.
- Para árabe, distinguir árabe escrito e árabe egípcio coloquial quando relevante. Não afirmar que a transliteração é uma pronúncia perfeita.
- Tratar variantes, traduções e contexto cultural com cuidado. Marcar conteúdo demonstrativo para revisão por falantes competentes antes de lançamento público.
- Fazer a experiência de aprendizagem funcionar nos dois sentidos sem duplicar lógica desnecessariamente.

## 7. Tecnologia e restrições de custo

- Prioridade: ferramentas gratuitas ou já disponíveis ao fundador.
- Preferência inicial: React + TypeScript + Vite, com componentes reutilizáveis e conteúdo local.
- Escolha a solução de empacotamento Android mais simples e compatível com o projeto, documentando as razões. Avalie Capacitor se adequado.
- Não exigir serviços pagos para instalar e testar o MVP.
- Não colocar chaves secretas no código do cliente.
- Não adicionar dependências sem necessidade.
- Não presumir que Fable, APIs ou créditos pagos estejam disponíveis. Se uma ferramenta necessária não estiver acessível, explique a alternativa gratuita.
- Usar Git e recomendar commits pequenos por etapa.
- Documentar versão de Node, comandos de instalação, execução, testes e build.

## 8. Roadmap

### Fase 1 — Fundação visual
- Consolidar o design system e tokens.
- Transformar a referência em especificações de layout/componentes.
- Implementar primeiro a Home e uma lição completa.

### Fase 2 — MVP
- Onboarding e seleção de idiomas.
- Home, mapa de trilhas, lições e exercícios.
- XP, conquistas e persistência local.
- Suporte RTL e conteúdo local.

### Fase 3 — Validação
- Revisão do conteúdo nos dois sentidos.
- Testes manuais e automatizados.
- Testes com usuários de ambos os grupos linguísticos.
- Ajustes de UX com base no feedback.

### Fase 4 — Android
- Testar em dispositivo real.
- Preparar build Android e Android App Bundle.
- Conferir requisitos atuais da Google Play, privacidade, classificação etária, formulário de segurança de dados e eventuais exigências de testes fechados.

### Fase 5 — Crescimento
- Mais trilhas e conteúdo cultural.
- Considerar áudio, tutor de IA e comunidade apenas após validar o MVP e avaliar custos, segurança e moderação.
- Avaliar monetização freemium quando houver valor recorrente comprovado.

## 9. Critérios de aceitação do primeiro fluxo

O primeiro fluxo só está concluído quando:

- O app inicia sem erro e adapta-se a um viewport móvel.
- A pessoa escolhe idioma nativo e idioma-alvo.
- A Home reflete a escolha feita.
- É possível iniciar e completar uma lição.
- As respostas corretas/incorretas recebem feedback correto.
- A recompensa de XP é calculada uma única vez por conclusão.
- O progresso permanece após recarregar/fechar e reabrir o app.
- A interface árabe tem direção RTL e leitura funcional.
- Os principais componentes têm estados vazios/erro quando aplicável.
- Os testes e o build passam, ou os problemas remanescentes são listados com clareza.
- Existe README com passos reproduzíveis para instalar, rodar, testar e compilar.

## 10. Primeira instrução para Claude Code

> Você é o engenheiro de software líder da ASHRA. Leia este documento inteiro e examine os arquivos disponíveis, incluindo `referencias/jornada_visual_ashra.jpeg`.
>
> **Não comece criando o aplicativo inteiro imediatamente.** Primeiro:
> 1. Resuma o produto, os personagens e os requisitos críticos.
> 2. Examine o ambiente e os arquivos existentes sem apagar nada.
> 3. Proponha uma arquitetura mínima e uma sequência de tarefas.
> 4. Identifique riscos técnicos, especialmente suporte RTL para árabe, persistência local, conteúdo educacional e empacotamento Android.
> 5. Crie `README.md`, `PRODUCT.md` e `DESIGN.md` com decisões concretas e sem contradizer este briefing.
> 6. Apresente o plano e comece pelo primeiro fluxo vertical: onboarding → escolha de idioma → Home → uma lição → resultado com XP → progresso persistido.
>
> Use React, TypeScript e Vite, salvo se houver uma razão técnica concreta para outra opção. Mantenha a arquitetura simples, mobile-first, sem backend ou APIs pagas no MVP. Não adicione login, pagamentos, IA generativa, áudio funcional ou funcionalidades sociais nesta etapa.
>
> Implemente em pequenas etapas. Antes de terminar cada etapa, rode os testes e a compilação disponíveis, corrija erros e informe exatamente o que foi feito, os arquivos alterados, os comandos usados e como eu posso validar. Não declare um teste aprovado se não o executou. Se faltar informação ou um asset, faça uma suposição conservadora, documente-a e continue sem bloquear o trabalho.
>
> Preserve a identidade visual e os papéis oficiais dos personagens. Não copie pixel a pixel a referência nem reproduza erros textuais que apareçam nela. A prioridade é um MVP funcional, visualmente consistente e testável por um fundador iniciante.
