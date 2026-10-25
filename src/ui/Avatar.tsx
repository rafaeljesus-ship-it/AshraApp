import { useState } from 'react';
import { characterById } from '../content/characters';
import type { CharacterId } from '../domain/types';

/**
 * Placeholder avatar. If `public/characters/<id>.png` exists it is used instead.
 * See DESIGN.md "Replacing character assets".
 */
export function Avatar({ id, size = 48 }: { id: CharacterId; size?: number }) {
  const c = characterById(id);
  const [failed, setFailed] = useState(false);
  const style = { width: size, height: size, background: c.color, fontSize: size * 0.45 };
  return failed ? (
    <span className="avatar" style={style} role="img" aria-label={c.name}>
      {c.glyph}
    </span>
  ) : (
    <img
      className="avatar"
      style={style}
      src={`/characters/${id}.png`}
      alt={c.name}
      onError={() => setFailed(true)}
    />
  );
}
