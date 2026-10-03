import { Link } from 'react-router-dom'

// Inner-page banner: full-bleed photo, breadcrumb, title with an italic serif accent.
export default function PageHero({ eyebrow, title, accent, sub, image = '/images/road-stride.jpg', crumb }) {
  return (
    <header className="page-hero">
      <img className="page-hero-img" src={image} alt="" />
      <div className="page-hero-shade" />
      <div className="container page-hero-inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span><span>{crumb || eyebrow}</span>
        </nav>
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="display">
          {title} {accent && <em>{accent}</em>}
        </h1>
        {sub && <p className="lead">{sub}</p>}
      </div>
    </header>
  )
}
