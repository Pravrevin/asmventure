export default function Logo({ light = false }) {
  return (
    <span className={`logo${light ? ' logo-light' : ''}`}>
      <img src="/logo.svg" alt="" width="36" height="36" />
      <span className="logo-text">
        <strong>ASM</strong>
        <small>Ventures Marathon</small>
      </span>
    </span>
  )
}
