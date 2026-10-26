export type Sfx = 'tap' | 'correct' | 'wrong' | 'win' | 'goal';

type Note = { f: number; t: number; d: number; type?: OscillatorType; g?: number };

const PATTERNS: Record<Sfx, Note[]> = {
  tap: [{ f: 660, t: 0, d: 0.05, type: 'sine', g: 0.08 }],
  correct: [{ f: 523.25, t: 0, d: 0.12 }, { f: 659.25, t: 0.1, d: 0.12 }, { f: 783.99, t: 0.2, d: 0.22 }],
  wrong: [{ f: 220, t: 0, d: 0.18, type: 'triangle', g: 0.14 }, { f: 174.61, t: 0.14, d: 0.24, type: 'triangle', g: 0.14 }],
  win: [
    { f: 523.25, t: 0, d: 0.14 }, { f: 659.25, t: 0.13, d: 0.14 }, { f: 783.99, t: 0.26, d: 0.14 },
    { f: 1046.5, t: 0.39, d: 0.4 }, { f: 783.99, t: 0.39, d: 0.4, g: 0.06 },
  ],
  goal: [{ f: 880, t: 0, d: 0.1 }, { f: 1108.73, t: 0.09, d: 0.1 }, { f: 1318.51, t: 0.18, d: 0.1 }, { f: 1760, t: 0.27, d: 0.3 }],
};

let ctx: AudioContext | null = null;

function context(): AudioContext | null {
  try {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx ??= new Ctor();
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

/** Short synthesized game sounds (no audio files). Silent where Web Audio is unavailable. */
export function playSfx(name: Sfx) {
  const c = context();
  if (!c) return;
  try {
    const start = c.currentTime + 0.01;
    for (const n of PATTERNS[name]) {
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = n.type ?? 'sine';
      osc.frequency.value = n.f;
      const peak = n.g ?? 0.16;
      gain.gain.setValueAtTime(0.0001, start + n.t);
      gain.gain.exponentialRampToValueAtTime(peak, start + n.t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + n.t + n.d);
      osc.connect(gain).connect(c.destination);
      osc.start(start + n.t);
      osc.stop(start + n.t + n.d + 0.02);
    }
  } catch { /* ignore */ }
}
