import { describe, expect, it } from 'vitest';
import { lessons } from '../content/lessons';
import { buildExercises, isBuildCorrect, phraseText } from './exercises';

describe('buildExercises', () => {
  for (const [native, target] of [['pt-BR', 'ar-EG'], ['ar-EG', 'pt-BR']] as const) {
    describe(`${native} → ${target}`, () => {
      for (const lesson of lessons) {
        it(`${lesson.id}: correct option is the target-language phrase`, () => {
          const ex = buildExercises(lesson, native, target);
          const choices = ex.filter((e) => e.kind === 'choice');
          expect(choices).toHaveLength(lesson.phrases.length);
          for (const c of choices) {
            if (c.kind !== 'choice') continue;
            const phrase = lesson.phrases.find((p) => p.id === c.phraseId)!;
            expect(c.options[c.correctIndex].text).toBe(phraseText(phrase, target));
            expect(c.source.text).toBe(phraseText(phrase, native));
            expect(new Set(c.options.map((o) => o.text)).size).toBe(c.options.length);
            expect(c.options.every((o) => o.lang === target)).toBe(true);
            expect(c.options.every((o) => (target === 'ar-EG') === Boolean(o.translit))).toBe(true);
          }
        });
        it(`${lesson.id}: build exercises are solvable`, () => {
          for (const e of buildExercises(lesson, native, target)) {
            if (e.kind !== 'build') continue;
            expect(isBuildCorrect(e, e.answer)).toBe(true);
            expect(isBuildCorrect(e, [...e.answer].reverse())).toBe(false);
            for (const tok of e.answer) expect(e.bank).toContain(tok);
          }
        });
      }
    });
  }

  it('is deterministic for the same seed', () => {
    const a = buildExercises(lessons[0], 'pt-BR', 'ar-EG', 7);
    const b = buildExercises(lessons[0], 'pt-BR', 'ar-EG', 7);
    expect(a).toEqual(b);
  });
});
