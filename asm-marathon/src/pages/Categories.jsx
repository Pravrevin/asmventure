import { Link } from 'react-router-dom'
import { Globe2, Smartphone, Medal, Ruler, Download, MapPin, ArrowUpRight } from 'lucide-react'
import { PATHS } from '../lib/paths.js'
import { inr } from '../lib/format.js'
import { CATEGORIES, ROUTES, PRIZES } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Tabs from '../components/Tabs.jsx'

function PrizeTable({ head, rows }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td><span className={`medal medal-${r[0]}`}>{r[1]}</span></td>
              {r.slice(2).map((c, j) => <td key={j} className="num">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RoutePanel({ title, text, points, label }) {
  return (
    <div className="route">
      <div className="route-map" aria-hidden="true">
        <svg viewBox="0 0 400 240" preserveAspectRatio="none">
          <path className="route-river" d="M0,200 C80,170 160,215 240,185 S360,160 400,175 L400,240 L0,240 Z" />
          <path className="route-line" d="M60,170 C70,90 140,60 200,80 S300,40 330,100 S300,190 220,170 S110,200 60,170 Z" />
          <circle className="route-pin" cx="60" cy="170" r="8" />
        </svg>
        <span className="route-tag"><MapPin size={14} /> Start / Finish</span>
      </div>
      <div className="route-copy">
        <div className="kicker">{label} route</div>
        <h3 className="display h3">{title}</h3>
        <p className="muted">{text}</p>
        <ul className="checklist small">{points.map((p) => <li key={p}><span>•</span>{p}</li>)}</ul>
        <button className="btn btn-ghost btn-sm"><Download size={14} /> Download GPX</button>
      </div>
    </div>
  )
}

const ELEV = [
  [0, 100], [40, 95], [100, 80], [160, 70], [200, 65], [260, 55], [310, 50], [360, 48], [400, 52], [440, 58],
  [480, 62], [520, 68], [560, 72], [600, 78], [640, 82], [700, 88], [760, 92], [800, 95],
]
const MARKS = [
  { x: 100, y: 80, l: '2.5K', t: 'h' }, { x: 200, y: 65, l: '5K', t: 'h' }, { x: 310, y: 50, l: '7K', t: 'm' },
  { x: 400, y: 52, l: '10K', t: 'h' }, { x: 480, y: 62, l: '12.5K', t: 'h' }, { x: 560, y: 72, l: '14K', t: 'm' },
  { x: 640, y: 82, l: '17.5K', t: 'h' }, { x: 760, y: 92, l: '21K', t: 'f' },
]

export default function Categories() {
  const line = ELEV.map(([x, y], i) => `${i ? 'L' : 'M'}${x},${y}`).join(' ')
  return (
    <>
      <PageHero eyebrow="Edition 2027" title="Races &" accent="routes" sub="Distances, flag-off times, course profiles and prize money for all six categories." ghost="RACES" />

      <section className="section container">
        <SectionHead kicker="Race matrix" title="Compare" accent="distances" sub="All categories are chip-timed on AIMS-certified courses." />
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr><th>Category</th><th>Min. age</th><th>Flag-off</th><th>Cut-off</th><th>Entry fee</th><th>Qualifier</th><th /></tr>
            </thead>
            <tbody>
              {CATEGORIES.map((c) => (
                <tr key={c.code}>
                  <td>
                    <span className="cat-dot" style={{ background: c.color }} />
                    <strong>{c.label}</strong>
                    {c.soon && <span className="pill pill-soon">Soon</span>}
                  </td>
                  <td>{c.age}</td><td className="num">{c.flag}</td><td className="num">{c.cut}</td>
                  <td className="num"><strong>{inr(c.fee)}</strong></td>
                  <td>{c.qual ? 'Marathon cert.' : '—'}</td>
                  <td>{!c.soon && <Link className="row-link" to={`${PATHS.registration}?cat=${c.code}`} aria-label={`Register for ${c.label}`}><ArrowUpRight size={16} /></Link>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* VIRTUAL */}
      <section className="section container">
        <div className="virtual card card-ink">
          <div>
            <div className="kicker">New this edition</div>
            <h2 className="display h2">Can't make it? <span className="u-volt">Run virtual.</span></h2>
            <p className="muted-inv">Pick your distance and run it anywhere across race weekend — a park, a treadmill, your neighbourhood. Log it on any GPS tracker and your medal ships to your door.</p>
            <div className="virtual-facts">
              <div><span>Entry</span><strong>{inr(399)}</strong></div>
              <div><span>Eligibility</span><strong>All ages</strong></div>
              <div><span>Window</span><strong>Feb 12–14</strong></div>
            </div>
            <Link to={`${PATHS.registration}?cat=virtual`} className="btn btn-volt">Join the virtual run <ArrowUpRight size={16} /></Link>
          </div>
          <div className="virtual-grid">
            {[[Globe2, 'Run anywhere', 'Any place, any time over race weekend'], [Smartphone, 'Self-timed', 'Strava, Garmin or any GPS app'], [Medal, 'Medal + e-cert', 'Shipped to your doorstep'], [Ruler, 'Your distance', '5K · 10K · 21K · 42K']].map(([I, t, d]) => (
              <div className="vtile" key={t}><I size={22} /><strong>{t}</strong><span>{d}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="section container">
        <SectionHead kicker="Course maps" title="Know the" accent="route" sub="Download GPX tracks and preview each course." />
        <Tabs tabs={ROUTES.map((r) => ({ id: r.id, label: r.label, content: <RoutePanel {...r} /> }))} />

        <div className="elev card">
          <div className="elev-head">
            <div>
              <div className="kicker">Elevation profile</div>
              <h3 className="display h3">21K route</h3>
            </div>
            <div className="legend">
              <span><i className="lg-h" /> Hydration</span>
              <span><i className="lg-m" /> Medical camp</span>
              <span><i className="lg-f" /> Finish / physio</span>
            </div>
          </div>
          <svg viewBox="0 0 800 130" className="elev-svg" role="img" aria-label="Elevation profile of the 21K route — gentle rise to KM 8, then a gradual descent to the finish">
            <defs>
              <linearGradient id="elevfill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--cobalt)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--cobalt)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${line} L800,130 L0,130 Z`} fill="url(#elevfill)" />
            <path d={line} fill="none" stroke="var(--cobalt)" strokeWidth="2.5" strokeLinejoin="round" />
            {MARKS.map((m) => (
              <g key={m.l}>
                <circle cx={m.x} cy={m.y} r="5.5" className={`mk mk-${m.t}`} />
                <text x={m.x} y={m.y - 11} textAnchor="middle" className="mk-label">{m.l}</text>
              </g>
            ))}
          </svg>
        </div>
      </section>

      {/* PRIZES */}
      <section className="section container">
        <SectionHead kicker="Prize purse" title="Prize" accent="money" />
        <Tabs tabs={[
          { id: 'm', label: 'Open Men', content: <PrizeTable {...PRIZES.open} /> },
          { id: 'w', label: 'Open Women', content: <PrizeTable {...PRIZES.open} /> },
          { id: 'v', label: 'Veterans 45+', content: <PrizeTable {...PRIZES.veterans} /> },
        ]} />
      </section>
    </>
  )
}
