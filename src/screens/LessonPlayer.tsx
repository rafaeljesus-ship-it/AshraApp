import { useMemo, useRef, useState } from 'react';
import { characterById } from '../content/characters';
import { allLessonIds, lessonById } from '../content/lessons';
import { buildExercises, isBuildCorrect } from '../domain/exercises';
import type { CompletionResult } from '../domain/progress';
import { achievementDefs, dayKey } from '../domain/progress';
import type { BuildExercise, ChoiceExercise } from '../domain/types';
import { useApp } from '../state/AppContext';
import { Avatar } from '../ui/Avatar';
import { Txt } from '../ui/Txt';
import { goldIcon, nourPose, scenes } from '../ui/art';

type Phase = 'exercise' | 'tip' | 'result';

export function LessonPlayer({ lessonId, onExit }: { lessonId: string; onExit: () => void }) {
  const { state, s, completeLesson } = useApp();
  const lesson = lessonById(lessonId);
  const attemptId = useRef(`${lessonId}:${Date.now()}:${Math.random().toString(36).slice(2)}`);
  const exercises = useMemo(
    () => (lesson ? buildExercises(lesson, state.native, state.target) : []),
    [lesson, state.native, state.target],
  );

  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [run, setRun] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [phase, setPhase] = useState<Phase>('exercise');
  const [result, setResult] = useState<CompletionResult | null>(null);

  if (!lesson || exercises.length === 0) {
    return (
      <main className="screen" role="alert">
        <p>{s.empty}</p>
        <button className="btn" onClick={onExit}>{s.back}</button>
      </main>
    );
  }

  const exit = () => { if (window.confirm(s.exitConfirm)) onExit(); };

  const onAnswered = (ok: boolean) => {
    const total = correctCount + (ok ? 1 : 0);
    if (ok) setCorrectCount(total);
    const nextRun = ok ? run + 1 : 0;
    setRun(nextRun);
    setBestCombo(Math.max(bestCombo, nextRun));
    if (index + 1 < exercises.length) setIndex(index + 1);
    else setPhase('tip');
  };

  if (phase === 'tip') {
    const guide = characterById(lesson.tip.guide);
    const hasBust = ['fadia', 'claudia', 'ali', 'mohamed'].includes(guide.id);
    return (
      <main className="screen lesson tip-screen">
        <img className="tip-bg" src={state.target === 'ar-EG' ? scenes.cafe : scenes.beach} alt="" />
        <p className="tip-top">{s.tipWith(guide.name)} <span aria-hidden="true">{guide.flag}</span></p>
        <p className="speech">{lesson.tip.text[state.target]}</p>
        {hasBust
          ? <img className="tip-guide" src={`/characters/bust/${guide.id}.png`} alt={guide.name} />
          : <Avatar id={guide.id} size={140} />}
        <div className="card tip-card">
          <h1>{s.tipTitle}</h1>
          <p className="muted">{s.tipHint}</p>
          <button
            className="btn primary"
            onClick={() => {
              // Single call per attempt: the reducer also ignores a repeated attemptId.
              setResult(completeLesson({
                attemptId: attemptId.current,
                lessonId,
                correct: correctCount,
                total: exercises.length,
                bestCombo,
                today: dayKey(new Date()),
              }));
              setPhase('result');
            }}
          >
            {s.tipContinue} <span className="flip-rtl" aria-hidden="true">→</span>
          </button>
        </div>
      </main>
    );
  }

  if (phase === 'result' && result) {
    const earned = achievementDefs.filter((a) => result.newAchievements.includes(a.id));
    return (
      <div className="result-bg">
      <main className="screen lesson result">
        <div className="center stack">
          <div className="stars" aria-hidden="true"><span>⭐</span><span className="big">⭐</span><span>⭐</span></div>
          <h1>{s.resultTitle}</h1>
          <div className="result-art">
            {['fadia', 'claudia'].includes(lesson.tip.guide) && (
              <img className="result-guide" src={`/characters/bust/${lesson.tip.guide}.png`} alt="" />
            )}
            <img className="nour-pose big" src={nourPose('cheer')} alt="Nour" />
          </div>
        </div>
        <div className="chips">
          <div className="chip-card"><img src="/assets/icons/xp.png" alt="" /><strong data-testid="xp-gained">+{result.xpGained}</strong><span className="small">{s.resultXp}</span></div>
          <div className="chip-card"><img src="/assets/gold/book.png" alt="" /><strong>{correctCount}/{exercises.length}</strong><span className="small">{s.resultAccuracy}</span></div>
          <div className="chip-card"><img src="/assets/icons/streak.png" alt="" /><strong>{result.streakCount}</strong><span className="small">{s.resultStreak}</span></div>
        </div>
        {(() => {
          const ph = lesson.phrases[0];
          const target = state.target === 'ar-EG' ? ph.ar : ph.pt;
          return (
            <div className="you-can-say" role="status">
              <img src="/assets/gold/star.png" alt="" />
              <span>
                <span className="small block">{s.youCanSay}</span>
                <Txt lang={state.target} className="say-text">{target}</Txt>
                {state.target === 'ar-EG' && <span className="small block" dir="ltr">{ph.arTranslit}</span>}
              </span>
            </div>
          );
        })()}
        <ul className="breakdown" aria-label={s.resultXp}>
          {([
            [s.bonusAnswers, result.breakdown.answers],
            [s.bonusCompletion, result.breakdown.completion],
            [s.bonusPerfect, result.breakdown.perfect],
            [s.bonusCombo(bestCombo), result.breakdown.combo],
            [s.bonusReplay, result.breakdown.replay],
          ] as [string, number][]).filter(([, n]) => n > 0).map(([label, n]) => (
            <li key={label}><span>{label}</span><strong>+{n}</strong></li>
          ))}
        </ul>
        <div className="card goal-card" role="status">
          <span className="grow">
            <strong className="block">{result.goalReachedNow ? s.goalReachedToday : s.dailyGoal}</strong>
            <progress className="bar" max={result.daily.goal} value={Math.min(result.daily.xp, result.daily.goal)} aria-label={s.dailyGoal} />
            <span className="muted small">{Math.min(result.daily.xp, result.daily.goal)}/{result.daily.goal} {s.xp}</span>
          </span>
        </div>
        {result.breakdown.replay > 0 && <p className="muted small">{s.replayNote}</p>}
        {earned.map((a) => (
          <div key={a.id} className="card achievement earned" role="status">
            <span className="badge" aria-hidden="true"><img src={goldIcon(a.icon as never)} alt="" /></span>
            <span><span className="eyebrow">{s.newAchievement}</span><strong className="block">{a.title[state.native]}</strong></span>
          </div>
        ))}
        <button className="btn primary big" onClick={onExit}>{s.continue} <span className="flip-rtl" aria-hidden="true">→</span></button>
      </main>
      </div>
    );
  }

  const ex = exercises[index];
  return (
    <main className="screen lesson">
      <header className="lesson-head">
        <button className="icon-btn" aria-label={s.exit} onClick={exit}>✕</button>
        <p className="lesson-kind">{s.lessonN(allLessonIds().indexOf(lessonId) + 1)} · {ex.kind === 'choice' ? s.kindVocab : s.kindBuild}</p>
        <progress className="bar" max={exercises.length} value={index} aria-label={s.lessonProgress(index + 1, exercises.length)} />
      </header>
      {ex.kind === 'choice'
        ? <ChoiceView key={ex.id} ex={ex} onDone={onAnswered} />
        : <BuildView key={ex.id} ex={ex} onDone={onAnswered} />}
      {lesson.needsReview && <p className="muted small">{s.needsReview}</p>}
    </main>
  );
}

function Feedback({ ok, answer, note, onNext }: { ok: boolean; answer: React.ReactNode; note?: string; onNext: () => void }) {
  const { s } = useApp();
  return (
    <div className={`feedback ${ok ? 'ok' : 'bad'}`} role="status" aria-live="polite">
      <strong>{ok ? `✓ ${s.correct}` : `✗ ${s.incorrect}`}</strong>
      {!ok && <p>{s.correctAnswer} {answer}</p>}
      {note && <p className="small">{note}</p>}
      <button className="btn primary" onClick={onNext} autoFocus>{s.next} →</button>
    </div>
  );
}

function ChoiceView({ ex, onDone }: { ex: ChoiceExercise; onDone: (ok: boolean) => void }) {
  const { state, s } = useApp();
  const lesson = lessonById(ex.id.split(':')[0])!;
  const phrase = lesson.phrases.find((p) => p.id === ex.phraseId)!;
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const ok = picked === ex.correctIndex;
  const correct = ex.options[ex.correctIndex];

  return (
    <section className="stack">
      <h1 className="question">{ex.promptText}</h1>
      <div className="stack" role="group" aria-label={ex.promptText}>
        {ex.options.map((o, i) => {
          const cls = checked ? (i === ex.correctIndex ? 'right' : i === picked ? 'wrong' : '') : picked === i ? 'selected' : '';
          return (
            <button key={i} className={`card option ${cls}`} aria-pressed={picked === i} disabled={checked} onClick={() => setPicked(i)}>
              <span className="option-body">
                <Txt lang={o.lang} className="option-text">{o.text}</Txt>
                {o.translit && <span className="muted small block" dir="ltr">{o.translit}</span>}
              </span>
              {(cls === 'right' || cls === 'selected') && <span className="mark" aria-hidden="true">✓</span>}
              {cls === 'wrong' && <span className="mark" aria-hidden="true">✕</span>}
            </button>
          );
        })}
      </div>
      <div className="action-bar">
      {!checked ? (
        <button className="btn primary" disabled={picked === null} onClick={() => setChecked(true)}>{s.check}</button>
      ) : (
        <Feedback
          ok={ok}
          answer={<><Txt lang={correct.lang}>{correct.text}</Txt>{correct.translit && <> ({correct.translit})</>}</>}
          note={[phrase.note?.[state.target], state.target === 'ar-EG' ? s.translitNote : ''].filter(Boolean).join(' ')}
          onNext={() => onDone(ok)}
        />
      )}
      </div>
    </section>
  );
}

function BuildView({ ex, onDone }: { ex: BuildExercise; onDone: (ok: boolean) => void }) {
  const { s } = useApp();
  const [placed, setPlaced] = useState<number[]>([]); // indexes into ex.bank
  const [checked, setChecked] = useState(false);
  const words = placed.map((i) => ex.bank[i]);
  const ok = isBuildCorrect(ex, words);

  return (
    <section className="stack">
      <h1 className="question">{s.buildPrompt} <Txt lang={ex.source.lang}>«{ex.source.text}»</Txt></h1>
      <p className="muted small">{s.buildHint}</p>
      <div className="slots" dir={ex.targetLang === 'ar-EG' ? 'rtl' : 'ltr'} lang={ex.targetLang === 'ar-EG' ? 'ar' : 'pt-BR'} aria-label={s.buildAnswerArea} data-testid="answer-area">
        {placed.length === 0 && <span className="muted small">…</span>}
        {placed.map((bankIdx, pos) => (
          <button key={bankIdx} className="chip placed" disabled={checked} onClick={() => setPlaced(placed.filter((_, p) => p !== pos))}>{ex.bank[bankIdx]}</button>
        ))}
      </div>
      <div className="slots bank" dir={ex.targetLang === 'ar-EG' ? 'rtl' : 'ltr'} lang={ex.targetLang === 'ar-EG' ? 'ar' : 'pt-BR'} role="group" aria-label={s.buildBank}>
        {ex.bank.map((tok, i) => (
          <button key={i} className="chip" disabled={checked || placed.includes(i)} onClick={() => setPlaced([...placed, i])}>{tok}</button>
        ))}
      </div>
      <div className="action-bar">
      {!checked ? (
        <button className="btn primary" disabled={placed.length === 0} onClick={() => setChecked(true)}>{s.check}</button>
      ) : (
        <Feedback ok={ok} answer={<Txt lang={ex.targetLang}>{ex.answer.join(' ')}</Txt>} onNext={() => onDone(ok)} />
      )}
      </div>
    </section>
  );
}
