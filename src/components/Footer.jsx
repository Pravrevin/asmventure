import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, Twitter, ArrowUpRight } from 'lucide-react'
import { PATHS } from '../lib/paths.js'
import { BRAND } from '../data/site.js'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-cta">
        <img src="/images/sunset-runner.jpg" alt="" />
        <div className="footer-cta-shade" />
        <div className="container footer-cta-inner">
          <div className="eyebrow">Edition 2027 · Limited slots</div>
          <h3 className="display">Your start line <em>is waiting.</em></h3>
          <Link to={PATHS.registration} className="btn btn-volt btn-lg">Claim your bib <ArrowUpRight size={18} /></Link>
        </div>
      </section>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>Patna's premier community running festival, produced by {BRAND.company}. Every stride powers a greener, fitter Bihar.</p>
            <div className="socials">
              <a href="#" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={17} /></a>
              <a href="#" aria-label="X / Twitter"><Twitter size={17} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={17} /></a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to={PATHS.categories}>Race categories</Link></li>
              <li><Link to={PATHS.registration}>Register</Link></li>
              <li><Link to={PATHS.about}>About us</Link></li>
              <li><Link to={PATHS.athlete}>Athlete guide</Link></li>
              <li><Link to={PATHS.blog}>Journal</Link></li>
            </ul>
          </div>
          <div>
            <h4>Race Day</h4>
            <ul>
              <li><Link to={PATHS.rules}>Rules & regulations</Link></li>
              <li><Link to={PATHS.rules}>FAQs</Link></li>
              <li><Link to={PATHS.expo}>Bib expo</Link></li>
              <li><Link to={PATHS.expo}>Sponsors</Link></li>
              <li><Link to={PATHS.expo}>Volunteer</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></li>
              <li><span>{BRAND.phone}</span></li>
              <li><span>{BRAND.city}</span></li>
            </ul>
          </div>
        </div>

        {/* SVG text stretched to the container width so the wordmark always fits */}
        <svg className="footer-word" viewBox="0 0 1000 120" aria-hidden="true">
          <defs>
            <linearGradient id="fw" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F4F1EA" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#F4F1EA" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <text x="0" y="104" textLength="1000" lengthAdjust="spacingAndGlyphs" fill="url(#fw)">ASM Ventures</text>
        </svg>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {BRAND.company}. All rights reserved.</span>
          <span className="footer-legal">
            <a href="#">Privacy</a><a href="#">Refunds</a><a href="#">Terms</a><a href="#">Waiver</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
