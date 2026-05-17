import { Sparkles, ArrowRight } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Events Delivered' },
  { value: '50+', label: 'Brand Partners' },
  { value: '10+', label: 'Years of Craft' },
  { value: '100%', label: 'On-Time Execution' },
];

export default function PromoBanner() {
  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-dark-900 via-dark-800 to-primary-800">
          {/* Glow accents */}
          <div className="absolute -top-16 -right-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-primary-600/15 rounded-full blur-3xl" />

          <div className="relative px-6 lg:px-14 py-10 lg:py-14 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-4 text-primary-400">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase">
                  Find events that match your vibe
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-medium text-white leading-tight">
                Let&apos;s plan your
                <span className="italic text-primary-400"> perfect event</span>
              </h2>
              <p className="mt-3 text-white/70 max-w-lg mx-auto lg:mx-0">
                From the first idea to the final encore — ASM Ventures handles
                strategy, production and flawless on-ground delivery.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold tracking-wide uppercase px-7 py-3.5 rounded-full transition-all hover:scale-105"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden shrink-0">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-dark-900/40 backdrop-blur-sm px-7 py-6 text-center"
                >
                  <div className="font-serif text-3xl lg:text-4xl font-bold text-primary-400">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-white/60 tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
