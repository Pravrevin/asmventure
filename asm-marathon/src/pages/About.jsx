import { BRAND, TIMELINE, IMPACT, ORGS } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'

export default function About() {
  return (
    <>
      <PageHero eyebrow="Our story" title="The" accent="movement" sub={`How ${BRAND.company} grew a 500-runner riverside jog into Bihar's biggest community race.`} ghost="STORY" />

      <section className="section container about">
        <div>
          <SectionHead kicker="Legacy" title="Years of" accent="strides" />
          <p className="lead-sm">
            {BRAND.company} is a Patna-based events and experiences company. What began as a modest community run along the
            Ganga ghats has grown into the {BRAND.event} — a festival of six races, four cities and a city-wide commitment to
            leaving every route greener than we found it.
          </p>
          <ol className="timeline">
            {TIMELINE.map((t) => (
              <li key={t.year}>
                <span className="tl-year display">{t.year}</span>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside className="about-side">
          <div className="kicker">Sustainability audit</div>
          <h3 className="display h3">Impact so far</h3>
          <div className="impact-stack">
            {IMPACT.map((im) => (
              <div className={`impact tone-${im.tone}`} key={im.desc}>
                <div className="impact-num display">{im.num}</div>
                <div className="impact-desc">{im.desc}</div>
              </div>
            ))}
          </div>

          <div className="kicker" style={{ marginTop: 40 }}>Organisers</div>
          <h3 className="display h3">Race management</h3>
          <div className="org-list">
            {ORGS.map((o, i) => (
              <div className="org" key={o.title}>
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                <div><strong>{o.title}</strong><p>{o.desc}</p></div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </>
  )
}
