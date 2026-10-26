import { characters } from '../content/characters';
import { currentStreak, dayKey, getPath, levelInfo } from '../domain/progress';
import { DAILY_GOALS, LANGS, otherLang } from '../domain/types';
import { useApp } from '../state/AppContext';
import { Page } from '../ui/Chrome';
import { Txt } from '../ui/Txt';
import { Avatar } from '../ui/Avatar';
import { learnerFor } from '../ui/art';
import { useAudio } from '../audio/useAudio';
import { SpeakButton } from '../ui/SpeakButton';

export function Profile() {
  const { state, s, path, switchPath, reset, setDailyGoal, setSound } = useApp();
  const { say, play, problem } = useAudio();
  const sample = state.target === 'ar-EG' ? 'أهلاً وسهلاً' : 'Seja bem-vindo';
  const lv = levelInfo(path.xp);
  const streak = currentStreak(state, dayKey(new Date()));
  const done = Object.keys(path.completed).length;

  return (
    <Page title={s.profileTitle}>
      <div className="row">
        <Avatar id={learnerFor(state.native)} size={64} />
        <div className="grow">
          <h2>{state.name || s.defaultName}</h2>
          <p className="muted">{s.level} {lv.level}</p>
        </div>
      </div>

      <div className="card">
        <div className="row between"><strong className="nowrap">{s.level} {lv.level}</strong><span className="muted">{lv.into}/{lv.span} {s.xp}</span></div>
        <progress className="bar" max={lv.span} value={lv.into} aria-label={s.xp} />
      </div>

      <div className="stats">
        <div className="stat"><strong>{path.xp}</strong><span className="muted small">{s.totalXp}</span></div>
        <div className="stat"><strong>{done}</strong><span className="muted small">{s.lessonsDone}</span></div>
        <div className="stat"><strong>{state.achievements.length}</strong><span className="muted small">{s.achievements}</span></div>
        <div className="stat"><strong>{streak}</strong><span className="muted small">{s.days}</span></div>
      </div>

      <section className="stack">
        <h2>{s.dailyGoal}</h2>
        <p className="muted small">{s.dailyGoalHint}</p>
        <div className="seg row-seg" role="group" aria-label={s.dailyGoal}>
          {DAILY_GOALS.map((g) => (
            <button key={g} className={state.dailyGoal === g ? 'active' : ''} aria-pressed={state.dailyGoal === g} onClick={() => setDailyGoal(g)}>
              <strong className="block">{s.goalOption(g)}</strong>
              <span className="muted small">{s.goalLabel[g]}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="stack">
        <h2>{s.soundTitle}</h2>
        <p className="muted small">{s.soundHint}</p>
        <div className="toggle-list">
          <button className="toggle" role="switch" aria-checked={state.sound.effects} onClick={() => { setSound({ effects: !state.sound.effects }); if (!state.sound.effects) setTimeout(() => play('correct'), 0); }}>
            <span className="grow">{s.soundEffects}</span><span className="switch" aria-hidden="true" />
            <span className="visually-hidden">{state.sound.effects ? s.on : s.off}</span>
          </button>
          <button className="toggle" role="switch" aria-checked={state.sound.voice} onClick={() => setSound({ voice: !state.sound.voice })}>
            <span className="grow">{s.voiceAuto}</span><span className="switch" aria-hidden="true" />
            <span className="visually-hidden">{state.sound.voice ? s.on : s.off}</span>
          </button>
        </div>
        <div className="row">
          <SpeakButton text={sample} lang={state.target} onSay={say} label={s.voiceTest} />
          <span className="grow">{s.voiceTest}: <Txt lang={state.target}>{sample}</Txt></span>
        </div>
        {problem && <p className="small voice-problem" role="alert">{problem}</p>}
      </section>

      <section className="stack">
        <h2>{s.pathLabel}</h2>
        <p className="muted small">{s.switchPathHint}</p>
        <div className="seg" role="group" aria-label={s.switchPath}>
          {LANGS.map((native) => {
            const target = otherLang(native);
            const active = state.native === native;
            return (
              <button key={native} className={active ? 'active' : ''} aria-pressed={active} onClick={() => switchPath(native, target)}>
                {s.path(native, target)} <span className="muted small">({getPath(state, native, target).xp} {s.xp})</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="stack">
        <h2>{s.guides}</h2>
        <p className="muted small">{s.guidesHint}</p>
        <ul className="list">
          {characters.map((c) => (
            <li key={c.id} className="card row">
              <Avatar id={c.id} size={44} />
              <span className="grow"><strong>{c.name} {c.flag}</strong><span className="muted small block">{c.role[state.native]}</span></span>
            </li>
          ))}
        </ul>
      </section>

      <section className="stack">
        <h2>{s.resetTitle}</h2>
        <p className="muted small">{s.resetBody}</p>
        <button className="btn danger" onClick={() => { if (window.confirm(s.resetConfirm)) reset(); }}>{s.resetTitle}</button>
      </section>
    </Page>
  );
}
