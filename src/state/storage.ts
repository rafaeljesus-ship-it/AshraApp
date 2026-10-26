import { initialState } from '../domain/progress';
import { DAILY_GOALS, LANGS, otherLang } from '../domain/types';
import type { AppState } from '../domain/types';

export const STORAGE_KEY = 'ashra.state.v1';

/** Reads saved state defensively: corrupt or unavailable storage falls back to a fresh state. */
export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState();
    const data = JSON.parse(raw) as Partial<AppState>;
    if (!data || data.version !== 1) return initialState();
    const base = initialState();
    const native = LANGS.includes(data.native as never) ? data.native! : base.native;
    const target = LANGS.includes(data.target as never) && data.target !== native ? data.target! : otherLang(native);
    return {
      ...base,
      ...data,
      native,
      target,
      paths: typeof data.paths === 'object' && data.paths ? data.paths : {},
      streak: data.streak ?? base.streak,
      dailyGoal: DAILY_GOALS.includes(data.dailyGoal as never) ? data.dailyGoal! : base.dailyGoal,
      daily: data.daily && typeof data.daily.xp === 'number' ? data.daily : base.daily,
      sound: {
        effects: typeof data.sound?.effects === 'boolean' ? data.sound.effects : base.sound.effects,
        voice: typeof data.sound?.voice === 'boolean' ? data.sound.voice : base.sound.voice,
      },
      achievements: Array.isArray(data.achievements) ? data.achievements : [],
      processedAttempts: Array.isArray(data.processedAttempts) ? data.processedAttempts : [],
    };
  } catch {
    return initialState();
  }
}

export function saveState(state: AppState): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}
