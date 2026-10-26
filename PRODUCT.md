# ASHRA — Produto

**Tagline:** Um novo idioma. Um novo mundo.

Aplicativo gamificado de aprendizagem recíproca entre falantes de **português brasileiro** e **árabe egípcio coloquial**. Ensina idioma e contexto cultural com trilhas, exercícios, personagens, conquistas e pequenas vitórias diárias.

## Dois caminhos equivalentes

1. Português brasileiro → aprende árabe egípcio.
2. Árabe → aprende português brasileiro.

O idioma nativo define a **interface, a direção de escrita (RTL/LTR), as instruções e as explicações**; o idioma-alvo define o que é praticado. As frases são armazenadas uma vez e usadas nos dois sentidos.

## Elenco oficial (não contradizer)

| Personagem | Papel |
|---|---|
| **Rafa** | Brasileiro negro, dreads curtos. Aprende árabe egípcio; perspectiva de quem começa. |
| **Ali** | Egípcio, careca e barbudo. Aprende português brasileiro; expressões, gírias e humor respeitoso. |
| **Claudia** | Brasileira, cabelos curtos e encaracolados. Guia do Brasil (cultura, expressões, música, gastronomia, costumes). |
| **Fadia** | Guia cultural egípcia. Apresenta o Egito, o árabe egípcio e os costumes. |
| **Mohamed** | Guia de gramática, estrutura de frases e expressões. |
| **Nour** | Camelo mascote, detalhes verde-esmeralda e dourados. Acompanha XP, desafios e conquistas. |

Dicas culturais: aprender árabe → Fadia (Egito); aprender português → Claudia (Brasil). Evitar estereótipos nacionais, religiosos ou linguísticos.

## Escopo desta versão (MVP — fluxo vertical)

Incluído e funcionando: onboarding, escolha de idiomas, Home (Nur (pontos), nível, sequência, meta diária, lição recomendada, trilhas), lista de lições com estados bloqueada/disponível/concluída, lição completa (múltipla escolha + montagem de frase, feedback imediato, dica cultural, resultado com XP), conquistas básicas, perfil, persistência local, conteúdo em arquivos de dados, testes.

Fora do escopo (não simulado): login, nuvem, pagamentos, IA generativa, reconhecimento de fala/pronúncia, áudio gravado por nativos, social, ranking, push. Incluído: voz do aparelho (síntese) e sons do jogo, com ajustes no Perfil.

## Critérios de aceitação do primeiro fluxo

| Critério | Situação |
|---|---|
| App inicia e adapta-se a viewport móvel | Atendido (build + screenshots em 390 px) |
| Escolha de idioma nativo e alvo | Atendido (`Onboarding`) |
| Home reflete a escolha | Atendido (interface, direção e caminho) |
| Iniciar e completar uma lição | Atendido (teste de fluxo) |
| Feedback certo/errado | Atendido (testes) |
| XP calculado uma única vez por conclusão | Atendido (`attemptId`, testes) |
| Progresso persiste após recarregar | Atendido (testes + `localStorage`) |
| Interface árabe com RTL | Atendido (`dir="rtl"`, CSS lógico) — falta revisão por falante nativo |
| Estados vazios/erro | Parcial: lição inexistente, storage indisponível/corrompido, trilhas "em breve" |
| Testes e build passam | Ver README |
| README reproduzível | Atendido |

## Riscos

1. **Qualidade do conteúdo**: traduções/transliterações demonstrativas; precisam de revisão nativa antes de qualquer lançamento.
2. **RTL**: o layout foi construído com propriedades lógicas, mas precisa de teste visual em mais telas/dispositivos.
3. **Persistência**: `localStorage` é simples, porém pode ser limpo pelo sistema/navegador; em Capacitor considerar `@capacitor/preferences`.
4. **Android**: não testado em dispositivo; Capacitor planejado (ver README).
5. **Assets dos personagens**: dependem de arquivos finais do fundador.

## Pontos (Nur) e meta diária

Os pontos se chamam **Nur** (نور, "luz"), para ter identidade própria. Regras e números em `README.md`. Meta diária e bônus (lição perfeita e combo) existem; ligas, vidas e ranking continuam fora do escopo.
