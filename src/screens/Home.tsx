import { lessonById, tracks } from '../content/lessons';
import { allLessonIds } from '../content/lessons';
import { currentStreak, dayKey, levelInfo, lessonStatus, recommendedLessonId } from '../domain/progress';
import { useApp } from '../state/AppContext';
import { Avatar } from '../ui/Avatar';
import { StorageWarning } from '../ui/Chrome';

// Illustrated art from the refined asset pack (see DESIGN.md "Asset integration").
const trackArt: Record<string, string> = {
  basico: '/assets/scenes/egypt_pyramids.png',
  conversas: '/assets/scenes/egypt_cafe.png',
  cultura: '/assets/scenes/rio_christ.png',
};
/** Guide of the culture being learned: Fadia (Egypt) or Claudia (Brazil). */
const guideBust = { 'ar-EG': 'fadia', 'pt-BR': 'claudia' } as const;

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
      <header className="hero-card">
        <img className="hero-bg" src={trackArt.basico} alt="" />
        <div className="hero-text">
          <div className="row">
            <Avatar id="nour" size={48} />
            <h1>{s.hello(name)}</h1>
          </div>
          <p>{s.letsLearn}</p>
          <span className="path-chip">{s.path(state.native, state.target)}</span>
          <span className="streak-pill" aria-label={`${s.streak}: ${s.dayStreakShort(streak)}`}>
            <img src="/assets/icons/streak.png" alt="" className="mini-icon" /> {s.dayStreakShort(streak)}
          </span>
        </div>
        <img className="hero-bust" src={`/characters/bust/${guideBust[state.target]}.png`} alt="" />
      </header>

      {lesson ? (
        <button className="card recommended" onClick={() => onOpenLesson(lesson.id)}>
          <span className="thumb"><img src={trackArt[lesson.trackId] ?? trackArt.basico} alt="" /></span>
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

      <h2>{s.tracks}</h2>
      <ul className="list">
        {tracks.map((tr) => {
          const done = tr.lessonIds.filter((id) => lessonStatus(path, id) === 'completed').length;
          return (
            <li key={tr.id}>
              <button className={`card track ${tr.color}`} onClick={onOpenLessons} disabled={tr.comingSoon} aria-disabled={tr.comingSoon}>
                <img src={trackArt[tr.id]} alt="" className="track-scene" />
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
