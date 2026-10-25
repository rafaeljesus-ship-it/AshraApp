import { useMemo, useRef, useState } from 'react';
import { characterById } from '../content/characters';
import { lessonById } from '../content/lessons';
import { buildExercises, isBuildCorrect } from '../domain/exercises';
import type { CompletionResult } from '../domain/progress';
import { achievementDefs, dayKey } from '../domain/progress';
import type { BuildExercise, ChoiceExercise } from '../domain/types';
import { useApp } from '../state/AppContext';
import { Avatar } from '../ui/Avatar';
import { Txt } from '../ui/Txt';

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
    if (index + 1 < exercises.length) setIndex(index + 1);
    else setPhase('tip');
  };

  if (phase === 'tip') {
    const guide = characterById(lesson.tip.guide);
    return (
      <main className="screen lesson">
        <h1>{s.tipTitle}</h1>
        <div className="card tip">
          <div className="row"><Avatar id={guide.id} size={56} /><strong>{s.tipFrom(guide.name)} {guide.flag}</strong></div>
          <p className="bubble">{lesson.tip.text[state.target]}</p>
        </div>
        <button
          className="btn primary"
          onClick={() => {
            // Single call per attempt: the reducer also ignores a repeated attemptId.
            setResult(completeLesson({
              attemptId: attemptId.current,
              lessonId,
              correct: correctCount,
              total: exercises.length,
              today: dayKey(new Date()),
            }));
            setPhase('result');
          }}
        >
          {s.next}
        </button>
      </main>
    );
  }

  if (phase === 'result' && result) {
    const earned = achievementDefs.filter((a) => result.newAchievements.includes(a.id));
    return (
      <main className="screen lesson result">
        <div className="center stack">
          <div className="stars" aria-hidden="true">⭐</div>
          <h1>{s.resultTitle}</h1>
          <Avatar id="nour" size={96} />
        </div>
        <div className="stats">
          <div className="stat"><strong data-testid="xp-gained">+{result.xpGained}</strong><span className="muted small">{s.resultXp}</span></div>
          <div className="stat"><strong>{correctCount}/{exercises.length}</strong><span className="muted small">{s.resultAccuracy}</span></div>
          <div className="stat"><strong>{result.streakCount}</strong><span className="muted small">{s.resultStreak}</span></div>
        </div>
        {result.xpGained <= 5 && <p className="muted small">{s.replayNote}</p>}
        {earned.map((a) => (
          <div key={a.id} className="card achievement earned" role="status">
            <span className="badge" aria-hidden="true">{a.icon}</span>
            <span><span className="eyebrow">{s.newAchievement}</span><strong className="block">{a.title[state.native]}</strong></span>
          </div>
        ))}
        <button className="btn primary" onClick={onExit}>{s.continue}</button>
      </main>
    );
  }

  const ex = exercises[index];
  return (
    <main className="screen lesson">
      <header className="row lesson-head">
        <button className="icon-btn" aria-label={s.exit} onClick={exit}>✕</button>
        <progress className="bar grow" max={exercises.length} value={index} aria-label={s.lessonProgress(index + 1, exercises.length)} />
      </header>
      <p className="muted small">{lesson.title[state.native]} · {s.lessonProgress(index + 1, exercises.length)}</p>
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
              <Txt lang={o.lang} className="option-text">{o.text}</Txt>
              {o.translit && <span className="muted small block" dir="ltr">{o.translit}</span>}
            </button>
          );
        })}
      </div>
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
      {!checked ? (
        <button className="btn primary" disabled={placed.length === 0} onClick={() => setChecked(true)}>{s.check}</button>
      ) : (
        <Feedback ok={ok} answer={<Txt lang={ex.targetLang}>{ex.answer.join(' ')}</Txt>} onNext={() => onDone(ok)} />
      )}
    </section>
  );
}
