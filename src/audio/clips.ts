import { lessons } from '../content/lessons';
import type { Lang } from '../domain/types';

/**
 * Recorded clips (native speakers or a studio TTS) live in public/audio/<lang>/<phraseId>.mp3 and are
 * listed in public/audio/manifest.json (e.g. ["ar-EG/bom-dia.mp3"]). Clips win over the device voice.
 */
export const AUDIO_BASE = '/audio';

let manifest: Promise<Set<string>> | null = null;
let current: HTMLAudioElement | null = null;

function loadManifest(): Promise<Set<string>> {
  manifest ??= fetch(`${AUDIO_BASE}/manifest.json`)
    .then((r) => (r.ok ? r.json() : []))
    .then((list: unknown) => new Set(Array.isArray(list) ? (list as string[]) : []))
    .catch(() => new Set<string>());
  return manifest;
}

/** Test hook: forget the cached manifest. */
export const resetClipManifest = () => { manifest = null; };

export function phraseIdFor(text: string, lang: Lang): string | undefined {
  for (const lesson of lessons) {
    for (const p of lesson.phrases) {
      if ((lang === 'ar-EG' ? p.ar : p.pt) === text) return p.id;
    }
  }
  return undefined;
}

export function stopClip() {
  try { current?.pause(); } catch { /* ignore */ }
  current = null;
}

/** Plays the recorded clip for a phrase if one exists. Resolves false when there is none (or it cannot play). */
export async function playClip(text: string, lang: Lang, slow = false): Promise<boolean> {
  try {
    const id = phraseIdFor(text, lang);
    if (!id) return false;
    const file = `${lang}/${id}.mp3`;
    if (!(await loadManifest()).has(file)) return false;
    stopClip();
    const audio = new Audio(`${AUDIO_BASE}/${file}`);
    audio.playbackRate = slow ? 0.7 : 1;
    (audio as HTMLAudioElement & { preservesPitch?: boolean }).preservesPitch = true;
    await audio.play();
    current = audio;
    return true;
  } catch {
    return false;
  }
}
