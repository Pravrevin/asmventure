import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard, Users, HandHeart, LogOut, Search, Download, RefreshCw, Lock, ArrowRight, X,
  IndianRupee, MapPin, BadgeCheck, Trash2, Database, Moon, Sun, ExternalLink, Menu, ShieldAlert,
} from 'lucide-react'
import { ADMIN_PASSCODE } from '../lib/adminConfig.js'
import { inr } from '../lib/format.js'
import useTheme from '../lib/useTheme.js'
import {
  listRegistrations, updateRegistration, deleteRegistration, clearRegistrations, seedDemoData,
  listVolunteers, deleteVolunteer,
} from '../lib/store.js'
import { CATEGORIES } from '../data/site.js'
import Logo from '../components/Logo.jsx'

const AUTH_KEY = 'asm_admin_ok'
// matches the category order in data/site.js: 5k, 10k, 21k, 42k, 50k, virtual
const PALETTE = ['#E58B6D', '#8FA8E0', '#7DC2A5', '#B39DEB', '#D6B06A', '#CFC6B4', '#E5A46D', '#9FB7C9']
const catColor = (code) => {
  const i = CATEGORIES.findIndex((c) => c.code === code)
  return PALETTE[i < 0 ? 7 : i]
}

// ── CSV ──
const REG_COLS = [
  ['Registration Ref', 'id'], ['Registered At', 'createdAt'], ['Category', 'category'], ['City', 'city'],
  ['First Name', 'firstName'], ['Last Name', 'lastName'], ['Gender', 'gender'], ['Date of Birth', 'dob'],
  ['Blood Group', 'bloodGroup'], ['Email', 'email'], ['Mobile', 'mobile'], ['Emergency Name', 'emergencyName'],
  ['Emergency Mobile', 'emergencyMobile'], ['Medical Conditions', 'medicalConditions'], ['T-Shirt Size', 'tshirtSize'],
  ['Qualifier Provided', 'qualifierProvided'], ['Qualifier File', 'qualifierFile'], ['Entry Fee', 'entryFee'],
  ['Processing Fee', 'processingFee'], ['Total Amount', 'totalAmount'], ['Payment Mode', 'paymentMode'], ['Payment Status', 'paymentStatus'],
]
const VOL_COLS = [['Ref', 'id'], ['Applied At', 'createdAt'], ['Name', 'name'], ['Mobile', 'mobile'], ['Email', 'email'], ['Role', 'role']]

const csvCell = (v) => {
  const s = String(v == null ? '' : v)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}
function downloadCsv(rows, cols, filename) {
  const lines = [cols.map(([l]) => csvCell(l)).join(','), ...rows.map((r) => cols.map(([, k]) => csvCell(r[k])).join(','))]
  const blob = new Blob(['﻿' + lines.join('\n')], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = Object.assign(document.createElement('a'), { href: url, download: filename })
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

const fmtDate = (iso) => (iso ? new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }) : '—')
const fullName = (r) => `${r.firstName || ''} ${r.lastName || ''}`.trim() || '—'
const isPaid = (r) => /paid|success/i.test(r.paymentStatus || '')

function groupBy(rows, key) {
  const m = new Map()
  for (const r of rows) {
    const label = String(r[key] || '—').trim() || '—'
    const cur = m.get(label) || { label, count: 0, revenue: 0, code: r.categoryCode }
    cur.count += 1
    cur.revenue += Number(r.totalAmount) || 0
    m.set(label, cur)
  }
  return [...m.values()].sort((a, b) => b.count - a.count)
}

// ── Login ──
function Login({ onUnlock }) {
  const [code, setCode] = useState('')
  const [err, setErr] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    if (code === ADMIN_PASSCODE) {
      try { sessionStorage.setItem(AUTH_KEY, '1') } catch { /* ignore */ }
      onUnlock()
    } else setErr(true)
  }
  return (
    <div className="adm-login">
      <div className="adm-login-art">
        <img src="/images/night-run.jpg" alt="" />
        <Logo light />
        <h1 className="display">Race <em>control.</em></h1>
        <p>Registrations, revenue and volunteers for the ASM Ventures Marathon — in one place.</p>
      </div>
      <form className="adm-login-form" onSubmit={submit}>
        <span className="adm-lock"><Lock size={22} /></span>
        <h2 className="display">Admin sign in</h2>
        <p className="muted small">Enter the passcode to open the dashboard.</p>
        <label className={`field${err ? ' has-err' : ''}`}>
          <span className="field-label">Passcode</span>
          <input className="input" type="password" value={code} autoFocus placeholder="••••••••"
            onChange={(e) => { setCode(e.target.value); setErr(false) }} />
          {err && <span className="field-err">Incorrect passcode. Try again.</span>}
        </label>
        <button className="btn btn-ink" type="submit">Unlock dashboard <ArrowRight size={16} /></button>
        <Link to="/" className="adm-back">← Back to website</Link>
      </form>
    </div>
  )
}

// ── Charts ──
function Donut({ data, total }) {
  const R = 52
  const C = 2 * Math.PI * R
  let offset = 0
  return (
    <div className="donut">
      <svg viewBox="0 0 140 140" role="img" aria-label="Registrations by category">
        <circle cx="70" cy="70" r={R} className="donut-track" />
        {data.map((d) => {
          const len = total ? (d.count / total) * C : 0
          const seg = (
            <circle key={d.label} cx="70" cy="70" r={R} fill="none" stroke={catColor(d.code)} strokeWidth="18"
              strokeDasharray={`${Math.max(0, len - 2)} ${C}`} strokeDashoffset={-offset} transform="rotate(-90 70 70)">
              <title>{`${d.label}: ${d.count}`}</title>
            </circle>
          )
          offset += len
          return seg
        })}
        <text x="70" y="68" textAnchor="middle" className="donut-num">{total}</text>
        <text x="70" y="86" textAnchor="middle" className="donut-lbl">runners</text>
      </svg>
      <ul className="donut-legend">
        {data.map((d) => (
          <li key={d.label}>
            <i style={{ background: catColor(d.code) }} />
            <span>{d.label}</span>
            <strong>{d.count}</strong>
            <small>{total ? Math.round((d.count / total) * 100) : 0}%</small>
          </li>
        ))}
      </ul>
    </div>
  )
}

function DailyBars({ rows }) {
  const days = useMemo(() => {
    const out = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    for (let i = 13; i >= 0; i--) {
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      out.push({ d, count: 0 })
    }
    for (const r of rows) {
      if (!r.createdAt) continue
      const t = new Date(r.createdAt)
      t.setHours(0, 0, 0, 0)
      const slot = out.find((x) => x.d.getTime() === t.getTime())
      if (slot) slot.count += 1
    }
    return out
  }, [rows])
  const max = Math.max(1, ...days.map((x) => x.count))
  return (
    <div className="daily">
      {days.map((x, i) => (
        <div className="daily-col" key={i} title={`${x.d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}: ${x.count}`}>
          <span className="daily-val">{x.count || ''}</span>
          <div className="daily-bar" style={{ height: `${(x.count / max) * 100}%` }} />
          <span className="daily-lbl">{x.d.getDate()}</span>
        </div>
      ))}
    </div>
  )
}

function Bars({ data }) {
  if (!data.length) return <p className="muted small">No data yet.</p>
  const max = Math.max(1, ...data.map((d) => d.count))
  return (
    <ul className="hbars">
      {data.map((d, i) => (
        <li key={d.label}>
          <span className="hb-label" title={d.label}>{d.label}</span>
          <span className="hb-track"><span style={{ width: `${(d.count / max) * 100}%`, background: PALETTE[i % PALETTE.length] }} /></span>
          <span className="hb-val">{d.count}</span>
        </li>
      ))}
    </ul>
  )
}

// ── Detail drawer ──
function Drawer({ row, onClose, onStatus, onDelete }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', k)
    return () => document.removeEventListener('keydown', k)
  }, [onClose])
  if (!row) return null
  const sections = [
    ['Race', [['Category', row.category], ['City', row.city], ['T-shirt', row.tshirtSize], ['Qualifier', row.qualifierProvided + (row.qualifierFile ? ` · ${row.qualifierFile}` : '')]]],
    ['Runner', [['Gender', row.gender], ['Date of birth', row.dob], ['Blood group', row.bloodGroup], ['Email', row.email], ['Mobile', row.mobile]]],
    ['Emergency & medical', [['Contact', row.emergencyName], ['Mobile', row.emergencyMobile], ['Medical', row.medicalConditions]]],
    ['Payment', [['Entry fee', inr(row.entryFee)], ['Processing', inr(row.processingFee)], ['Total', inr(row.totalAmount)], ['Method', row.paymentMode], ['Registered', row.createdAt ? new Date(row.createdAt).toLocaleString('en-IN') : '—']]],
  ]
  return (
    <div className="drawer-bg" onClick={onClose}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="drawer-head">
          <div>
            <span className="mono small muted">{row.id}</span>
            <h3 className="display">{fullName(row)}</h3>
            <span className={`status ${isPaid(row) ? 'paid' : 'pending'}`}>{row.paymentStatus || '—'}</span>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close"><X size={18} /></button>
        </div>
        <div className="drawer-body">
          {sections.map(([title, items]) => (
            <div className="dl" key={title}>
              <h4>{title}</h4>
              {items.map(([k, v]) => <div key={k}><span>{k}</span><strong>{v || '—'}</strong></div>)}
            </div>
          ))}
        </div>
        <div className="drawer-foot">
          <button className="btn btn-ghost btn-sm danger" onClick={() => onDelete(row)}><Trash2 size={14} /> Delete</button>
          {isPaid(row)
            ? <button className="btn btn-ghost btn-sm" onClick={() => onStatus(row, 'Pending')}>Mark as pending</button>
            : <button className="btn btn-ink btn-sm" onClick={() => onStatus(row, 'Paid')}><BadgeCheck size={14} /> Mark as paid</button>}
        </div>
      </aside>
    </div>
  )
}

// ── Dashboard ──
export default function Admin() {
  const [authed, setAuthed] = useState(() => {
    try { return sessionStorage.getItem(AUTH_KEY) === '1' } catch { return false }
  })
  const [theme, toggleTheme] = useTheme()
  const [view, setView] = useState('overview')
  const [navOpen, setNavOpen] = useState(false)
  const [rows, setRows] = useState([])
  const [vols, setVols] = useState([])
  const [syncedAt, setSyncedAt] = useState(null)
  const [q, setQ] = useState('')
  const [fCat, setFCat] = useState('')
  const [fStatus, setFStatus] = useState('')
  const [selected, setSelected] = useState(null)

  const load = useCallback(() => {
    setRows(listRegistrations())
    setVols(listVolunteers())
    setSyncedAt(new Date())
  }, [])

  useEffect(() => {
    if (!authed) return
    load()
    // pick up registrations made in another tab
    const onStorage = () => load()
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [authed, load])

  useEffect(() => { document.title = 'Admin · ASM Ventures Marathon' }, [])

  const stats = useMemo(() => {
    const revenue = rows.reduce((s, r) => s + (Number(r.totalAmount) || 0), 0)
    const paid = rows.filter(isPaid)
    const byCity = groupBy(rows, 'city')
    return {
      revenue,
      paidRevenue: paid.reduce((s, r) => s + (Number(r.totalAmount) || 0), 0),
      paidCount: paid.length,
      byCategory: groupBy(rows, 'category'),
      byCity,
      bySize: groupBy(rows, 'tshirtSize'),
      byMethod: groupBy(rows, 'paymentMode'),
      emails: new Set(rows.map((r) => String(r.email || '').toLowerCase()).filter(Boolean)).size,
      medical: rows.filter((r) => r.medicalConditions && !/^none$/i.test(String(r.medicalConditions).trim())).length,
      qualifiers: rows.filter((r) => r.qualifierProvided === 'Yes').length,
    }
  }, [rows])

  const filtered = useMemo(() => {
    const n = q.trim().toLowerCase()
    return rows
      .filter((r) => !fCat || r.categoryCode === fCat)
      .filter((r) => !fStatus || (fStatus === 'paid' ? isPaid(r) : !isPaid(r)))
      .filter((r) => !n || [r.id, r.firstName, r.lastName, r.email, r.mobile, r.category, r.city].some((v) => String(v || '').toLowerCase().includes(n)))
      .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')))
  }, [rows, q, fCat, fStatus])

  const filteredVols = useMemo(() => {
    const n = q.trim().toLowerCase()
    return [...vols]
      .filter((v) => !n || [v.name, v.mobile, v.email, v.role].some((x) => String(x || '').toLowerCase().includes(n)))
      .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')))
  }, [vols, q])

  const logout = () => {
    try { sessionStorage.removeItem(AUTH_KEY) } catch { /* ignore */ }
    setAuthed(false)
  }
  const setStatus = (r, status) => {
    updateRegistration(r.id, { paymentStatus: status })
    load()
    setSelected((s) => (s && s.id === r.id ? { ...s, paymentStatus: status } : s))
  }
  const remove = (r) => {
    if (!window.confirm(`Delete registration ${r.id} (${fullName(r)})? This cannot be undone.`)) return
    deleteRegistration(r.id)
    setSelected(null)
    load()
  }
  const removeVol = (v) => {
    if (!window.confirm(`Remove volunteer ${v.name}?`)) return
    deleteVolunteer(v.id)
    load()
  }
  const seed = () => { seedDemoData(); load() }
  const clearAll = () => {
    if (!window.confirm('Delete ALL registrations stored in this browser? This cannot be undone.')) return
    clearRegistrations()
    load()
  }

  if (!authed) return <Login onUnlock={() => setAuthed(true)} />

  const NAV = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'registrations', label: 'Registrations', icon: Users, count: rows.length },
    { id: 'volunteers', label: 'Volunteers', icon: HandHeart, count: vols.length },
  ]
  const TITLES = { overview: 'Overview', registrations: 'Registrations', volunteers: 'Volunteers' }

  return (
    <div className="adm">
      <aside className={`adm-side${navOpen ? ' open' : ''}`}>
        <div className="adm-brand"><Logo light /></div>
        <nav>
          {NAV.map(({ id, label, icon: I, count }) => (
            <button key={id} className={view === id ? 'on' : ''} onClick={() => { setView(id); setNavOpen(false); setQ('') }}>
              <I size={18} /> {label}{count != null && <span className="adm-count">{count}</span>}
            </button>
          ))}
        </nav>
        <div className="adm-side-foot">
          <button onClick={toggleTheme}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />} {theme === 'dark' ? 'Light' : 'Dark'} mode</button>
          <Link to="/"><ExternalLink size={18} /> View website</Link>
          <button onClick={logout}><LogOut size={18} /> Log out</button>
        </div>
      </aside>
      {navOpen && <div className="adm-scrim" onClick={() => setNavOpen(false)} />}

      <div className="adm-main">
        <header className="adm-top">
          <button className="icon-btn adm-burger" onClick={() => setNavOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
          <div>
            <h1 className="display">{TITLES[view]}</h1>
            <span className="adm-sync"><i />{syncedAt ? `Synced ${syncedAt.toLocaleTimeString('en-IN')}` : 'Loading…'} · stored in this browser</span>
          </div>
          <div className="adm-actions">
            {view !== 'overview' && (
              <label className="adm-search">
                <Search size={16} />
                <input placeholder={view === 'volunteers' ? 'Search volunteers…' : 'Search name, email, ref…'} value={q} onChange={(e) => setQ(e.target.value)} />
              </label>
            )}
            <button className="icon-btn" onClick={load} title="Refresh" aria-label="Refresh"><RefreshCw size={18} /></button>
          </div>
        </header>

        {view === 'overview' && (
          rows.length === 0 ? (
            <div className="adm-empty card">
              <Database size={36} />
              <h3 className="display">No registrations yet</h3>
              <p className="muted">Registrations made on the website's Register page appear here. To preview the dashboard, load some demo data.</p>
              <div className="center-row">
                <button className="btn btn-ink" onClick={seed}><Database size={16} /> Load demo data</button>
                <Link className="btn btn-ghost" to="/register">Open register page</Link>
              </div>
            </div>
          ) : (
            <>
              <div className="kpis">
                <div className="kpi"><span className="kpi-ic tone-cobalt"><Users size={18} /></span><span className="kpi-lbl">Registrations</span><strong className="display">{rows.length}</strong><small>{stats.emails} unique emails</small></div>
                <div className="kpi"><span className="kpi-ic tone-mint"><IndianRupee size={18} /></span><span className="kpi-lbl">Revenue</span><strong className="display">{inr(stats.revenue)}</strong><small>{inr(stats.paidRevenue)} collected</small></div>
                <div className="kpi"><span className="kpi-ic tone-violet"><BadgeCheck size={18} /></span><span className="kpi-lbl">Paid</span><strong className="display">{Math.round((stats.paidCount / rows.length) * 100)}%</strong><small>{rows.length - stats.paidCount} pending</small></div>
                <div className="kpi"><span className="kpi-ic tone-flame"><MapPin size={18} /></span><span className="kpi-lbl">Cities</span><strong className="display">{stats.byCity.length}</strong><small>top: {stats.byCity[0]?.label}</small></div>
              </div>

              <div className="adm-grid">
                <section className="panel span-2">
                  <div className="panel-head"><h3>Sign-ups · last 14 days</h3></div>
                  <DailyBars rows={rows} />
                </section>
                <section className="panel">
                  <div className="panel-head"><h3>By category</h3></div>
                  <Donut data={stats.byCategory} total={rows.length} />
                </section>
                <section className="panel">
                  <div className="panel-head"><h3>By city</h3></div>
                  <Bars data={stats.byCity} />
                </section>
                <section className="panel">
                  <div className="panel-head"><h3>T-shirt sizes</h3></div>
                  <Bars data={stats.bySize} />
                </section>
                <section className="panel">
                  <div className="panel-head"><h3>At a glance</h3></div>
                  <ul className="glance">
                    <li><span>Avg. ticket value</span><strong>{inr(Math.round(stats.revenue / rows.length))}</strong></li>
                    <li><span>Qualifier uploads</span><strong>{stats.qualifiers}</strong></li>
                    <li><span>Medical flags</span><strong>{stats.medical}</strong></li>
                    <li><span>Volunteers</span><strong>{vols.length}</strong></li>
                    <li><span>Top payment method</span><strong>{stats.byMethod[0]?.label || '—'}</strong></li>
                  </ul>
                </section>
                <section className="panel span-3">
                  <div className="panel-head">
                    <h3>Latest registrations</h3>
                    <button className="btn btn-ghost btn-sm" onClick={() => setView('registrations')}>View all <ArrowRight size={14} /></button>
                  </div>
                  <RegTable rows={filtered.slice(0, 6)} onOpen={setSelected} compact />
                </section>
              </div>
            </>
          )
        )}

        {view === 'registrations' && (
          <>
            <div className="adm-toolbar">
              <div className="adm-filters">
                <select className="input input-sm" value={fCat} onChange={(e) => setFCat(e.target.value)} aria-label="Filter by category">
                  <option value="">All categories</option>
                  {CATEGORIES.map((c) => <option key={c.code} value={c.code}>{c.label}</option>)}
                </select>
                <select className="input input-sm" value={fStatus} onChange={(e) => setFStatus(e.target.value)} aria-label="Filter by status">
                  <option value="">All statuses</option><option value="paid">Paid</option><option value="pending">Pending</option>
                </select>
                <span className="muted small">{filtered.length} of {rows.length}</span>
              </div>
              <div className="adm-filters">
                <button className="btn btn-ghost btn-sm" onClick={seed}><Database size={14} /> Add demo data</button>
                {rows.length > 0 && <button className="btn btn-ghost btn-sm danger" onClick={clearAll}><Trash2 size={14} /> Clear all</button>}
                <button className="btn btn-ink btn-sm" onClick={() => downloadCsv(filtered, REG_COLS, 'asm-registrations.csv')} disabled={!filtered.length}><Download size={14} /> Export CSV</button>
              </div>
            </div>
            {filtered.length === 0
              ? <div className="adm-empty card"><Search size={28} /><p className="muted">{rows.length ? 'No registrations match these filters.' : 'No registrations yet.'}</p></div>
              : <div className="panel flush"><RegTable rows={filtered} onOpen={setSelected} /></div>}
          </>
        )}

        {view === 'volunteers' && (
          <>
            <div className="adm-toolbar">
              <span className="muted small">{filteredVols.length} applications</span>
              <button className="btn btn-ink btn-sm" onClick={() => downloadCsv(filteredVols, VOL_COLS, 'asm-volunteers.csv')} disabled={!filteredVols.length}><Download size={14} /> Export CSV</button>
            </div>
            {filteredVols.length === 0 ? (
              <div className="adm-empty card"><HandHeart size={28} /><p className="muted">No volunteer applications yet. They come from the form on the Expo & Contact page.</p></div>
            ) : (
              <div className="panel flush">
                <div className="table-wrap plain">
                  <table className="table">
                    <thead><tr><th>Name</th><th>Role</th><th>Mobile</th><th>Email</th><th>Applied</th><th /></tr></thead>
                    <tbody>
                      {filteredVols.map((v) => (
                        <tr key={v.id}>
                          <td><strong>{v.name}</strong></td><td>{v.role}</td><td className="num">{v.mobile}</td>
                          <td>{v.email || '—'}</td><td className="num">{fmtDate(v.createdAt)}</td>
                          <td><button className="icon-btn sm" onClick={() => removeVol(v)} aria-label={`Remove ${v.name}`}><Trash2 size={14} /></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        <p className="adm-note"><ShieldAlert size={14} /> Front-end preview: data lives in this browser's local storage only. Connect an API in <code>src/lib/store.js</code> for shared, permanent data.</p>
      </div>

      <Drawer row={selected} onClose={() => setSelected(null)} onStatus={setStatus} onDelete={remove} />
    </div>
  )
}

function RegTable({ rows, onOpen, compact }) {
  return (
    <div className="table-wrap plain">
      <table className="table hover">
        <thead>
          <tr>
            <th>Runner</th><th>Category</th>{!compact && <th>City</th>}{!compact && <th>Mobile</th>}
            {!compact && <th>Tee</th>}<th>Amount</th><th>Status</th><th>Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} onClick={() => onOpen(r)} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onOpen(r)}>
              <td>
                <div className="who">
                  <span className="avatar" style={{ background: catColor(r.categoryCode) }}>{(r.firstName || '?')[0]}{(r.lastName || '')[0]}</span>
                  <div><strong>{fullName(r)}</strong><small>{r.email}</small></div>
                </div>
              </td>
              <td><span className="cat-tag" style={{ '--c': catColor(r.categoryCode) }}>{r.category}</span></td>
              {!compact && <td>{r.city}</td>}
              {!compact && <td className="num">{r.mobile}</td>}
              {!compact && <td>{r.tshirtSize}</td>}
              <td className="num"><strong>{inr(r.totalAmount)}</strong></td>
              <td><span className={`status ${isPaid(r) ? 'paid' : 'pending'}`}>{r.paymentStatus || '—'}</span></td>
              <td className="num">{fmtDate(r.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
