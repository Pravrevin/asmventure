import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, MapPin, CalendarDays, Clock3, Check, Sparkles } from 'lucide-react'
import { PATHS } from '../lib/paths.js'
import { inr } from '../lib/format.js'
import useCountdown, { nextRaceDate } from '../lib/useCountdown.js'
import { BRAND, CATEGORIES, PARTNERS, STATS, PLEDGE, IMPACT } from '../data/site.js'
import SectionHead from '../components/SectionHead.jsx'

export default function Home() {
  const race = useMemo(() => nextRaceDate(), [])
  const cd = useCountdown(race)
  const dateLabel = race.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <>
      {/* ── HERO (bento) ── */}
      <section className="hero container">
        <div className="hero-main card">
          <div className="eyebrow"><span className="dot live" />Registrations open · {BRAND.edition}</div>
          <h1 className="display hero-title">
            Run the <mark>city</mark><br />
            you <span className="outline">love.</span>
          </h1>
          <p className="lead">Six races. Four cities. One morning when all of Patna laces up — produced by {BRAND.company}.</p>
          <div className="hero-actions">
            <Link to={PATHS.registration} className="btn btn-volt btn-lg">Register now <ArrowUpRight size={18} /></Link>
            <Link to={PATHS.categories} className="btn btn-ghost btn-lg">Explore races</Link>
          </div>
          <div className="hero-meta">
            <span><MapPin size={16} /> {BRAND.venue}</span>
            <span><CalendarDays size={16} /> {dateLabel}</span>
            <span><Clock3 size={16} /> 5:00 AM IST</span>
          </div>
        </div>

        <div className="hero-clock card card-ink">
          <div className="kicker">Race-day countdown</div>
          <div className="clock">
            {[['days', 'Days'], ['hours', 'Hrs'], ['mins', 'Min'], ['secs', 'Sec']].map(([k, l]) => (
              <div className="clock-unit" key={k}>
                <span className="clock-num">{cd[k]}</span>
                <span className="clock-lbl">{l}</span>
              </div>
            ))}
          </div>
          <div className="clock-bar"><span style={{ width: `${Math.max(4, 100 - (Number(cd.days) / 365) * 100)}%` }} /></div>
        </div>

        <div className="hero-bib card card-volt">
          <div className="bib-top">
            <span className="mono">ASM · 2027</span>
            <span className="mono">21.1 KM</span>
          </div>
          <div className="bib-num">0427</div>
          <div className="bib-name">YOUR NAME HERE</div>
          <div className="bib-holes"><i /><i /><i /><i /></div>
        </div>
      </section>

      {/* ── PARTNER MARQUEE ── */}
      <div className="marquee" aria-label="Partners">
        <div className="marquee-track">
          {[...PARTNERS, ...PARTNERS].map((p, i) => (
            <span key={i}><Sparkles size={16} /> {p}</span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="container stats">
        {STATS.map((s) => (
          <div className="stat" key={s.desc}>
            <div className="stat-num display">{s.num}</div>
            <div className="stat-desc">{s.desc}</div>
          </div>
        ))}
      </section>

      {/* ── RACES ── */}
      <section className="section container">
        <SectionHead kicker="Pick your distance" title="Six ways to" accent="cross the line." sub="From first-timers to ultra veterans — there's a start pen with your name on it.">
          <Link to={PATHS.categories} className="btn btn-ghost">Compare all <ArrowRight size={16} /></Link>
        </SectionHead>
        <div className="race-grid">
          {CATEGORIES.map((c) => (
            <article className={`race-card${c.soon ? ' is-soon' : ''}`} key={c.code} style={{ '--c': c.color }}>
              <div className="race-top">
                <span className="race-chip">{c.name}</span>
                {c.soon && <span className="pill pill-soon">Coming soon</span>}
              </div>
              <div className="race-dist display">{c.dist}<small>{c.unit}</small></div>
              <ul className="race-meta">
                <li><span>Flag-off</span>{c.flag}</li>
                <li><span>Age</span>{c.age}</li>
                <li><span>Level</span>{c.skill}</li>
              </ul>
              <div className="race-foot">
                <span className="race-fee">{inr(c.fee)}</span>
                {c.soon
                  ? <span className="btn btn-sm btn-disabled">Soon</span>
                  : <Link to={`${PATHS.registration}?cat=${c.code}`} className="btn btn-sm btn-ink">Register <ArrowUpRight size={14} /></Link>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CAUSE ── */}
      <section className="section container">
        <div className="cause card">
          <div className="cause-copy">
            <div className="kicker">Our pledge</div>
            <h2 className="display h2">Running for a <span className="u-accent">greener</span> Bihar.</h2>
            <p className="muted">The ASM Ventures Marathon is more than a race. Every registration funds tangible environmental action across the state.</p>
            <ul className="checklist">
              {PLEDGE.map((p) => <li key={p}><span><Check size={14} /></span>{p}</li>)}
            </ul>
          </div>
          <div className="cause-tiles">
            {IMPACT.map((im) => (
              <div className={`impact tone-${im.tone}`} key={im.desc}>
                <div className="impact-num display">{im.num}</div>
                <div className="impact-desc">{im.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
