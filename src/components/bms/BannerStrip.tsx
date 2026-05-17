import { ArrowRight } from 'lucide-react';
import { promoStrips } from './data';

interface BannerStripProps {
  /** index into promoStrips (BookMyShow shows these as separate ad rows) */
  index: number;
}

export default function BannerStrip({ index }: BannerStripProps) {
  const b = promoStrips[index % promoStrips.length];

  return (
    <section className="py-6 lg:py-8 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <a
          href={b.href}
          className="group relative block overflow-hidden rounded-2xl h-[160px] sm:h-[200px] lg:h-[240px]"
        >
          <img
            src={b.image}
            alt={b.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/60 to-dark-900/20" />
          <div className="relative h-full flex flex-col justify-center px-6 lg:px-14 max-w-xl">
            <span className="text-primary-400 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-2">
              {b.eyebrow}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              {b.title}{' '}
              <span className="italic text-primary-400">{b.accent}</span>
            </h3>
            <p className="mt-2 text-white/70 text-sm sm:text-base max-w-md font-light">
              {b.description}
            </p>
            <span className="mt-4 inline-flex w-fit items-center gap-2 bg-primary-600 group-hover:bg-primary-700 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase px-6 py-3 rounded-full transition-colors">
              {b.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
