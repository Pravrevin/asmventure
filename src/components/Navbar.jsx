import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Moon, Sun, ArrowUpRight } from 'lucide-react'
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
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`}>
        <div className="container nav-inner">
          <Link to={PATHS.home} className="nav-brand" aria-label="ASM Ventures Marathon — home"><Logo /></Link>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.to}><NavLink to={l.to} end={l.end}>{l.label}</NavLink></li>
            ))}
          </ul>
          <div className="nav-right">
            <button className="icon-btn nav-icon" onClick={toggleTheme} aria-label="Toggle colour theme" title="Toggle theme">
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <Link to={PATHS.registration} className="btn btn-volt btn-sm nav-cta">Register <ArrowUpRight size={15} /></Link>
            <button className="nav-burger" onClick={() => setOpen((v) => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
              <span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`sheet${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="container sheet-inner">
          <div className="sheet-links">
            {LINKS.map((l, i) => (
              <NavLink key={l.to} to={l.to} end={l.end} style={{ transitionDelay: `${open ? 80 + i * 40 : 0}ms` }}>
                <span className="sheet-n">{String(i + 1).padStart(2, '0')}</span>{l.label}
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
      </div>
    </>
  )
}
