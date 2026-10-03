import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, MapPin, CalendarDays, ArrowDown } from 'lucide-react'
import { PATHS } from '../lib/paths.js'
import { inr } from '../lib/format.js'
import useCountdown, { nextRaceDate } from '../lib/useCountdown.js'
import { BRAND, CATEGORIES, PARTNERS, STATS, PLEDGE, IMPACT, KIT, POSTS } from '../data/site.js'
import SectionHead from '../components/SectionHead.jsx'
import Icon from '../components/Icon.jsx'

export default function Home() {
  const race = useMemo(() => nextRaceDate(), [])
  const cd = useCountdown(race)
  const dateLabel = race.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <img className="hero-img" src="/images/hero-marathon.jpg" alt="Runners on the road during a city marathon" />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="eyebrow"><span className="dot live" />Registrations open · {BRAND.edition}</div>
          <h1 className="display hero-title">
            Every mile<br /><em>matters.</em>
          </h1>
          <p className="lead hero-lead">
            Six races. Four cities. One unforgettable morning when all of Patna runs together — presented by {BRAND.company}.
          </p>
          <div className="hero-actions">
            <Link to={PATHS.registration} className="btn btn-volt btn-lg">Reserve your bib <ArrowUpRight size={18} /></Link>
            <Link to={PATHS.categories} className="btn btn-glass btn-lg">Explore the races</Link>
          </div>
        </div>

        <div className="container hero-bar-wrap">
          <div className="hero-bar">
            <div className="hb-item hb-clock">
              <span className="hbar-label">Race day in</span>
              <div className="clock">
                {[['days', 'Days'], ['hours', 'Hrs'], ['mins', 'Min'], ['secs', 'Sec']].map(([k, l]) => (
                  <div className="clock-unit" key={k}>
                    <span className="clock-num">{cd[k]}</span>
                    <span className="clock-lbl">{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hb-item"><span className="hbar-label"><CalendarDays size={14} /> Date</span><strong>{dateLabel}</strong></div>
            <div className="hb-item"><span className="hbar-label"><MapPin size={14} /> Start line</span><strong>{BRAND.venue}</strong></div>
          </div>
        </div>
        <a href="#intro" className="scroll-cue" aria-label="Scroll down"><ArrowDown size={16} /></a>
      </section>

      {/* ── PARTNERS ── */}
      <div className="partners" aria-label="Partners">
        <span className="partners-label">In partnership with</span>
        <div className="partners-track">
          <div className="partners-row">
            {[...PARTNERS, ...PARTNERS].map((p, i) => <span key={i}>{p.split('·').pop().trim()}</span>)}
          </div>
        </div>
      </div>

      {/* ── INTRO + STATS ── */}
      <section className="section container intro" id="intro">
        <div className="kicker">The movement</div>
        <p className="statement">
          What began as 500 runners on the Ganga riverfront is now Bihar's <em>defining</em> running festival —
          chip-timed, AIMS-certified, and built around a promise to leave every route <em>greener</em> than we found it.
        </p>
        <div className="stats">
          {STATS.map((s) => (
            <div className="stat" key={s.desc}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RACES (editorial list) ── */}
      <section className="section container">
        <SectionHead kicker="Choose your distance" title="Six races," accent="one finish line." sub="From a first 5K to a night-start ultra — every category is chip-timed on a certified course.">
          <Link to={PATHS.categories} className="btn btn-ghost">Compare all races <ArrowRight size={16} /></Link>
        </SectionHead>
        <div className="race-list">
          {CATEGORIES.map((c, i) => {
            const Row = c.soon ? 'div' : Link
            return (
              <Row
                key={c.code}
                className={`race-row${c.soon ? ' is-soon' : ''}`}
                style={{ '--c': c.color }}
                {...(c.soon ? {} : { to: `${PATHS.registration}?cat=${c.code}` })}
              >
                <span className="rr-idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="rr-dist">{c.dist}<small>{c.unit.toLowerCase()}</small></span>
                <span className="rr-name">
                  <strong>{c.name}</strong>
                  <small>{c.skill} · {c.age}</small>
                </span>
                <span className="rr-meta"><small>Flag-off</small>{c.flag}</span>
                <span className="rr-fee">{c.soon ? <span className="pill pill-soon">Coming soon</span> : inr(c.fee)}</span>
                <span className="rr-go" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </Row>
            )
          })}
        </div>
      </section>

      {/* ── EXPERIENCE (split) ── */}
      <section className="section container split">
        <figure className="split-media">
          <img src="/images/night-run.jpg" alt="Runners silhouetted against the early-morning sky" loading="lazy" />
          <figcaption>Flag-off before sunrise · Gandhi Maidan</figcaption>
        </figure>
        <div className="split-copy">
          <div className="kicker">Race-day experience</div>
          <h2 className="display h2">Everything handled. <em className="u-accent">You just run.</em></h2>
          <p className="muted">
            From the expo to the finish village, every detail is designed around the runner — so the only thing on your mind is the next kilometre.
          </p>
          <ul className="feature-list">
            {KIT.map((k) => (
              <li key={k.name}>
                <span className="feature-ic"><Icon name={k.icon} size={18} /></span>
                <div><strong>{k.name}</strong><span>{k.desc}</span></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CAUSE (full-bleed) ── */}
      <section className="cause">
        <img src="/images/trail-green.jpg" alt="" loading="lazy" />
        <div className="cause-shade" />
        <div className="container cause-inner">
          <div className="cause-copy">
            <div className="eyebrow">Our pledge</div>
            <h2 className="display h2">Running for a <em>greener</em> Bihar.</h2>
            <ul className="pledge">
              {PLEDGE.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div className="cause-tiles">
            {IMPACT.map((im) => (
              <div className="impact" key={im.desc}>
                <div className="impact-num">{im.num}</div>
                <div className="impact-desc">{im.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNAL ── */}
      <section className="section container">
        <SectionHead kicker="Journal" title="Stories from" accent="the road.">
          <Link to={PATHS.blog} className="btn btn-ghost">All stories <ArrowRight size={16} /></Link>
        </SectionHead>
        <div className="blog-grid">
          {POSTS.map((p) => (
            <Link to={`${PATHS.blog}/${p.slug}`} className="post" key={p.slug}>
              <div className="cover"><img src={p.image} alt="" loading="lazy" /></div>
              <div className="post-body">
                <div className="article-meta"><span>{p.tag}</span><span>{p.readTime}</span></div>
                <h3 className="post-title">{p.title}</h3>
                <span className="post-link">Read story <ArrowUpRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
