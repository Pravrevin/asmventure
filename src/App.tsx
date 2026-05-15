import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Strengths from './components/Strengths';
import WhyChooseUs from './components/WhyChooseUs';
import NotableProjects from './components/NotableProjects';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Strengths />
        <WhyChooseUs />
        <NotableProjects />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
