// Monogram + wordmark. `light` forces cream text (for dark surfaces regardless of theme).
export default function Logo({ light = false }) {
  return (
    <span className={`logo${light ? ' logo-light' : ''}`}>
      <svg className="logo-mark" viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
        <circle cx="32" cy="32" r="29" fill="none" stroke="var(--gold)" strokeWidth="2" />
        <path d="M18 42 L28.5 20 L35.5 34 L40 26.5 L47 42" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="logo-text">
        <strong>ASM</strong>
        <small>Ventures · Marathon</small>
      </span>
    </span>
  )
}
