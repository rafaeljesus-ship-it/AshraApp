import type { Lang } from '../domain/types';

export type VoiceStatus = 'ok' | 'unsupported' | 'no-voice';

const norm = (l: string) => l.replace('_', '-').toLowerCase();

/** Preferred voice languages per app language, best first. */
const PREFERRED: Record<Lang, string[]> = {
  'ar-EG': ['ar-eg', 'ar-sa', 'ar'],
  'pt-BR': ['pt-br', 'pt'],
};

/** Picks the best installed voice for a language, or undefined when none speaks it. */
export function pickVoice<T extends { lang: string }>(voices: readonly T[], lang: Lang): T | undefined {
  const prefix = lang === 'ar-EG' ? 'ar' : 'pt';
  const candidates = voices.filter((v) => {
    const l = norm(v.lang);
    return l === prefix || l.startsWith(`${prefix}-`);
  });
  for (const want of PREFERRED[lang]) {
    const hit = candidates.find((v) => norm(v.lang) === want);
    if (hit) return hit;
  }
  return candidates[0];
}

export const speechSupported = () =>
  typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';

/** Voices load asynchronously in some browsers; wait briefly for them. */
function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  const synth = window.speechSynthesis;
  const now = synth.getVoices();
  if (now.length) return Promise.resolve(now);
  return new Promise((resolve) => {
    const done = () => { synth.removeEventListener?.('voiceschanged', done); resolve(synth.getVoices()); };
    synth.addEventListener?.('voiceschanged', done);
    setTimeout(done, 800);
  });
}

export const SLOW_RATE = 0.55;
export const NORMAL_RATE = 0.85;

/** Speaks text with the device voice. Never throws; reports why it could not speak. */
export async function speak(text: string, lang: Lang, opts: { slow?: boolean } = {}): Promise<VoiceStatus> {
  try {
    if (!speechSupported()) return 'unsupported';
    const voice = pickVoice(await loadVoices(), lang);
    if (!voice) return 'no-voice';
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.voice = voice;
    u.lang = voice.lang;
    u.rate = opts.slow ? SLOW_RATE : NORMAL_RATE;
    synth.speak(u);
    return 'ok';
  } catch {
    return 'unsupported';
  }
}

/** Short description of the installed voices, for the help text ("3 voices: en-US, pt-BR, …"). */
export function describeVoices(): string {
  try {
    if (!speechSupported()) return '';
    const langs = [...new Set(window.speechSynthesis.getVoices().map((v) => v.lang))];
    return langs.length ? langs.slice(0, 8).join(', ') : '';
  } catch { return ''; }
}

export type Platform = 'ios' | 'android' | 'desktop';
export function detectPlatform(ua = typeof navigator === 'undefined' ? '' : navigator.userAgent): Platform {
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'desktop';
}

export function stopSpeaking() {
  try { if (speechSupported()) window.speechSynthesis.cancel(); } catch { /* ignore */ }
}
