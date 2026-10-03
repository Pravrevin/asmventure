import { useState } from 'react'
import { Check, Zap, ClipboardList, ArrowUpRight } from 'lucide-react'
import { GEAR, PLANS } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Note from '../components/Note.jsx'
import Modal from '../components/Modal.jsx'

export default function Athlete() {
  const [checked, setChecked] = useState(() => new Set())
  const [openPlan, setOpenPlan] = useState(null)
  const plan = openPlan != null ? PLANS[openPlan] : null
  const toggle = (i) => setChecked((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n })

  return (
    <>
      <PageHero eyebrow="Race prep" title="Athlete" accent="guide" sub="Everything you need before race day — your gear checklist and free training plans." image="/images/lace-up.jpg" crumb="Athlete guide" />

      <section className="section container">
        <Note variant="warn" icon="AlertTriangle" title="50K Ultra — mandatory gear, strictly enforced">
          Ultra runners must carry every mandatory item at all checkpoint scans. Non-compliance means a DNF. Items marked with a bolt are mandatory.
        </Note>

        <SectionHead kicker="Tick as you pack" title="Race-day" accent="checklist">
          <div className="pack-meter">
            <span className="mono">{checked.size}/{GEAR.length}</span> packed
            <div className="progress"><span style={{ width: `${(checked.size / GEAR.length) * 100}%` }} /></div>
          </div>
        </SectionHead>
        <div className="gear-grid">
          {GEAR.map((g, i) => (
            <button type="button" key={g.name} className={`gear${g.m ? ' must' : ''}${checked.has(i) ? ' on' : ''}`} onClick={() => toggle(i)} aria-pressed={checked.has(i)}>
              <span className="gear-box">{checked.has(i) ? <Check size={14} /> : g.m ? <Zap size={14} /> : null}</span>
              <span><strong>{g.name}</strong><small>{g.desc}</small></span>
            </button>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionHead kicker="Free plans" title="Training" accent="plans" sub="Structured programmes for every level — from first 5K to ultra." />
        <div className="plan-grid">
          {PLANS.map((p, i) => (
            <article className={`plan tone-${p.tone}`} key={p.level}>
              <div className="plan-weeks display">{p.week}<small>weeks</small></div>
              <div className="plan-level">{p.level} · {p.target}{p.soon && <span className="pill pill-soon">Soon</span>}</div>
              <p>{p.desc}</p>
              <button className="btn btn-ink btn-sm" onClick={() => setOpenPlan(i)}><ClipboardList size={14} /> View plan <ArrowUpRight size={14} /></button>
            </article>
          ))}
        </div>
      </section>

      <Modal open={plan != null} onClose={() => setOpenPlan(null)} tone={plan?.tone} subtitle="ASM Training Plan" title={plan ? `${plan.week} weeks — ${plan.level}` : ''}>
        {plan && (
          <>
            <p className="muted">{plan.summary}</p>
            <h4 className="sub">A typical week</h4>
            <div className="week-grid">
              {plan.structure.map(([day, s]) => (
                <div className="wday" key={day}><span>{day}</span><p>{s}</p></div>
              ))}
            </div>
            <h4 className="sub">Week-by-week progression</h4>
            <div className="table-wrap">
              <table className="table">
                <thead><tr>{plan.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                <tbody>{plan.rows.map((r) => <tr key={r[0]}>{r.map((c, k) => <td key={k}>{k === 0 ? <strong>{c}</strong> : c}</td>)}</tr>)}</tbody>
              </table>
            </div>
            {plan.note && <Note variant="warn" icon="Zap" style={{ marginTop: 16 }}>{plan.note}</Note>}
          </>
        )}
      </Modal>
    </>
  )
}
