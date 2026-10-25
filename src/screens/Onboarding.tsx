import { useState } from 'react';
import { LANGS, otherLang } from '../domain/types';
import type { Lang } from '../domain/types';
import { useApp } from '../state/AppContext';
import { Logo } from '../ui/Logo';
import { Txt } from '../ui/Txt';
import { Avatar } from '../ui/Avatar';
import { Scene } from '../ui/Scene';

type Step = 'welcome' | 'native' | 'target' | 'name';

export function Onboarding() {
  const { state, s, setNative, setTarget, finishOnboarding } = useApp();
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const targets = LANGS.filter((l) => l !== state.native);

  const backTo: Partial<Record<Step, Step>> = { native: 'welcome', target: 'native', name: 'target' };

  return (
    <main className="screen onboarding">
      {backTo[step] && (
        <button className="icon-btn back" aria-label={s.back} onClick={() => setStep(backTo[step]!)}>
          <span className="flip-rtl" aria-hidden="true">←</span>
        </button>
      )}

      {step === 'welcome' && (
        <section className="center stack welcome">
          <div className="hero"><Scene name="egypt" className="hero-scene" /></div>
          <Logo size={96} />
          <h1 className="brand">ASHRA</h1>
          <p className="tagline">{s.tagline}</p>
          <Avatar id="nour" size={96} />
          <button className="btn primary" onClick={() => setStep('native')}>{s.start}</button>
        </section>
      )}

      {step === 'native' && (
        <section className="stack">
          <h1>{s.iSpeak}</h1>
          <p className="muted">{s.iSpeakHint}</p>
          {LANGS.map((l) => (
            <LangCard
              key={l}
              lang={l}
              selected={state.native === l}
              label={<Txt lang={l}>{l === 'pt-BR' ? 'Português brasileiro' : 'العربية'}</Txt>}
              onPick={() => { setNative(l); setStep('target'); }}
            />
          ))}
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
              label={s.wantToLearn(s.langName(l))}
              sub={<Txt lang={l}>{l === 'ar-EG' ? 'مصر • اللهجة المصرية' : 'Brasil • Português'}</Txt>}
              onPick={() => { setTarget(l); setStep('name'); }}
            />
          ))}
          <p className="muted small">{s.path(state.native, otherLang(state.native))}</p>
        </section>
      )}

      {step === 'name' && (
        <form
          className="stack"
          onSubmit={(e) => { e.preventDefault(); finishOnboarding(name); }}
        >
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

function LangCard({ lang, selected, label, sub, onPick }: {
  lang: Lang;
  selected: boolean;
  label: React.ReactNode;
  sub?: React.ReactNode;
  onPick: () => void;
}) {
  return (
    <button className={`card choice-card ${selected ? 'selected' : ''}`} onClick={onPick} data-lang={lang}>
      <span className="thumb wide"><Scene name={lang === 'ar-EG' ? 'egypt' : 'brazil'} /></span>
      <span className="grow">
        <strong>{label}</strong>
        {sub && <span className="muted block">{sub}</span>}
      </span>
      <span className="flip-rtl" aria-hidden="true">→</span>
    </button>
  );
}
