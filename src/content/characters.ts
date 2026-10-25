import type { CharacterId, Lang } from '../domain/types';

export interface Character {
  id: CharacterId;
  name: string;
  /** Country flag shown next to the name (emoji). */
  flag: '🇧🇷' | '🇪🇬';
  color: string;
  /** Role description in the UI language. */
  role: Record<Lang, string>;
  /** Single glyph used by the placeholder avatar. */
  glyph: string;
}

/**
 * Official cast (see MASTER_BRIEF §3). Visual traits live in DESIGN.md.
 * To use final art, drop `public/characters/<id>.png` — Avatar picks it up automatically.
 */
export const characters: Character[] = [
  { id: 'fadia', name: 'Fadia', flag: '🇪🇬', color: '#d98a3d', glyph: 'F', role: { 'pt-BR': 'Sua guia cultural. Apresenta o Egito, o árabe egípcio e os costumes locais.', 'ar-EG': 'مرشدتك الثقافية. تعرّفك على مصر واللهجة المصرية والعادات.' } },
  { id: 'ali', name: 'Ali', flag: '🇪🇬', color: '#8a5a3c', glyph: 'A', role: { 'pt-BR': 'Egípcio que aprende português brasileiro. Troca expressões do dia a dia com humor.', 'ar-EG': 'مصري يتعلّم البرتغالية البرازيلية. يتبادل معك تعبيرات يومية بخفة ظل.' } },
  { id: 'mohamed', name: 'Mohamed', flag: '🇪🇬', color: '#3b6fb6', glyph: 'M', role: { 'pt-BR': 'Guia de gramática: estrutura das frases e expressões, de forma simples e prática.', 'ar-EG': 'مرشد القواعد: بناء الجمل والتعبيرات بشكل بسيط وعملي.' } },
  { id: 'claudia', name: 'Claudia', flag: '🇧🇷', color: '#c0507a', glyph: 'C', role: { 'pt-BR': 'Guia do Brasil: cultura, expressões, música, gastronomia e costumes.', 'ar-EG': 'مرشدة البرازيل: الثقافة والتعبيرات والموسيقى والطعام والعادات.' } },
  { id: 'rafa', name: 'Rafa', flag: '🇧🇷', color: '#2f7d5b', glyph: 'R', role: { 'pt-BR': 'Brasileiro que está começando no árabe egípcio. Faz as mesmas perguntas que você.', 'ar-EG': 'برازيلي يبدأ تعلّم العربية المصرية. يسأل نفس أسئلتك.' } },
  { id: 'nour', name: 'Nour', flag: '🇪🇬', color: '#e0b84c', glyph: '🐪', role: { 'pt-BR': 'Nosso camelo mascote. Comemora suas conquistas e te motiva sempre.', 'ar-EG': 'جملنا التميمة. يحتفل بإنجازاتك ويشجعك دائماً.' } },
];

export const characterById = (id: CharacterId) => characters.find((c) => c.id === id)!;
