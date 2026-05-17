import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { banners } from './data';

const INTERVAL_MS = 5000;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const count = banners.length;

  const go = useCallback(
    (next: number) => setIndex((next + count) % count),
    [count]
  );

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => clearInterval(t);
  }, [count]);

  return (
    <section id="home" className="bg-dark-900 pt-4 lg:pt-6 pb-8">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="group relative overflow-hidden rounded-2xl">
          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {banners.map((b) => (
              <div
                key={b.id}
                className="relative w-full shrink-0 h-[180px] sm:h-[260px] lg:h-[340px]"
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/55 to-transparent" />
                <div className="relative h-full container mx-auto px-6 lg:px-14 flex flex-col justify-center max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-[1px] w-8 bg-primary-500" />
                    <span className="text-primary-400 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase">
                      {b.eyebrow}
                    </span>
                  </div>
                  <h2 className="font-serif text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                    {b.title}{' '}
                    <span className="italic text-primary-400">{b.accent}</span>
                  </h2>
                  <p className="mt-3 text-white/75 text-sm sm:text-base max-w-md font-light">
                    {b.description}
                  </p>
                  <a
                    href={b.href}
                    className="mt-6 inline-flex w-fit items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase px-6 py-3 rounded-full transition-all hover:scale-105"
                  >
                    {b.cta}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-dark-900 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-dark-900 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index
                    ? 'w-8 bg-primary-500'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
