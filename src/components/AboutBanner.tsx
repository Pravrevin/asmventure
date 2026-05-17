import { ChevronRight } from 'lucide-react';

/**
 * Page-title banner shown at the top of the standalone About page.
 * Dark image hero so the transparent site header stays readable above it.
 */
export default function AboutBanner() {
  return (
    <section className="relative bg-dark-900 pt-28 lg:pt-36 pb-14 lg:pb-20 overflow-hidden">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/85 to-dark-900/40" />
        <div className="absolute -top-10 right-1/4 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
          <a href="#home" className="hover:text-primary-400 transition-colors">
            Home
          </a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary-400">About Us</span>
        </nav>

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-10 bg-primary-500" />
          <span className="text-primary-400 text-xs font-bold tracking-[0.4em] uppercase">
            ASM Ventures
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          About <span className="italic text-primary-400">Us</span>
        </h1>

        <p className="mt-4 text-white/70 text-base lg:text-lg max-w-2xl font-light">
          A dynamic and innovative event management company creating impactful,
          engaging and seamlessly executed experiences across India.
        </p>
      </div>
    </section>
  );
}
