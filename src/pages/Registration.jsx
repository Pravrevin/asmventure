import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, UploadCloud, FileCheck2, Lock, Loader2, Ticket, Smartphone, CreditCard, Landmark } from 'lucide-react'
import { PATHS } from '../lib/paths.js'
import { inr } from '../lib/format.js'
import { saveRegistration, makeRef } from '../lib/store.js'
import { CATEGORIES, CITIES, SIZES, BLOOD_GROUPS, PROCESSING_FEE, KIT } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import Note from '../components/Note.jsx'
import Icon from '../components/Icon.jsx'

const STEPS = ['Race', 'Runner', 'Qualifier', 'Merch', 'Payment']
const PAY_METHODS = [
  { id: 'UPI', icon: Smartphone, label: 'UPI', hint: 'GPay · PhonePe · Paytm' },
  { id: 'Card', icon: CreditCard, label: 'Card', hint: 'Credit / Debit' },
  { id: 'Net Banking', icon: Landmark, label: 'Net Banking', hint: 'All major banks' },
]
const EMPTY = {
  firstName: '', lastName: '', dob: '', gender: '', bloodGroup: '', email: '', mobile: '',
  emergencyName: '', emergencyMobile: '', medicalConditions: '',
}
const digits = (s) => s.replace(/\D/g, '').length

function Field({ label, required, error, children, wide }) {
  return (
    <label className={`field${wide ? ' wide' : ''}${error ? ' has-err' : ''}`}>
      <span className="field-label">{label}{required && <em>*</em>}</span>
      {children}
      {error && <span className="field-err">{error}</span>}
    </label>
  )
}

export default function Registration() {
  const [params] = useSearchParams()
  const initialCat = CATEGORIES.find((c) => c.code === params.get('cat') && !c.soon)?.code || ''

  const [step, setStep] = useState(1)
  const [category, setCategory] = useState(initialCat)
  const [city, setCity] = useState('')
  const [d, setD] = useState(EMPTY)
  const [touched, setTouched] = useState(false)
  const [size, setSize] = useState('')
  const [file, setFile] = useState(null)
  const [method, setMethod] = useState('UPI')
  const [agree, setAgree] = useState(false)
  const [paying, setPaying] = useState(false)
  const [done, setDone] = useState(null)
  const [saveErr, setSaveErr] = useState(false)

  const cat = CATEGORIES.find((c) => c.code === category)
  const needsQual = Boolean(cat?.qual)
  const fee = cat?.fee || 0
  const total = fee ? fee + PROCESSING_FEE : 0

  const errors = useMemo(() => {
    const e = {}
    if (!d.firstName.trim()) e.firstName = 'Required'
    if (!d.lastName.trim()) e.lastName = 'Required'
    if (!d.dob) e.dob = 'Required'
    if (!d.gender) e.gender = 'Required'
    if (!d.bloodGroup) e.bloodGroup = 'Required'
    if (!/\S+@\S+\.\S+/.test(d.email)) e.email = 'Enter a valid email'
    if (digits(d.mobile) < 10) e.mobile = 'Enter a 10-digit number'
    if (!d.emergencyName.trim()) e.emergencyName = 'Required'
    if (digits(d.emergencyMobile) < 10) e.emergencyMobile = 'Enter a 10-digit number'
    return e
  }, [d])

  const canNext = {
    1: Boolean(category && city),
    2: Object.keys(errors).length === 0,
    3: !needsQual || Boolean(file),
    4: Boolean(size),
    5: agree,
  }

  const next = () => {
    if (step === 2) setTouched(true)
    if (!canNext[step]) return
    setStep((s) => Math.min(5, s + 1))
    window.scrollTo({ top: 260, behavior: 'smooth' })
  }
  const prev = () => setStep((s) => Math.max(1, s - 1))
  const upd = (e) => setD((p) => ({ ...p, [e.target.name]: e.target.value }))
  const err = (k) => (touched ? errors[k] : undefined)

  // No payment gateway or backend yet: simulate the gateway, then store locally
  // so the registration shows up in /admin. Swap this for the real integration later.
  const pay = () => {
    if (!agree) return
    setPaying(true)
    setSaveErr(false)
    setTimeout(() => {
      const row = saveRegistration({
        id: makeRef('ASM'),
        category: cat.label,
        categoryCode: cat.code,
        city,
        ...d,
        medicalConditions: d.medicalConditions.trim() || 'None',
        tshirtSize: size,
        qualifierProvided: needsQual ? (file ? 'Yes' : 'No') : 'N/A',
        qualifierFile: file ? file.name : '',
        entryFee: fee,
        processingFee: PROCESSING_FEE,
        totalAmount: total,
        paymentMode: method,
        paymentStatus: 'Paid',
      })
      setPaying(false)
      if (row) setDone(row)
      else setSaveErr(true)
    }, 1400)
  }

  const reset = () => {
    setStep(1); setCategory(''); setCity(''); setD(EMPTY); setTouched(false)
    setSize(''); setFile(null); setAgree(false); setDone(null)
  }

  if (done) {
    return (
      <>
        <PageHero eyebrow="You're in" title="See you at the" accent="start line" ghost="BIB" />
        <section className="section container">
          <div className="ticket">
            <div className="ticket-main">
              <div className="kicker"><Ticket size={14} /> E-ticket · {done.paymentStatus}</div>
              <h2 className="display h2">{done.firstName} {done.lastName}</h2>
              <div className="ticket-grid">
                <div><span>Race</span><strong>{done.category}</strong></div>
                <div><span>City</span><strong>{done.city}</strong></div>
                <div><span>Tee size</span><strong>{done.tshirtSize}</strong></div>
                <div><span>Paid</span><strong>{inr(done.totalAmount)} · {done.paymentMode}</strong></div>
              </div>
              <p className="muted small">A confirmation will be sent to <strong>{done.email}</strong>. Bring this reference and a photo ID to the bib expo.</p>
            </div>
            <div className="ticket-stub">
              <span className="mono">Reference</span>
              <strong className="mono">{done.id}</strong>
              <div className="barcode" aria-hidden="true">{Array.from({ length: 34 }, (_, i) => <i key={i} style={{ width: (i * 7) % 4 + 1 }} />)}</div>
            </div>
          </div>
          <div className="center-row">
            <button className="btn btn-ghost" onClick={reset}>Register another runner</button>
            <Link to={PATHS.athlete} className="btn btn-ink">Read the athlete guide <ArrowRight size={16} /></Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero eyebrow="Limited slots" title="Claim your" accent="bib" sub="Five quick steps. Early-bird pricing ends 31 January 2027." ghost="REGISTER" />

      <section className="section container reg">
        <div className="reg-form card">
          {/* progress */}
          <ol className="stepper">
            {STEPS.map((s, i) => {
              const n = i + 1
              return (
                <li key={s} className={n < step ? 'done' : n === step ? 'on' : ''}>
                  <span className="step-dot">{n < step ? <Check size={14} /> : n}</span>
                  <span className="step-lbl">{s}</span>
                </li>
              )
            })}
          </ol>
          <div className="progress"><span style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }} /></div>

          <div className="step-body" key={step}>
            {step === 1 && (
              <>
                <h3 className="display h3">Choose your race</h3>
                <div className="pick-grid">
                  {CATEGORIES.map((c) => (
                    <button
                      type="button"
                      key={c.code}
                      disabled={c.soon}
                      className={`pick${category === c.code ? ' on' : ''}`}
                      style={{ '--c': c.color }}
                      onClick={() => setCategory(c.code)}
                      aria-pressed={category === c.code}
                    >
                      <span className="pick-dist display">{c.dist}<small>{c.unit}</small></span>
                      <span className="pick-name">{c.name}</span>
                      <span className="pick-fee">{c.soon ? 'Coming soon' : inr(c.fee)}</span>
                      <span className="pick-check"><Check size={14} /></span>
                    </button>
                  ))}
                </div>
                <div className="field-label" style={{ marginTop: 28 }}>Host city<em>*</em></div>
                <div className="chips">
                  {CITIES.map((c) => (
                    <button type="button" key={c} className={`chip${city === c ? ' on' : ''}`} onClick={() => setCity(c)} aria-pressed={city === c}>{c}</button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="display h3">Runner details</h3>
                <div className="form-grid">
                  <Field label="First name" required error={err('firstName')}><input className="input" name="firstName" value={d.firstName} onChange={upd} placeholder="Rahul" autoComplete="given-name" /></Field>
                  <Field label="Last name" required error={err('lastName')}><input className="input" name="lastName" value={d.lastName} onChange={upd} placeholder="Kumar" autoComplete="family-name" /></Field>
                  <Field label="Date of birth" required error={err('dob')}><input className="input" type="date" name="dob" value={d.dob} onChange={upd} /></Field>
                  <Field label="Gender" required error={err('gender')}>
                    <select className="input" name="gender" value={d.gender} onChange={upd}>
                      <option value="">Select</option><option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </Field>
                  <Field label="Blood group" required error={err('bloodGroup')}>
                    <select className="input" name="bloodGroup" value={d.bloodGroup} onChange={upd}>
                      <option value="">Select</option>{BLOOD_GROUPS.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </Field>
                  <Field label="Mobile" required error={err('mobile')}><input className="input" type="tel" name="mobile" value={d.mobile} onChange={upd} placeholder="+91 XXXXX XXXXX" autoComplete="tel" /></Field>
                  <Field label="Email" required error={err('email')} wide><input className="input" type="email" name="email" value={d.email} onChange={upd} placeholder="rahul@example.com" autoComplete="email" /></Field>
                  <Field label="Emergency contact name" required error={err('emergencyName')}><input className="input" name="emergencyName" value={d.emergencyName} onChange={upd} placeholder="Full name" /></Field>
                  <Field label="Emergency contact mobile" required error={err('emergencyMobile')}><input className="input" type="tel" name="emergencyMobile" value={d.emergencyMobile} onChange={upd} placeholder="+91 XXXXX XXXXX" /></Field>
                  <Field label="Known medical conditions" wide><input className="input" name="medicalConditions" value={d.medicalConditions} onChange={upd} placeholder="e.g. Asthma, Diabetes — or leave blank" /></Field>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h3 className="display h3">Qualifying certificate</h3>
                {needsQual ? (
                  <>
                    <Note variant="info" icon="FileText" title={`${cat.label} — qualifier required`}>
                      Upload an official timing certificate for a full marathon finished in under 5 hours. PDF, JPG or PNG, max 5 MB.
                    </Note>
                    <label className={`drop${file ? ' has-file' : ''}`}>
                      {file ? <FileCheck2 size={32} /> : <UploadCloud size={32} />}
                      <strong>{file ? file.name : 'Click to upload your certificate'}</strong>
                      <span>{file ? `${(file.size / 1024).toFixed(0)} KB · click to replace` : 'PDF, JPG, PNG — max 5 MB'}</span>
                      <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                    </label>
                  </>
                ) : (
                  <Note variant="ok" icon="CheckCircle2" title="No qualifier needed">
                    The {cat?.label} doesn't require a qualifying certificate. Continue to the next step.
                  </Note>
                )}
              </>
            )}

            {step === 4 && (
              <>
                <h3 className="display h3">Finisher tee size</h3>
                <div className="size-grid">
                  {SIZES.map((s) => (
                    <button type="button" key={s.s} className={`size${size === s.s ? ' on' : ''}`} onClick={() => setSize(s.s)} aria-pressed={size === s.s}>
                      <strong>{s.s}</strong><span>Chest {s.chest}</span>
                    </button>
                  ))}
                </div>
                <Note variant="info" icon="Leaf" title="Recycled & unisex">
                  Tees are made from 100% recycled fabric and run slightly large — size down for a fitted cut.
                </Note>
              </>
            )}

            {step === 5 && (
              <>
                <h3 className="display h3">Review & pay</h3>
                <div className="review">
                  <div><span>Runner</span><strong>{d.firstName} {d.lastName}</strong></div>
                  <div><span>Race</span><strong>{cat?.label}</strong></div>
                  <div><span>City</span><strong>{city}</strong></div>
                  <div><span>Tee</span><strong>{size}</strong></div>
                  <div><span>Email</span><strong>{d.email}</strong></div>
                  <div><span>Mobile</span><strong>{d.mobile}</strong></div>
                </div>
                <div className="field-label" style={{ marginTop: 24 }}>Payment method</div>
                <div className="pay-grid">
                  {PAY_METHODS.map(({ id, icon: I, label, hint }) => (
                    <button type="button" key={id} className={`pay${method === id ? ' on' : ''}`} onClick={() => setMethod(id)} aria-pressed={method === id}>
                      <I size={20} /><strong>{label}</strong><span>{hint}</span>
                    </button>
                  ))}
                </div>
                <label className="agree">
                  <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                  <span>I accept the race rules, refund policy and medical waiver, and confirm the details above are correct.</span>
                </label>
                {saveErr && <Note variant="warn" icon="AlertTriangle" title="Couldn't save">Your browser blocked local storage. Please allow site data and try again.</Note>}
              </>
            )}
          </div>

          <div className="step-actions">
            {step > 1 ? <button className="btn btn-ghost" onClick={prev} disabled={paying}><ArrowLeft size={16} /> Back</button> : <span />}
            {step < 5 ? (
              <button className="btn btn-ink" onClick={next} disabled={step !== 2 && !canNext[step]}>
                Next: {STEPS[step]} <ArrowRight size={16} />
              </button>
            ) : (
              <button className="btn btn-volt" onClick={pay} disabled={!agree || paying}>
                {paying ? <><Loader2 size={16} className="spin" /> Processing…</> : <><Lock size={16} /> Pay {inr(total)}</>}
              </button>
            )}
          </div>
        </div>

        {/* SUMMARY */}
        <aside className="reg-side">
          <div className="summary card card-ink">
            <div className="kicker">Order summary</div>
            <div className="summary-race" style={{ '--c': cat?.color || 'var(--volt)' }}>
              <span className="display">{cat ? `${cat.dist}${cat.unit === 'KM' ? 'K' : ''}` : '—'}</span>
              <div>
                <strong>{cat?.label || 'Pick a race'}</strong>
                <small>{city || 'Choose a city'}</small>
              </div>
            </div>
            <div className="summary-lines">
              <div><span>Entry fee</span><span>{inr(fee)}</span></div>
              <div><span>Processing</span><span>{fee ? inr(PROCESSING_FEE) : inr(0)}</span></div>
              <div className="total"><span>Total</span><span>{inr(total)}</span></div>
            </div>
            <p className="muted-inv small"><Lock size={12} /> Secured checkout · UPI, cards & net banking</p>
          </div>

          <div className="kit card">
            <div className="kicker">In every race kit</div>
            <ul>
              {KIT.map((k) => (
                <li key={k.name}>
                  <span className="kit-ic"><Icon name={k.icon} size={18} /></span>
                  <div><strong>{k.name}</strong><span>{k.desc}</span></div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  )
}
