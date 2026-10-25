import { allLessonIds, lessonById } from '../content/lessons';
import type { AppState, Lang, PathProgress } from './types';
import { DEFAULT_DAILY_GOAL, pathKey } from './types';

export const XP_PER_CORRECT = 2;
export const XP_COMPLETION_BONUS = 10;
export const XP_REPLAY = 5;
/** Bonus for a lesson with every answer right on the first try (first completion only). */
export const XP_PERFECT_BONUS = 5;
/** Combo bonus by longest run of consecutive correct answers (first completion only). */
export const COMBO_BONUSES: { min: number; bonus: number }[] = [
  { min: 5, bonus: 4 },
  { min: 3, bonus: 2 },
];
export const comboBonus = (bestCombo: number) => COMBO_BONUSES.find((c) => bestCombo >= c.min)?.bonus ?? 0;
const MAX_PROCESSED = 30;

export const initialState = (): AppState => ({
  version: 1,
  onboarded: false,
  name: '',
  native: 'pt-BR',
  target: 'ar-EG',
  paths: {},
  streak: { count: 0, lastDay: null },
  dailyGoal: DEFAULT_DAILY_GOAL,
  daily: { day: null, xp: 0 },
  achievements: [],
  processedAttempts: [],
});

const emptyPath = (): PathProgress => ({ xp: 0, completed: {} });

export const getPath = (s: AppState, native = s.native, target = s.target): PathProgress =>
  s.paths[pathKey(native, target)] ?? emptyPath();

/** XP required to reach level n (level 1 = 0, 2 = 100, 3 = 300, 4 = 600, ...). */
export const xpForLevel = (level: number) => 50 * level * (level - 1);

export function levelInfo(xp: number) {
  let level = 1;
  while (xp >= xpForLevel(level + 1)) level++;
  const floor = xpForLevel(level);
  const next = xpForLevel(level + 1);
  return { level, floor, next, into: xp - floor, span: next - floor };
}

export type LessonStatus = 'locked' | 'available' | 'completed';

export function lessonStatus(path: PathProgress, lessonId: string): LessonStatus {
  if (path.completed[lessonId]) return 'completed';
  const ids = allLessonIds();
  const idx = ids.indexOf(lessonId);
  if (idx <= 0) return 'available';
  return path.completed[ids[idx - 1]] ? 'available' : 'locked';
}

export function recommendedLessonId(path: PathProgress): string | null {
  return allLessonIds().find((id) => lessonStatus(path, id) === 'available') ?? null;
}

export const dayKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const daysBetween = (a: string, b: string) => {
  const [ay, am, ad] = a.split('-').map(Number);
  const [by, bm, bd] = b.split('-').map(Number);
  return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / 86_400_000);
};

/** Streak shown on screen: a streak older than yesterday is already broken. */
export function currentStreak(s: AppState, today: string): number {
  const { count, lastDay } = s.streak;
  if (!lastDay) return 0;
  return daysBetween(lastDay, today) <= 1 ? count : 0;
}

/** Nur earned today and the goal, for the Home progress bar. */
export function dailyProgress(s: AppState, today: string) {
  const xp = s.daily.day === today ? s.daily.xp : 0;
  return { xp, goal: s.dailyGoal, reached: xp >= s.dailyGoal };
}

export interface AchievementDef {
  id: string;
  title: Record<Lang, string>;
  icon: string;
  test: (s: AppState, ctx: { perfect: boolean; goalReached: boolean }) => boolean;
}

const totalCompleted = (s: AppState) =>
  Object.values(s.paths).reduce((n, p) => n + Object.keys(p.completed).length, 0);
const totalXp = (s: AppState) => Object.values(s.paths).reduce((n, p) => n + p.xp, 0);

export const achievementDefs: AchievementDef[] = [
  { id: 'first-lesson', icon: 'book', title: { 'pt-BR': 'Primeira lição', 'ar-EG': 'أول درس' }, test: (s) => totalCompleted(s) >= 1 },
  { id: 'perfect', icon: 'star', title: { 'pt-BR': 'Lição perfeita', 'ar-EG': 'درس بلا أخطاء' }, test: (_s, c) => c.perfect },
  { id: 'streak-3', icon: 'flame', title: { 'pt-BR': '3 dias seguidos', 'ar-EG': '٣ أيام متتالية' }, test: (s) => s.streak.count >= 3 },
  { id: 'xp-100', icon: 'trophy', title: { 'pt-BR': '100 Nur', 'ar-EG': '١٠٠ نور' }, test: (s) => totalXp(s) >= 100 },
  { id: 'daily-goal', icon: 'compass', title: { 'pt-BR': 'Meta do dia', 'ar-EG': 'هدف اليوم' }, test: (_s, c) => c.goalReached },
];

export interface CompletionInput {
  attemptId: string;
  lessonId: string;
  /** Exercises answered correctly on the first try. */
  correct: number;
  total: number;
  today: string;
  /** Longest run of consecutive first-try correct answers in this attempt. */
  bestCombo?: number;
}

export interface CompletionResult {
  state: AppState;
  xpGained: number;
  newAchievements: string[];
  streakCount: number;
  duplicate: boolean;
  breakdown: { answers: number; completion: number; perfect: number; combo: number; replay: number };
  goalReachedNow: boolean;
  daily: { xp: number; goal: number };
}

/** Pure reducer step. Rewards are granted at most once per attemptId. */
export function applyCompletion(s: AppState, input: CompletionInput): CompletionResult {
  if (s.processedAttempts.includes(input.attemptId) || !lessonById(input.lessonId)) {
    return {
      state: s, xpGained: 0, newAchievements: [], streakCount: s.streak.count, duplicate: true,
      breakdown: { answers: 0, completion: 0, perfect: 0, combo: 0, replay: 0 },
      goalReachedNow: false, daily: dailyProgress(s, input.today),
    };
  }
  const key = pathKey(s.native, s.target);
  const path = getPath(s);
  const prev = path.completed[input.lessonId];
  const perfect = input.correct === input.total;
  const breakdown = prev
    ? { answers: 0, completion: 0, perfect: 0, combo: 0, replay: XP_REPLAY }
    : {
        answers: input.correct * XP_PER_CORRECT,
        completion: XP_COMPLETION_BONUS,
        perfect: perfect ? XP_PERFECT_BONUS : 0,
        combo: comboBonus(input.bestCombo ?? 0),
        replay: 0,
      };
  const xpGained = breakdown.answers + breakdown.completion + breakdown.perfect + breakdown.combo + breakdown.replay;
  const before = dailyProgress(s, input.today);
  const dailyXp = before.xp + xpGained;
  const goalReachedNow = !before.reached && dailyXp >= s.dailyGoal;

  let streak = s.streak;
  if (streak.lastDay !== input.today) {
    const continues = streak.lastDay !== null && daysBetween(streak.lastDay, input.today) === 1;
    streak = { count: continues ? streak.count + 1 : 1, lastDay: input.today };
  }

  const next: AppState = {
    ...s,
    streak,
    daily: { day: input.today, xp: dailyXp },
    paths: {
      ...s.paths,
      [key]: {
        xp: path.xp + xpGained,
        completed: {
          ...path.completed,
          [input.lessonId]: {
            bestCorrect: Math.max(prev?.bestCorrect ?? 0, input.correct),
            total: input.total,
            times: (prev?.times ?? 0) + 1,
          },
        },
      },
    },
    processedAttempts: [...s.processedAttempts, input.attemptId].slice(-MAX_PROCESSED),
  };

  const earned = achievementDefs
    .filter((a) => !next.achievements.includes(a.id) && a.test(next, { perfect, goalReached: goalReachedNow }))
    .map((a) => a.id);
  next.achievements = [...next.achievements, ...earned];

  return {
    state: next, xpGained, newAchievements: earned, streakCount: streak.count, duplicate: false,
    breakdown, goalReachedNow, daily: { xp: dailyXp, goal: s.dailyGoal },
  };
}
