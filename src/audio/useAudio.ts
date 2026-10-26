import { useCallback, useState } from 'react';
import type { Lang } from '../domain/types';
import { useApp } from '../state/AppContext';
import { playSfx } from './sfx';
import type { Sfx } from './sfx';
import { playClip } from './clips';
import { describeVoices, detectPlatform, speak } from './voice';
import type { VoiceStatus } from './voice';

/** Sound + voice helpers that respect the saved settings. */
export function useAudio() {
  const { state, s } = useApp();
  const [problem, setProblem] = useState<string | null>(null);

  const report = useCallback((status: VoiceStatus, lang: Lang) => {
    if (status === 'ok') return setProblem(null);
    if (status === 'unsupported') return setProblem(s.voiceUnsupported);
    const found = describeVoices();
    setProblem([s.voiceMissing(s.langNameShort(lang)), s.voiceHelp[detectPlatform()], found ? s.voicesFound(found) : ''].filter(Boolean).join(' '));
  }, [s]);

  /** Explicit listen request (button): always tries to speak. */
  const say = useCallback(async (text: string, lang: Lang, slow = false) => {
    if (await playClip(text, lang, slow)) { setProblem(null); return; }
    report(await speak(text, lang, { slow }), lang);
  }, [report]);

  /** Automatic speech after answers: only when the setting is on. */
  const autoSay = useCallback((text: string, lang: Lang) => {
    if (state.sound.voice) setTimeout(() => { void say(text, lang); }, 300);
  }, [state.sound.voice, say]);

  const play = useCallback((name: Sfx) => { if (state.sound.effects) playSfx(name); }, [state.sound.effects]);

  return { say, autoSay, play, problem, clearProblem: () => setProblem(null) };
}
