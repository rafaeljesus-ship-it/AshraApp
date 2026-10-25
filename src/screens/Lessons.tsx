import { lessonById, tracks } from '../content/lessons';
import { lessonStatus } from '../domain/progress';
import { useApp } from '../state/AppContext';
import { Page } from '../ui/Chrome';
import { Scene } from '../ui/Scene';
import type { SceneName } from '../ui/Scene';

const trackScene: Record<string, SceneName> = { basico: 'egypt', conversas: 'brazil', cultura: 'nile' };

export function Lessons({ onOpenLesson }: { onOpenLesson: (id: string) => void }) {
  const { state, s, path } = useApp();
  return (
    <Page title={s.lessonsTitle}>
      {tracks.map((tr) => (
        <section key={tr.id} className="stack">
          <h2>{tr.title[state.native]}</h2>
          {tr.comingSoon ? (
            <div className="trail-map soon" role="status">
              <Scene name={trackScene[tr.id] ?? 'egypt'} className="map-scene" />
              <span className="pill">🔒 {s.comingSoon}</span>
            </div>
          ) : (
            <div className="trail-map">
            <Scene name={trackScene[tr.id] ?? 'egypt'} className="map-scene" />
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
            </ol>
            </div>
          )}
        </section>
      ))}
    </Page>
  );
}
