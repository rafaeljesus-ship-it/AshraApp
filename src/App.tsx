import { useState } from 'react';
import { useApp } from './state/AppContext';
import { Onboarding } from './screens/Onboarding';
import { Home } from './screens/Home';
import { Lessons } from './screens/Lessons';
import { Achievements } from './screens/Achievements';
import { Profile } from './screens/Profile';
import { LessonPlayer } from './screens/LessonPlayer';
import { TabBar } from './ui/Chrome';
import type { Tab } from './ui/Chrome';

export default function App() {
  const { state } = useApp();
  const [tab, setTab] = useState<Tab>('home');
  const [lessonId, setLessonId] = useState<string | null>(null);

  if (!state.onboarded) return <Onboarding />;
  if (lessonId) return <LessonPlayer key={lessonId} lessonId={lessonId} onExit={() => setLessonId(null)} />;

  return (
    <>
      {tab === 'home' && <Home onOpenLesson={setLessonId} onOpenLessons={() => setTab('lessons')} />}
      {tab === 'lessons' && <Lessons onOpenLesson={setLessonId} />}
      {tab === 'achievements' && <Achievements />}
      {tab === 'profile' && <Profile />}
      <TabBar tab={tab} onTab={setTab} />
    </>
  );
}
