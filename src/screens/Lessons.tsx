import { lessonById, tracks } from '../content/lessons';
import { lessonStatus } from '../domain/progress';
import { useApp } from '../state/AppContext';
import { Avatar } from '../ui/Avatar';
import { learnerFor, scenes, trackCard } from '../ui/art';

const SOON_NODES = 3;

export function Lessons({ onOpenLesson }: { onOpenLesson: (id: string) => void }) {
  const { state, s, path } = useApp();
  const active = tracks.filter((t) => !t.comingSoon);
  const soon = tracks.filter((t) => t.comingSoon);

  return (
    <main className="screen with-tabs map-screen">
      <img className="map-bg" src={scenes.pyramids} alt="" />
      {active.map((tr) => {
        const done = tr.lessonIds.filter((id) => lessonStatus(path, id) === 'completed').length;
        return (
          <section key={tr.id} className="stack">
            <header className="map-head">
              <Avatar id={learnerFor(state.native)} size={52} />
              <div className="map-title">
                <h1>{s.lessonsTitle}</h1>
                <p>{s.trailTitle(tr.title[state.native])}</p>
                <progress className="bar" max={tr.lessonIds.length} value={done} aria-label={tr.title[state.native]} />
              </div>
            </header>
            <ol className="trail">
              {tr.lessonIds.map((id, i) => {
                const lesson = lessonById(id)!;
                const status = lessonStatus(path, id);
                const label = { locked: s.statusLocked, available: s.statusAvailable, completed: s.statusCompleted }[status];
                return (
                  <li key={id}>
                    <button className={`trail-node ${status}`} disabled={status === 'locked'} onClick={() => onOpenLesson(id)} aria-label={`${lesson.title[state.native]} — ${label}`}>
                      <span className="node-badge" aria-hidden="true">{status === 'locked' ? '🔒' : status === 'completed' ? '✓' : i + 1}</span>
                      <span className="node-label">
                        <strong className="block">{lesson.title[state.native]}</strong>
                        <span className="muted small">{status === 'locked' ? s.lockedHint : `${label} • ${s.minutes(lesson.minutes)}`}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
              {Array.from({ length: SOON_NODES }, (_, k) => (
                <li key={`soon-${k}`}>
                  <div className="trail-node locked" aria-label={s.soonNode}>
                    <span className="node-badge" aria-hidden="true">🔒</span>
                    <span className="node-label"><span className="muted small">{s.soonNode}</span></span>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        );
      })}
      <ul className="list soon-list">
        {soon.map((tr) => (
          <li key={tr.id} className="soon-card" role="status">
            <img src={trackCard[tr.id]} alt="" />
            <span><strong className="block">{tr.title[state.native]}</strong><span className="small">🔒 {s.comingSoon}</span></span>
          </li>
        ))}
      </ul>
    </main>
  );
}
