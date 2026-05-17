import { useRef } from 'react';
import { ChevronRight, ChevronLeft, ThumbsUp } from 'lucide-react';
import type { PosterCard } from './data';

interface CardRailProps {
  id?: string;
  title: string;
  highlight?: string;
  items: PosterCard[];
  seeAllHref?: string;
}

export default function CardRail({
  id,
  title,
  highlight,
  items,
  seeAllHref = '#projects',
}: CardRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section id={id} className="py-8 lg:py-10 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Header */}
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

        {/* Rail */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2 -mx-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((card) => (
              <a
                key={card.id}
                href={seeAllHref}
                className="group/card shrink-0 w-[180px] sm:w-[200px]"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[2/3] shadow-md">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent px-2.5 pt-6 pb-2 flex items-center gap-1.5 text-xs">
                    <ThumbsUp className="w-3.5 h-3.5 fill-primary-400 text-primary-400" />
                    <span className="text-white font-bold">{card.tag}</span>
                    <span className="text-white/55">· {card.subtitle}</span>
                  </div>
                </div>
                <h3 className="mt-2.5 text-[15px] font-semibold text-dark-900 truncate group-hover/card:text-primary-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-[13px] text-gray-500 truncate">{card.meta}</p>
              </a>
            ))}
          </div>

          {/* Desktop scroll arrows */}
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="hidden lg:flex absolute -left-4 top-[34%] w-9 h-9 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-dark-900 hover:bg-primary-600 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="hidden lg:flex absolute -right-4 top-[34%] w-9 h-9 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-dark-900 hover:bg-primary-600 hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
