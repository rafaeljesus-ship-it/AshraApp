/** Languages supported by the MVP. `ar-EG` = Egyptian colloquial Arabic. */
export type Lang = 'pt-BR' | 'ar-EG';

export const LANGS: Lang[] = ['pt-BR', 'ar-EG'];
export const dirOf = (lang: Lang): 'ltr' | 'rtl' => (lang === 'ar-EG' ? 'rtl' : 'ltr');
export const otherLang = (lang: Lang): Lang => (lang === 'pt-BR' ? 'ar-EG' : 'pt-BR');

export type CharacterId = 'rafa' | 'ali' | 'claudia' | 'fadia' | 'mohamed' | 'nour';

/** One phrase, stored once and used in both learning directions. */
export interface Phrase {
  id: string;
  pt: string;
  ar: string;
  /** Latin transliteration of the Egyptian Arabic. Approximate, NOT a perfect pronunciation. */
  arTranslit: string;
  /** Short explanation, written in the learner's native language. Keyed by TARGET language. */
  note?: Record<Lang, string>;
}

export interface CultureTip {
  guide: CharacterId;
  /** Keyed by TARGET language; the text itself is in the learner's native language. */
  text: Record<Lang, string>;
}

export interface Lesson {
  id: string;
  trackId: string;
  title: Record<Lang, string>;
  minutes: number;
  /** Ordered: lesson N unlocks after lesson N-1 is completed. */
  phrases: Phrase[];
  tip: CultureTip;
  /** Demonstration content; must be reviewed by competent speakers before public launch. */
  needsReview: true;
}

export interface Track {
  id: string;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  color: 'green' | 'coral' | 'blue';
  lessonIds: string[];
  /** Tracks without lessons are shown honestly as "coming soon". */
  comingSoon?: boolean;
}

export type ExerciseKind = 'choice' | 'build';

export interface ChoiceExercise {
  kind: 'choice';
  id: string;
  phraseId: string;
  /** Text shown as the question stem (in the native language). */
  promptText: string;
  /** The phrase to translate (shown in native language). */
  source: { text: string; lang: Lang };
  options: ChoiceOption[];
  correctIndex: number;
}

export interface ChoiceOption {
  text: string;
  lang: Lang;
  translit?: string;
}

export interface BuildExercise {
  kind: 'build';
  id: string;
  phraseId: string;
  source: { text: string; lang: Lang };
  /** Shuffled token bank (correct tokens + distractors). */
  bank: string[];
  answer: string[];
  targetLang: Lang;
}

export type Exercise = ChoiceExercise | BuildExercise;

export interface PathProgress {
  xp: number;
  /** lessonId -> best number of correct-first-try answers and completion count. */
  completed: Record<string, { bestCorrect: number; total: number; times: number }>;
}

export interface AppState {
  version: 1;
  onboarded: boolean;
  name: string;
  native: Lang;
  target: Lang;
  /** key = `${native}>${target}` */
  paths: Record<string, PathProgress>;
  streak: { count: number; lastDay: string | null };
  achievements: string[];
  /** Attempt ids already rewarded (capped) so XP is granted once per completion. */
  processedAttempts: string[];
}

export const pathKey = (native: Lang, target: Lang) => `${native}>${target}`;
