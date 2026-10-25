/** ASHRA mark (keyed from the supplied brand asset). The wordmark is rendered by the app, not baked into an image. */
export function Logo({ size = 72 }: { size?: number }) {
  return <img className="logo-mark" src="/assets/brand/mark.png" width={size} height={size} alt="ASHRA" style={{ objectFit: 'contain' }} />;
}
