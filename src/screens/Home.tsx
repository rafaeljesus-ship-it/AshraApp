import { lessonById, tracks } from '../content/lessons';
import { allLessonIds } from '../content/lessons';
import { characterById } from '../content/characters';
import { currentStreak, dayKey, levelInfo, lessonStatus, recommendedLessonId } from '../domain/progress';
import { useApp } from '../state/AppContext';
import { Avatar } from '../ui/Avatar';
import { StorageWarning } from '../ui/Chrome';

export function Home({ onOpenLesson, onOpenLessons }: { onOpenLesson: (id: string) => void; onOpenLessons: () => void }) {
  const { state, s, path } = useApp();
  const lv = levelInfo(path.xp);
  const rec = recommendedLessonId(path);
  const lesson = rec ? lessonById(rec) : undefined;
  const streak = currentStreak(state, dayKey(new Date()));
  const name = state.name || s.defaultName;
  const ids = allLessonIds();

  return (
    <main className="screen with-tabs">
      <StorageWarning />
      <header className="row greeting">
        <Avatar id="nour" size={56} />
        <div className="grow">
          <h1>{s.hello(name)}</h1>
          <p className="muted">{s.letsLearn} · {s.path(state.native, state.target)}</p>
        </div>
      </header>

      {lesson ? (
        <button className="card recommended" onClick={() => onOpenLesson(lesson.id)}>
          <span className="grow">
            <span className="eyebrow">{s.recommended}</span>
            <strong className="block">{lesson.title[state.native]}</strong>
            <span className="muted">{s.lessonN(ids.indexOf(lesson.id) + 1)} • {s.minutes(lesson.minutes)}</span>
          </span>
          <span className="play" aria-hidden="true"><span className="flip-rtl">▶</span></span>
        </button>
      ) : (
        <div className="card" role="status">{s.nothingToResume}</div>
      )}

      <section className="stats" aria-label={s.progressTitle}>
        <Stat icon="⭐" value={String(path.xp)} label={s.xp} />
        <Stat icon="🛡️" value={String(lv.level)} label={s.level} />
        <Stat icon="🏆" value={String(state.achievements.length)} label={s.achievements} />
        <Stat icon="🔥" value={String(streak)} label={s.streak} />
      </section>

      <h2>{s.tracks}</h2>
      <ul className="list">
        {tracks.map((tr) => {
          const done = tr.lessonIds.filter((id) => lessonStatus(path, id) === 'completed').length;
          return (
            <li key={tr.id}>
              <button className={`card track ${tr.color}`} onClick={onOpenLessons} disabled={tr.comingSoon} aria-disabled={tr.comingSoon}>
                <span className="grow">
                  <strong className="block">{tr.title[state.native]}</strong>
                  <span>{tr.comingSoon ? s.comingSoon : `${done}/${tr.lessonIds.length} · ${tr.subtitle[state.native]}`}</span>
                </span>
                <span className="flip-rtl" aria-hidden="true">›</span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="muted small">{characterById('nour').name} 🐪</p>
    </main>
  );
}

function Stat({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="stat">
      <span className="stat-icon" aria-hidden="true">{icon}</span>
      <strong>{value}</strong>
      <span className="muted small">{label}</span>
    </div>
  );
}
