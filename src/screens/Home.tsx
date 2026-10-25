import { lessonById, tracks } from '../content/lessons';
import { allLessonIds } from '../content/lessons';
import { currentStreak, dailyProgress, dayKey, levelInfo, lessonStatus, recommendedLessonId } from '../domain/progress';
import { useApp } from '../state/AppContext';
import { Avatar } from '../ui/Avatar';
import { StorageWarning } from '../ui/Chrome';
import { learnerFor, trackCard, trackScene } from '../ui/art';

/** Learner portrait: Rafa (learns Arabic) or Ali (learns Portuguese). */

export function Home({ onOpenLesson, onOpenLessons }: { onOpenLesson: (id: string) => void; onOpenLessons: () => void }) {
  const { state, s, path } = useApp();
  const lv = levelInfo(path.xp);
  const rec = recommendedLessonId(path);
  const lesson = rec ? lessonById(rec) : undefined;
  const today = dayKey(new Date());
  const streak = currentStreak(state, today);
  const daily = dailyProgress(state, today);
  const name = state.name || s.defaultName;
  const ids = allLessonIds();

  return (
    <main className="screen with-tabs">
      <StorageWarning />
      <header className="home-head">
        <Avatar id={learnerFor(state.native)} size={64} />
        <div className="grow">
          <h1>{s.hello(name)}</h1>
          <p className="muted">{s.letsLearn}</p>
          <span className="path-chip">{s.path(state.native, state.target)}</span>
        </div>
        <span className="flame-badge" aria-label={`${s.streak}: ${s.dayStreakShort(streak)}`}>
          <img src="/assets/icons/streak.png" alt="" />
          <small>{s.dayStreakShort(streak)}</small>
        </span>
      </header>

      {lesson ? (
        <button className="card recommended" onClick={() => onOpenLesson(lesson.id)}>
          <span className="thumb"><img src={trackScene[lesson.trackId] ?? trackScene.basico} alt="" /></span>
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
        <Stat tone="gold" icon="xp" value={String(path.xp)} label={s.xp} />
        <Stat tone="violet" icon="level" value={String(lv.level)} label={s.level} />
        <Stat tone="amber" icon="achievements" value={String(state.achievements.length)} label={s.achievements} />
        <Stat tone="red" icon="streak" value={String(streak)} label={s.streak} />
      </section>

      <section className="card goal-card" aria-label={s.dailyGoal}>
        <span className="grow">
          <span className="row between">
            <strong>{s.dailyGoal}</strong>
            <span className="muted small">{Math.min(daily.xp, daily.goal)}/{daily.goal} {s.xp}</span>
          </span>
          <progress className="bar" max={daily.goal} value={Math.min(daily.xp, daily.goal)} aria-label={s.dailyGoal} />
          <span className="muted small">{daily.reached ? `✓ ${s.dailyGoalReached}` : s.dailyGoalLeft(daily.goal - daily.xp)}</span>
        </span>
      </section>

      <h2>{s.tracks}</h2>
      <ul className="list">
        {tracks.map((tr) => {
          const done = tr.lessonIds.filter((id) => lessonStatus(path, id) === 'completed').length;
          return (
            <li key={tr.id}>
              <button className={`card track ${tr.color}`} onClick={onOpenLessons} disabled={tr.comingSoon} aria-disabled={tr.comingSoon}>
                <img src={trackCard[tr.id]} alt="" className="track-scene" />
                <span className="grow track-text">
                  <strong className="block">{tr.title[state.native]}</strong>
                  <span>{tr.comingSoon ? s.comingSoon : `${done}/${tr.lessonIds.length} · ${tr.subtitle[state.native]}`}</span>
                </span>
                <span className="flip-rtl" aria-hidden="true">›</span>
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

function Stat({ icon, value, label, tone }: { icon: string; value: string; label: string; tone: string }) {
  return (
    <div className="stat">
      <span className={`stat-icon ${tone}`} aria-hidden="true"><img src={`/assets/icons/${icon}.png`} alt="" /></span>
      <strong>{value}</strong>
      <span className="muted small">{label}</span>
    </div>
  );
}
