export function Logo({ size = 72 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="ASHRA">
      <rect width="64" height="64" rx="18" fill="var(--emerald)" />
      <path d="M32 8l6 14 14-6-6 14 14 6-14 6 6 14-14-6-6 14-6-14-14 6 6-14-14-6 14-6-6-14 14 6z" fill="var(--gold)" />
      <circle cx="32" cy="32" r="7" fill="var(--emerald)" />
    </svg>
  );
}
