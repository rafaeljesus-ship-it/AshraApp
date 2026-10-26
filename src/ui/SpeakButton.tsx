import { useApp } from '../state/AppContext';
import type { Lang } from '../domain/types';

function SpeakerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z" fill="currentColor" />
      <path d="M15 9a4 4 0 0 1 0 6M17.5 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Round speaker button. `onSay` is the audio helper from useAudio. */
export function SpeakButton({ text, lang, onSay, slow = false, label }: {
  text: string;
  lang: Lang;
  onSay: (text: string, lang: Lang, slow?: boolean) => void;
  slow?: boolean;
  label?: string;
}) {
  const { s } = useApp();
  return (
    <button
      type="button"
      className={`speak-btn ${slow ? 'slow' : ''}`}
      aria-label={s.listenAria(label ?? text)}
      onClick={(e) => { e.stopPropagation(); onSay(text, lang, slow); }}
    >
      {slow ? <span aria-hidden="true">🐢</span> : <SpeakerIcon />}
      {slow && <span className="speak-label">{s.listenSlow}</span>}
    </button>
  );
}
