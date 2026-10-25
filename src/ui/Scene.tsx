export type SceneName = 'egypt' | 'brazil' | 'nile';

/**
 * Original, simplified decorative landscapes (SVG) used as stand-ins for the illustrated
 * scenery in the reference art. They contain no characters. Replace with final art when available.
 */
export function Scene({ name, className = '' }: { name: SceneName; className?: string }) {
  const sky: Record<SceneName, [string, string]> = {
    egypt: ['#8fd3f4', '#fde7b0'],
    brazil: ['#6ec6f1', '#d9f2e3'],
    nile: ['#9bd0f5', '#ffe9b8'],
  };
  const [top, bottom] = sky[name];
  const id = `sky-${name}`;
  return (
    <svg className={`scene ${className}`} viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="1" stopColor={bottom} />
        </linearGradient>
      </defs>
      <rect width="300" height="200" fill={`url(#${id})`} />
      <circle cx="238" cy="46" r="20" fill="#ffd95a" opacity="0.95" />
      {name === 'brazil' ? (
        <>
          <path d="M0 150 Q70 70 130 120 T230 105 T300 140 V200 H0Z" fill="#4aa36b" />
          <path d="M70 118 L96 70 L122 118Z" fill="#3b8a58" />
          {/* abstract hilltop monument: a simple cross silhouette, not a likeness */}
          <rect x="94" y="52" width="4" height="22" rx="2" fill="#f4f1e6" />
          <rect x="82" y="58" width="28" height="4" rx="2" fill="#f4f1e6" />
          <path d="M0 165 Q80 150 160 168 T300 160 V200 H0Z" fill="#35b5c9" />
          <path d="M0 182 Q90 170 170 185 T300 178 V200 H0Z" fill="#f2d98d" />
        </>
      ) : (
        <>
          <path d="M20 160 L85 70 L150 160Z" fill="#e8b45f" />
          <path d="M85 70 L150 160 H110Z" fill="#cf9a46" />
          <path d="M110 160 L165 92 L220 160Z" fill="#f0c373" />
          <path d="M165 92 L220 160 H190Z" fill="#d8a652" />
          {name === 'nile' ? (
            <path d="M0 170 Q75 150 150 172 T300 165 V200 H0Z" fill="#4aa3d8" />
          ) : null}
          <path d="M0 180 Q90 168 170 182 T300 176 V200 H0Z" fill="#f0cf86" />
        </>
      )}
      {/* palms */}
      <g stroke="#7a5230" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M30 178 Q34 150 40 128" />
        <path d="M262 182 Q258 156 252 136" />
      </g>
      <g fill="#2f9b4f">
        <path d="M40 128 q-24 -4 -30 10 q18 -6 30 -10z" />
        <path d="M40 128 q24 -6 32 8 q-20 -4 -32 -8z" />
        <path d="M40 128 q-8 -22 -26 -22 q16 6 26 22z" />
        <path d="M40 128 q10 -22 28 -20 q-18 4 -28 20z" />
        <path d="M252 136 q-22 -4 -28 9 q16 -6 28 -9z" />
        <path d="M252 136 q22 -6 30 8 q-18 -4 -30 -8z" />
        <path d="M252 136 q-8 -20 -24 -20 q14 5 24 20z" />
        <path d="M252 136 q10 -20 26 -18 q-16 4 -26 18z" />
      </g>
    </svg>
  );
}
