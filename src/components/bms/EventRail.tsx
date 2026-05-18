import { useRef } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Calendar } from 'lucide-react';
import { liveEvents } from './data';

interface EventRailProps {
  id?: string;
  title: string;
  highlight?: string;
  seeAllHref?: string;
}

export default function EventRail({
  id,
  title,
  highlight,
  seeAllHref = '#projects',
}: EventRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section id={id} className="py-8 lg:py-10 bg-cream/40">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex items-end justify-between mb-5">
          <h2 className="font-serif text-2xl lg:text-[28px] font-medium text-dark-900">
            {title}
            {highlight && (
              <span className="italic text-primary-600"> {highlight}</span>
            )}
          </h2>
          <a
            href={seeAllHref}
            className="group flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            See All
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2 -mx-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {liveEvents.map((ev) => (
              <a
                key={ev.id}
                href="#events"
                className="group/card shrink-0 w-[280px] sm:w-[320px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-900/70 to-transparent" />
                  <span className="absolute top-3 left-3 bg-white/95 text-dark-900 text-[11px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                    {ev.category}
                  </span>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5 text-primary-400" />
                    {ev.date}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-dark-900 truncate group-hover/card:text-primary-600 transition-colors">
                    {ev.title}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1.5 text-[13px] text-gray-500">
                    <MapPin className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                    <span className="truncate">{ev.venue}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[13px] text-gray-500">
                      Managed by{' '}
                      <span className="text-dark-900 font-medium">ASM</span>
                    </span>
                    <span className="text-[13px] font-semibold text-primary-600 group-hover/card:translate-x-0.5 transition-transform">
                      Know More ›
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="hidden lg:flex absolute -left-4 top-[30%] w-9 h-9 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-dark-900 hover:bg-primary-600 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="hidden lg:flex absolute -right-4 top-[30%] w-9 h-9 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-dark-900 hover:bg-primary-600 hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
