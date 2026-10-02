// Inner-page header: eyebrow, oversized title with an accent word, and a ghost word behind it.
export default function PageHero({ eyebrow, title, accent, sub, ghost }) {
  return (
    <header className="page-hero">
      <div className="container">
        <span className="ghost-word" aria-hidden="true">{ghost || accent}</span>
        <div className="eyebrow"><span className="dot" />{eyebrow}</div>
        <h1 className="display">
          {title} {accent && <mark>{accent}</mark>}
        </h1>
        {sub && <p className="lead">{sub}</p>}
      </div>
    </header>
  )
}
