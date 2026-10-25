import { describe, expect, it } from 'vitest';
import {
  applyCompletion, currentStreak, initialState, getPath, levelInfo, lessonStatus, recommendedLessonId,
  XP_COMPLETION_BONUS, XP_PER_CORRECT, XP_REPLAY, XP_PERFECT_BONUS, comboBonus, dailyProgress,
} from './progress';

const done = (attemptId: string, today: string, lessonId = 'saudacoes', correct = 6) => ({ attemptId, lessonId, correct, total: 8, today });

describe('levels', () => {
  it('matches the reference (320 XP = level 3, next at 600)', () => {
    const l = levelInfo(320);
    expect(l.level).toBe(3);
    expect(l.next).toBe(600);
  });
  it('starts at level 1', () => expect(levelInfo(0).level).toBe(1));
});

describe('applyCompletion', () => {
  it('awards XP once per attempt id', () => {
    const a = applyCompletion(initialState(), done('a1', '2026-01-01'));
    expect(a.xpGained).toBe(6 * XP_PER_CORRECT + XP_COMPLETION_BONUS);
    const b = applyCompletion(a.state, done('a1', '2026-01-01'));
    expect(b.duplicate).toBe(true);
    expect(b.xpGained).toBe(0);
    expect(getPath(b.state).xp).toBe(a.xpGained);
  });

  it('gives a reduced reward on replays with a new attempt', () => {
    const a = applyCompletion(initialState(), done('a1', '2026-01-01'));
    const b = applyCompletion(a.state, done('a2', '2026-01-01'));
    expect(b.xpGained).toBe(XP_REPLAY);
    expect(getPath(b.state).completed.saudacoes.times).toBe(2);
  });

  it('keeps XP per learning path', () => {
    const s = initialState();
    const a = applyCompletion(s, done('a1', '2026-01-01')).state;
    expect(getPath(a, 'pt-BR', 'ar-EG').xp).toBeGreaterThan(0);
    expect(getPath(a, 'ar-EG', 'pt-BR').xp).toBe(0);
  });

  it('ignores unknown lessons', () => {
    const r = applyCompletion(initialState(), done('x', '2026-01-01', 'nope'));
    expect(r.duplicate).toBe(true);
  });

  it('grants achievements, with perfect lessons recognised', () => {
    const r = applyCompletion(initialState(), { ...done('a1', '2026-01-01'), correct: 8 });
    expect(r.newAchievements).toEqual(expect.arrayContaining(['first-lesson', 'perfect']));
  });
});

describe('streak', () => {
  it('counts consecutive days and resets after a gap', () => {
    let s = applyCompletion(initialState(), done('a', '2026-01-01')).state;
    expect(s.streak.count).toBe(1);
    s = applyCompletion(s, done('b', '2026-01-01')).state;
    expect(s.streak.count).toBe(1);
    s = applyCompletion(s, done('c', '2026-01-02')).state;
    expect(s.streak.count).toBe(2);
    s = applyCompletion(s, done('d', '2026-01-05')).state;
    expect(s.streak.count).toBe(1);
  });
  it('displays a broken streak as 0', () => {
    const s = applyCompletion(initialState(), done('a', '2026-01-01')).state;
    expect(currentStreak(s, '2026-01-02')).toBe(1);
    expect(currentStreak(s, '2026-01-03')).toBe(0);
  });
});

describe('lesson status', () => {
  it('unlocks lessons sequentially', () => {
    const s = initialState();
    expect(lessonStatus(getPath(s), 'saudacoes')).toBe('available');
    expect(lessonStatus(getPath(s), 'apresentacoes')).toBe('locked');
    expect(recommendedLessonId(getPath(s))).toBe('saudacoes');
    const after = applyCompletion(s, done('a', '2026-01-01')).state;
    expect(lessonStatus(getPath(after), 'saudacoes')).toBe('completed');
    expect(lessonStatus(getPath(after), 'apresentacoes')).toBe('available');
    expect(recommendedLessonId(getPath(after))).toBe('apresentacoes');
  });
});

describe('bonuses', () => {
  it('perfect lesson and combo add to the first completion only', () => {
    const a = applyCompletion(initialState(), { ...done('a1', '2026-01-01'), correct: 8, bestCombo: 8 });
    expect(a.breakdown).toMatchObject({ answers: 16, completion: XP_COMPLETION_BONUS, perfect: XP_PERFECT_BONUS, combo: comboBonus(8) });
    expect(a.xpGained).toBe(16 + XP_COMPLETION_BONUS + XP_PERFECT_BONUS + comboBonus(8));
    const b = applyCompletion(a.state, { ...done('a2', '2026-01-01'), correct: 8, bestCombo: 8 });
    expect(b.xpGained).toBe(XP_REPLAY);
    expect(b.breakdown.perfect).toBe(0);
  });
  it('combo tiers', () => {
    expect([0, 2, 3, 4, 5, 9].map(comboBonus)).toEqual([0, 0, 2, 2, 4, 4]);
  });
});

describe('daily goal', () => {
  it('accumulates per day across completions and flags the moment the goal is reached', () => {
    const s0 = initialState(); // goal 20
    const a = applyCompletion(s0, done('a1', '2026-01-01', 'saudacoes', 3)); // 6+10 = 16
    expect(a.goalReachedNow).toBe(false);
    expect(dailyProgress(a.state, '2026-01-01')).toEqual({ xp: 16, goal: 20, reached: false });
    const b = applyCompletion(a.state, done('a2', '2026-01-01')); // replay +5 -> 21
    expect(b.goalReachedNow).toBe(true);
    expect(b.newAchievements).toContain('daily-goal');
    const c = applyCompletion(b.state, done('a3', '2026-01-01'));
    expect(c.goalReachedNow).toBe(false);
  });
  it('resets on a new day', () => {
    const a = applyCompletion(initialState(), done('a1', '2026-01-01')).state;
    expect(dailyProgress(a, '2026-01-02').xp).toBe(0);
    const b = applyCompletion(a, done('a2', '2026-01-02'));
    expect(b.state.daily).toEqual({ day: '2026-01-02', xp: XP_REPLAY });
  });
});
