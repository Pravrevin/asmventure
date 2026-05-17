import { useEffect, useState } from 'react';
import Header from './components/Header';
import CategoryNav from './components/bms/CategoryNav';
import Carousel from './components/bms/Carousel';
import CardRail from './components/bms/CardRail';
import EventRail from './components/bms/EventRail';
import BannerStrip from './components/bms/BannerStrip';
import PromoBanner from './components/bms/PromoBanner';
import CategoryStrip from './components/bms/CategoryStrip';
import AppBand from './components/bms/AppBand';
import SiteFooter from './components/bms/SiteFooter';
import AboutBanner from './components/AboutBanner';
import About from './components/About';
import VisionMission from './components/VisionMission';
import WhyChooseUs from './components/WhyChooseUs';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import { featuredEvents, services } from './components/bms/data';

type View = 'home' | 'about';

function viewFromHash(): View {
  return window.location.hash.replace('#', '') === 'about' ? 'about' : 'home';
}

function App() {
  const [view, setView] = useState<View>(viewFromHash());
  const [isScrolled, setIsScrolled] = useState(false);

  // Hash-based routing: #about => standalone About page,
  // any other hash => homepage (and scroll to that section).
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const next: View = hash === 'about' ? 'about' : 'home';
      setView(next);

      if (next === 'about') {
        window.scrollTo({ top: 0 });
        return;
      }

      const targetId = hash && hash !== 'home' ? hash : null;
      // Allow the home layout to mount (when coming back from /#about)
      // before scrolling; works for same-view anchors too.
      window.setTimeout(() => {
        if (targetId) {
          document
            .getElementById(targetId)
            ?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0 });
        }
      }, 60);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (view === 'about') {
    return (
      <div className="min-h-screen bg-white">
        {/* Transparent header overlays the dark About banner, like the home hero */}
        <Header isScrolled={isScrolled} />
        <main>
          <AboutBanner />
          <About />
          <VisionMission />
          <WhyChooseUs />
          <Strengths />
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <main>
        {/* BMS-style category sub-nav (on the dark carousel backdrop) */}
        <CategoryNav />

        {/* Hero banner carousel */}
        <Carousel />

        {/* "Recommended" poster rail */}
        <CardRail
          id="projects"
          title="Recommended"
          highlight="For You"
          items={featuredEvents}
          seeAllHref="#projects"
        />

        {/* Mid-page promotional banner */}
        <BannerStrip index={0} />

        {/* "Live Events" landscape rail */}
        <EventRail
          title="The Best of"
          highlight="Live Events"
          seeAllHref="#projects"
        />

        {/* Stats / quote promo */}
        <PromoBanner />

        {/* "Premium Services" poster rail */}
        <CardRail
          id="services"
          title="Premium"
          highlight="Services"
          items={services}
          seeAllHref="#services"
        />

        {/* Second promotional banner */}
        <BannerStrip index={1} />

        {/* Category tiles */}
        <CategoryStrip />

        {/* Contact / enquiry */}
        <Contact />

        {/* "Get the App"-style CTA band */}
        <AppBand />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
