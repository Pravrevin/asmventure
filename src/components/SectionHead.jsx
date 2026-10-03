export default function SectionHead({ kicker, title, accent, sub, align = 'left', children }) {
  return (
    <div className={`section-head ${align === 'center' ? 'center' : ''}`}>
      <div>
        {kicker && <div className="kicker">{kicker}</div>}
        <h2 className="display h2">
          {title} {accent && <em className="u-accent">{accent}</em>}
        </h2>
        {sub && <p className="muted section-sub">{sub}</p>}
      </div>
      {children}
    </div>
  )
}
