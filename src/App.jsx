import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { PATHS } from './lib/paths.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Categories from './pages/Categories.jsx'
import Registration from './pages/Registration.jsx'
import About from './pages/About.jsx'
import Athlete from './pages/Athlete.jsx'
import Rules from './pages/Rules.jsx'
import Expo from './pages/Expo.jsx'
import Blog from './pages/Blog.jsx'
import Admin from './pages/Admin.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Public site: floating nav + footer around each page
function Site({ children }) {
  return (
    <>
      <Navbar />
      <main className="page">{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={PATHS.home} element={<Site><Home /></Site>} />
        <Route path={PATHS.categories} element={<Site><Categories /></Site>} />
        <Route path={PATHS.registration} element={<Site><Registration /></Site>} />
        <Route path={PATHS.about} element={<Site><About /></Site>} />
        <Route path={PATHS.athlete} element={<Site><Athlete /></Site>} />
        <Route path={PATHS.rules} element={<Site><Rules /></Site>} />
        <Route path={PATHS.expo} element={<Site><Expo /></Site>} />
        <Route path={PATHS.blog} element={<Site><Blog /></Site>} />
        <Route path={`${PATHS.blog}/:slug`} element={<Site><Blog /></Site>} />
        {/* Admin has its own full-screen dashboard layout */}
        <Route path={PATHS.admin} element={<Admin />} />
        <Route path="*" element={<Site><Home /></Site>} />
      </Routes>
    </BrowserRouter>
  )
}
