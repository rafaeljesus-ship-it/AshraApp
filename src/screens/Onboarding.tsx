import { useState } from 'react';
import { characters } from '../content/characters';
import { LANGS } from '../domain/types';
import type { Lang } from '../domain/types';
import { useApp } from '../state/AppContext';
import { Avatar } from '../ui/Avatar';
import { Logo } from '../ui/Logo';
import { Txt } from '../ui/Txt';
import { groupSplash, langScene, nourPose } from '../ui/art';

type Step = 'welcome' | 'native' | 'target' | 'guides' | 'name';
const STEPS: Step[] = ['welcome', 'native', 'target', 'guides', 'name'];

export function Onboarding() {
  const { state, s, setNative, setTarget, finishOnboarding } = useApp();
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const targets = LANGS.filter((l) => l !== state.native);
  const idx = STEPS.indexOf(step);
  const back = () => setStep(STEPS[idx - 1]);

  if (step === 'welcome') {
    return (
      <main className="screen onboarding welcome-screen">
        <div className="splash">
          <img className="splash-art" src={groupSplash} alt="" />
          <div className="splash-brand">
            <Logo size={84} />
            <h1 className="brand">ASHRA</h1>
            <p className="tagline">{s.tagline}</p>
          </div>
        </div>
        <button className="btn primary splash-cta" onClick={() => setStep('native')}>{s.start}</button>
      </main>
    );
  }

  return (
    <main className="screen onboarding">
      <header className="ob-head">
        <button className="icon-btn" aria-label={s.back} onClick={back}>
          <span className="flip-rtl" aria-hidden="true">←</span>
        </button>
        <div className="steps" aria-hidden="true">
          {STEPS.slice(1).map((st) => <span key={st} className={st === step ? 'on' : STEPS.indexOf(st) < idx ? 'done' : ''} />)}
        </div>
      </header>

      {step === 'native' && (
        <section className="stack">
          <h1>{s.iSpeak}</h1>
          <p className="muted">{s.iSpeakHint}</p>
          {LANGS.map((l) => (
            <LangCard
              key={l}
              lang={l}
              selected={state.native === l}
              caption={s.iSpeakShort}
              label={<Txt lang={l}>{l === 'pt-BR' ? 'Português brasileiro' : 'العربية'}</Txt>}
              onPick={() => { setNative(l); setStep('target'); }}
            />
          ))}
          <NourBubble text={s.twoWorlds} />
        </section>
      )}

      {step === 'target' && (
        <section className="stack">
          <h1>{s.chooseTarget}</h1>
          <p className="muted">{s.chooseTargetHint}</p>
          {targets.map((l: Lang) => (
            <LangCard
              key={l}
              lang={l}
              selected={state.target === l}
              caption={s.wantToLearnCaption}
              label={s.langName(l)}
              onPick={() => { setTarget(l); setStep('guides'); }}
            />
          ))}
          <NourBubble text={s.twoWorlds} />
        </section>
      )}

      {step === 'guides' && (
        <section className="stack">
          <h1 className="center-title">{s.guides}</h1>
          <p className="muted center-title">{s.guidesHint}</p>
          <ul className="guide-list">
            {characters.map((c) => (
              <li key={c.id} className="guide-row">
                <Avatar id={c.id} size={64} />
                <span className="grow">
                  <strong>{c.name} <span aria-hidden="true">{c.flag}</span></strong>
                  <span className="muted small block">{c.role[state.native]}</span>
                </span>
              </li>
            ))}
          </ul>
          <button className="btn primary" onClick={() => setStep('name')}>{s.guidesContinue}</button>
        </section>
      )}

      {step === 'name' && (
        <form className="stack" onSubmit={(e) => { e.preventDefault(); finishOnboarding(name); }}>
          <h1>{s.yourName}</h1>
          <p className="muted">{s.yourNameHint}</p>
          <label className="visually-hidden" htmlFor="name">{s.yourName}</label>
          <input
            id="name"
            className="input"
            value={name}
            maxLength={24}
            placeholder={s.namePlaceholder}
            onChange={(e) => setName(e.target.value)}
            autoComplete="given-name"
          />
          <button type="submit" className="btn primary">{s.start}</button>
        </form>
      )}
    </main>
  );
}

function NourBubble({ text }: { text: string }) {
  return (
    <div className="nour-bubble" aria-hidden="true">
      <img className="nour-pose small" src={nourPose('wave')} alt="" />
      <span className="bubble">{text} ✨</span>
    </div>
  );
}

function LangCard({ lang, selected, caption, label, onPick }: {
  lang: Lang;
  selected: boolean;
  caption: string;
  label: React.ReactNode;
  onPick: () => void;
}) {
  return (
    <button className={`scene-card ${selected ? 'selected' : ''}`} onClick={onPick} data-lang={lang}>
      <img src={langScene[lang]} alt="" />
      <span className="scene-caption">
        <span className="grow">
          <span className="muted small block">{caption}</span>
          <strong>{label}</strong>
        </span>
        <span className="go flip-rtl" aria-hidden="true">→</span>
      </span>
    </button>
  );
}
