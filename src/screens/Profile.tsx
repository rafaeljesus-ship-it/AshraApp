import { characters } from '../content/characters';
import { currentStreak, dayKey, getPath, levelInfo } from '../domain/progress';
import { LANGS, otherLang } from '../domain/types';
import { useApp } from '../state/AppContext';
import { Page } from '../ui/Chrome';
import { Avatar } from '../ui/Avatar';

export function Profile() {
  const { state, s, path, switchPath, reset } = useApp();
  const lv = levelInfo(path.xp);
  const streak = currentStreak(state, dayKey(new Date()));
  const done = Object.keys(path.completed).length;

  return (
    <Page title={s.profileTitle}>
      <div className="row">
        <Avatar id="rafa" size={64} />
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
