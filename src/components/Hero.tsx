import { useEffect, useState } from 'react';
import { ChevronRight, Calendar, Sparkles, Users } from 'lucide-react';

interface Slide {
  id: number;
  subtitle: string;
  title: string;
  accent: string;
  description: string;
  icon: React.ReactNode;
}

const slides: Slide[] = [
  {
    id: 1,
    subtitle: 'Event Management Excellence',
    title: 'Creating',
    accent: 'Unforgettable',
    description: 'Transform your vision into reality with our expert event planning and execution services. From concept to completion, we deliver excellence.',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: 2,
    subtitle: 'Corporate Events',
    title: 'Professional',
    accent: 'Gatherings',
    description: 'Elevate your corporate events with seamless planning, innovative concepts, and flawless execution that leaves lasting impressions.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 3,
    subtitle: 'Wedding & Social',
    title: 'Dream',
    accent: 'Weddings',
    description: 'Make your special day truly magical with our bespoke wedding planning services, creating memories that last a lifetime.',
    icon: <Calendar className="w-6 h-6" />,
  },
];

const SLIDE_INTERVAL_MS = 6000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-700/10 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Slide Content */}
          <div key={slide.id} className="animate-fade-in">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-600/20 border border-primary-500/30 rounded-full mb-8">
              <div className="text-primary-400">{slide.icon}</div>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-primary-500/60" />
              <span className="text-primary-400 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
                {slide.subtitle}
              </span>
              <div className="h-[1px] w-12 bg-primary-500/60" />
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] tracking-tight mb-6">
              {slide.title}
              <br />
              <span className="italic text-primary-400">{slide.accent}</span>
              <br />
              <span className="text-white/90">Experiences</span>
            </h1>

            {/* Description */}
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all hover:scale-105"
              >
                Explore Services
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center justify-center gap-3 mt-16">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === idx
                    ? 'w-10 bg-primary-500'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
