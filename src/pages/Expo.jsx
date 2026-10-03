import { useState } from 'react'
import { MapPin, CalendarDays, Clock3, Mail, Phone, Building2, Timer, ExternalLink, Send, CheckCircle2 } from 'lucide-react'
import { BRAND, TRANSPORT, SPONSORS, VOLUNTEER_ROLES } from '../data/site.js'
import { saveVolunteer } from '../lib/store.js'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Note from '../components/Note.jsx'
import Icon from '../components/Icon.jsx'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Gandhi+Maidan+Patna'

function VolunteerForm() {
  const [v, setV] = useState({ name: '', mobile: '', email: '', role: '' })
  const [sent, setSent] = useState(false)
  const [touched, setTouched] = useState(false)
  const valid = v.name.trim() && v.mobile.replace(/\D/g, '').length >= 10 && v.role
  const upd = (e) => setV((p) => ({ ...p, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setTouched(true)
    if (!valid) return
    saveVolunteer(v)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="sent">
        <CheckCircle2 size={36} />
        <h4 className="display">Thanks, {v.name.split(' ')[0]}!</h4>
        <p className="muted">Your application for <strong>{v.role}</strong> is in. Our volunteer team will call you within 48 hours.</p>
        <button className="btn btn-ghost btn-sm" onClick={() => { setV({ name: '', mobile: '', email: '', role: '' }); setSent(false); setTouched(false) }}>Submit another</button>
      </div>
    )
  }

  return (
    <form className="form-grid" onSubmit={submit} noValidate>
      <label className={`field wide${touched && !v.name.trim() ? ' has-err' : ''}`}>
        <span className="field-label">Full name<em>*</em></span>
        <input className="input" name="name" value={v.name} onChange={upd} placeholder="Your name" />
      </label>
      <label className={`field${touched && v.mobile.replace(/\D/g, '').length < 10 ? ' has-err' : ''}`}>
        <span className="field-label">Mobile<em>*</em></span>
        <input className="input" type="tel" name="mobile" value={v.mobile} onChange={upd} placeholder="+91 XXXXX XXXXX" />
      </label>
      <label className="field">
        <span className="field-label">Email</span>
        <input className="input" type="email" name="email" value={v.email} onChange={upd} placeholder="you@example.com" />
      </label>
      <label className={`field wide${touched && !v.role ? ' has-err' : ''}`}>
        <span className="field-label">Preferred role<em>*</em></span>
        <select className="input" name="role" value={v.role} onChange={upd}>
          <option value="">Select a role</option>
          {VOLUNTEER_ROLES.map((r) => <option key={r}>{r}</option>)}
        </select>
      </label>
      {touched && !valid && <p className="field-err wide">Please fill in your name, a 10-digit mobile and a role.</p>}
      <button className="btn btn-ink wide" type="submit"><Send size={16} /> Submit application</button>
    </form>
  )
}

export default function Expo() {
  return (
    <>
      <PageHero eyebrow="Race week" title="Expo &" accent="contact" sub="Collect your race kit, meet our partners and get in touch with the team." image="/images/stadium-sprint.jpg" crumb="Expo & contact" />

      <section className="section container">
        <div className="expo card card-volt">
          <div>
            <div className="kicker">Bib collection</div>
            <h2 className="display h2">Fitness Expo & Bib Collection</h2>
            <p>Every runner must collect their race kit in person. There is no kit collection at the start line.</p>
          </div>
          <div className="expo-facts">
            <div><Building2 size={18} /><span>Venue</span><strong>Bihar Industries Association, Fraser Road, Patna</strong></div>
            <div><CalendarDays size={18} /><span>Dates</span><strong>12–13 February 2027</strong></div>
            <div><Clock3 size={18} /><span>Timings</span><strong>10:00 AM – 6:00 PM</strong></div>
          </div>
        </div>
        <Note variant="warn" icon="IdCard" title="Bring these to collect your bib">
          1 · The registration reference / QR from your confirmation email &nbsp; 2 · Any government photo ID (Aadhaar, Passport, Driving Licence, Voter ID)
        </Note>
      </section>

      <section className="section container">
        <SectionHead kicker="Start & finish" title="Venue &" accent="transport" />
        <div className="venue">
          <a className="venue-map" href={MAPS_URL} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 400 260" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
              <g className="grid-lines">{Array.from({ length: 12 }, (_, i) => <line key={`v${i}`} x1={i * 36} y1="0" x2={i * 36} y2="260" />)}{Array.from({ length: 8 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 36} x2="400" y2={i * 36} />)}</g>
              <path className="route-river" d="M0,215 C90,190 180,235 260,205 S360,185 400,195 L400,260 L0,260 Z" />
              <rect className="venue-park" x="150" y="80" width="110" height="80" rx="16" />
            </svg>
            <span className="venue-pin"><MapPin size={22} /></span>
            <span className="venue-label">{BRAND.venue} <ExternalLink size={14} /></span>
          </a>
          <div className="transport">
            {TRANSPORT.map((t) => (
              <div className="transport-item" key={t.title}>
                <span className="kit-ic"><Icon name={t.icon} size={18} /></span>
                <div><strong>{t.title}</strong><p>{t.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHead kicker="Our partners" title="Sponsor" accent="wall" />
        <div className="sponsors">
          {SPONSORS.map((s) => (
            <div className={`sp-tier${s.big ? ' big' : ''}`} key={s.tier}>
              <span className="kicker">{s.tier}</span>
              <div className="sp-row">{s.names.map((n) => <span className="sp" key={n}>{n}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section container contact">
        <div className="card">
          <div className="kicker">Get in touch</div>
          <h3 className="display h3">Talk to the race team</h3>
          <ul className="contact-list">
            <li><span className="kit-ic"><Mail size={18} /></span><div><small>Email support</small><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></div></li>
            <li><span className="kit-ic"><Phone size={18} /></span><div><small>Helpline · Mon–Sat, 9 AM–6 PM</small><strong>{BRAND.phone}</strong></div></li>
            <li><span className="kit-ic"><MapPin size={18} /></span><div><small>Office</small><strong>{BRAND.address}</strong></div></li>
            <li><span className="kit-ic"><Timer size={18} /></span><div><small>Response time</small><strong>Within 24 hours on business days</strong></div></li>
          </ul>
        </div>
        <div className="card">
          <div className="kicker">Join 500+ volunteers</div>
          <h3 className="display h3">Become a race volunteer</h3>
          <p className="muted small" style={{ marginBottom: 20 }}>Aid stations, route marshalling, finish line, medical support and more — help make race day happen.</p>
          <VolunteerForm />
        </div>
      </section>
    </>
  )
}
