export default function SectionHead({ kicker, title, accent, sub, align = 'left', children }) {
  return (
    <div className={`section-head ${align === 'center' ? 'center' : ''}`}>
      <div>
        {kicker && <div className="kicker">{kicker}</div>}
        <h2 className="display h2">
          {title} {accent && <span className="u-accent">{accent}</span>}
        </h2>
        {sub && <p className="muted">{sub}</p>}
      </div>
      {children}
    </div>
  )
}
