import type { ReactNode } from 'react';
import { useApp } from '../state/AppContext';

export type Tab = 'home' | 'lessons' | 'achievements' | 'profile';

export function TabBar({ tab, onTab }: { tab: Tab; onTab: (t: Tab) => void }) {
  const { s } = useApp();
  const items: { id: Tab; label: string }[] = [
    { id: 'home', label: s.tabHome },
    { id: 'lessons', label: s.tabLessons },
    { id: 'achievements', label: s.tabAchievements },
    { id: 'profile', label: s.tabProfile },
  ];
  return (
    <nav className="tabbar" aria-label={s.tabs}>
      {items.map((i) => (
        <button key={i.id} className={tab === i.id ? 'active' : ''} aria-current={tab === i.id ? 'page' : undefined} onClick={() => onTab(i.id)}>
          <img src={`/assets/nav/${i.id}.png`} alt="" className="tab-icon" />
          <span>{i.label}</span>
        </button>
      ))}
    </nav>
  );
}

export function StorageWarning() {
  const { s, storageOk } = useApp();
  return storageOk ? null : <div className="banner" role="alert">{s.storageWarn}</div>;
}

export function Page({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="screen with-tabs">
      <h1>{title}</h1>
      {children}
    </main>
  );
}
