import { allLessonIds, lessonById } from '../content/lessons';
import type { AppState, Lang, PathProgress } from './types';
import { pathKey } from './types';

export const XP_PER_CORRECT = 2;
export const XP_COMPLETION_BONUS = 10;
export const XP_REPLAY = 5;
const MAX_PROCESSED = 30;

export const initialState = (): AppState => ({
  version: 1,
  onboarded: false,
  name: '',
  native: 'pt-BR',
  target: 'ar-EG',
  paths: {},
  streak: { count: 0, lastDay: null },
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

export interface AchievementDef {
  id: string;
  title: Record<Lang, string>;
  icon: string;
  test: (s: AppState, ctx: { perfect: boolean }) => boolean;
}

const totalCompleted = (s: AppState) =>
  Object.values(s.paths).reduce((n, p) => n + Object.keys(p.completed).length, 0);
const totalXp = (s: AppState) => Object.values(s.paths).reduce((n, p) => n + p.xp, 0);

export const achievementDefs: AchievementDef[] = [
  { id: 'first-lesson', icon: '🌟', title: { 'pt-BR': 'Primeira lição', 'ar-EG': 'أول درس' }, test: (s) => totalCompleted(s) >= 1 },
  { id: 'perfect', icon: '🎯', title: { 'pt-BR': 'Lição perfeita', 'ar-EG': 'درس بلا أخطاء' }, test: (_s, c) => c.perfect },
  { id: 'streak-3', icon: '🔥', title: { 'pt-BR': '3 dias seguidos', 'ar-EG': '٣ أيام متتالية' }, test: (s) => s.streak.count >= 3 },
  { id: 'xp-100', icon: '⭐', title: { 'pt-BR': '100 XP', 'ar-EG': '١٠٠ نقطة' }, test: (s) => totalXp(s) >= 100 },
];

export interface CompletionInput {
  attemptId: string;
  lessonId: string;
  /** Exercises answered correctly on the first try. */
  correct: number;
  total: number;
  today: string;
}

export interface CompletionResult {
  state: AppState;
  xpGained: number;
  newAchievements: string[];
  streakCount: number;
  duplicate: boolean;
}

/** Pure reducer step. Rewards are granted at most once per attemptId. */
export function applyCompletion(s: AppState, input: CompletionInput): CompletionResult {
  if (s.processedAttempts.includes(input.attemptId) || !lessonById(input.lessonId)) {
    return { state: s, xpGained: 0, newAchievements: [], streakCount: s.streak.count, duplicate: true };
  }
  const key = pathKey(s.native, s.target);
  const path = getPath(s);
  const prev = path.completed[input.lessonId];
  const xpGained = prev
    ? XP_REPLAY
    : input.correct * XP_PER_CORRECT + XP_COMPLETION_BONUS;

  let streak = s.streak;
  if (streak.lastDay !== input.today) {
    const continues = streak.lastDay !== null && daysBetween(streak.lastDay, input.today) === 1;
    streak = { count: continues ? streak.count + 1 : 1, lastDay: input.today };
  }

  const next: AppState = {
    ...s,
    streak,
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

  const perfect = input.correct === input.total;
  const earned = achievementDefs
    .filter((a) => !next.achievements.includes(a.id) && a.test(next, { perfect }))
    .map((a) => a.id);
  next.achievements = [...next.achievements, ...earned];

  return { state: next, xpGained, newAchievements: earned, streakCount: streak.count, duplicate: false };
}
