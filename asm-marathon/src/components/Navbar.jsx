import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react'
import { PATHS } from '../lib/paths.js'
import useTheme from '../lib/useTheme.js'
import Logo from './Logo.jsx'

const LINKS = [
  { to: PATHS.home, label: 'Home', end: true },
  { to: PATHS.categories, label: 'Races' },
  { to: PATHS.about, label: 'About' },
  { to: PATHS.athlete, label: 'Athlete Guide' },
  { to: PATHS.rules, label: 'Rules & FAQ' },
  { to: PATHS.expo, label: 'Expo & Contact' },
  { to: PATHS.blog, label: 'Journal' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, toggleTheme] = useTheme()
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <Link to={PATHS.home} className="nav-brand" aria-label="ASM Ventures Marathon — home"><Logo /></Link>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.to}><NavLink to={l.to} end={l.end}>{l.label}</NavLink></li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle colour theme" title="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to={PATHS.registration} className="btn btn-volt btn-sm nav-cta">Register <ArrowUpRight size={16} /></Link>
          <button className="icon-btn nav-burger" onClick={() => setOpen((v) => !v)} aria-label="Open menu" aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={`sheet${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="sheet-links">
          {LINKS.map((l, i) => (
            <NavLink key={l.to} to={l.to} end={l.end} style={{ transitionDelay: `${open ? 60 + i * 35 : 0}ms` }}>
              <span className="mono">{String(i + 1).padStart(2, '0')}</span>{l.label}
            </NavLink>
          ))}
        </div>
        <div className="sheet-foot">
          <button className="btn btn-ghost" onClick={toggleTheme}>
            {theme === 'dark' ? <><Sun size={16} /> Light mode</> : <><Moon size={16} /> Dark mode</>}
          </button>
          <Link to={PATHS.registration} className="btn btn-volt">Register now <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </>
  )
}
