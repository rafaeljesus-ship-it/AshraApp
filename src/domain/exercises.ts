import type { BuildExercise, ChoiceExercise, Exercise, Lang, Lesson, Phrase } from './types';
import { hashString, mulberry32, shuffle } from './random';
import { t } from '../content/i18n';

const MAX_BUILD = 2;

/** The text of a phrase in a given language. */
export const phraseText = (p: Phrase, lang: Lang) => (lang === 'pt-BR' ? p.pt : p.ar);

const tokens = (text: string) => text.split(/\s+/).filter(Boolean);

/**
 * Builds the exercise list for a lesson from the same phrase data in either direction.
 * Deterministic for a given (lesson, native, target, seed).
 */
export function buildExercises(lesson: Lesson, native: Lang, target: Lang, seed = 1): Exercise[] {
  const rand = mulberry32(hashString(`${lesson.id}|${native}|${target}|${seed}`));
  const exercises: Exercise[] = [];

  const choices = lesson.phrases.map((phrase): ChoiceExercise => {
    const others = shuffle(
      lesson.phrases.filter((p) => p.id !== phrase.id),
      rand,
    ).slice(0, 3);
    const options = shuffle([phrase, ...others], rand);
    return {
      kind: 'choice',
      id: `${lesson.id}:choice:${phrase.id}`,
      phraseId: phrase.id,
      promptText: t(native).howToSay(phraseText(phrase, native), target),
      source: { text: phraseText(phrase, native), lang: native },
      options: options.map((p) => ({
        text: phraseText(p, target),
        lang: target,
        translit: target === 'ar-EG' ? p.arTranslit : undefined,
      })),
      correctIndex: options.findIndex((p) => p.id === phrase.id),
    };
  });

  const builds = lesson.phrases
    .filter((p) => tokens(phraseText(p, target)).length >= 2)
    .slice(0, MAX_BUILD)
    .map((phrase): BuildExercise => {
      const answer = tokens(phraseText(phrase, target));
      const distractors = shuffle(
        lesson.phrases
          .filter((p) => p.id !== phrase.id)
          .flatMap((p) => tokens(phraseText(p, target)))
          .filter((tok) => !answer.includes(tok)),
        rand,
      ).slice(0, 2);
      return {
        kind: 'build',
        id: `${lesson.id}:build:${phrase.id}`,
        phraseId: phrase.id,
        source: { text: phraseText(phrase, native), lang: native },
        bank: shuffle([...answer, ...distractors], rand),
        answer,
        targetLang: target,
      };
    });

  // Interleave: choices first, then builds sprinkled near the end.
  exercises.push(...choices.slice(0, Math.ceil(choices.length / 2)));
  if (builds[0]) exercises.push(builds[0]);
  exercises.push(...choices.slice(Math.ceil(choices.length / 2)));
  if (builds[1]) exercises.push(builds[1]);
  return exercises;
}

export const isBuildCorrect = (ex: BuildExercise, placed: string[]) =>
  placed.length === ex.answer.length && placed.every((tok, i) => tok === ex.answer[i]);
