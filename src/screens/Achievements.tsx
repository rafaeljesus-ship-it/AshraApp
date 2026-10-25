import { achievementDefs } from '../domain/progress';
import { useApp } from '../state/AppContext';
import { Page } from '../ui/Chrome';
import { goldIcon } from '../ui/art';

export function Achievements() {
  const { state, s } = useApp();
  return (
    <Page title={s.achievements}>
      <ul className="grid">
        {achievementDefs.map((a) => {
          const earned = state.achievements.includes(a.id);
          return (
            <li key={a.id} className={`card achievement ${earned ? 'earned' : 'locked'}`}>
              <span className="badge" aria-hidden="true">{earned ? <img src={goldIcon(a.icon as never)} alt="" /> : '🔒'}</span>
              <strong>{a.title[state.native]}</strong>
              <span className="visually-hidden">{earned ? s.statusCompleted : s.locked}</span>
            </li>
          );
        })}
      </ul>
    </Page>
  );
}
