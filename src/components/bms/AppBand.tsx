import { Phone, Mail, Smartphone } from 'lucide-react';

/**
 * BookMyShow's "Get the App" band — re-themed to ASM gold/cream as a
 * "talk to us" call-to-action strip.
 */
export default function AppBand() {
  return (
    <section className="bg-cream">
      <div className="container mx-auto px-4 lg:px-12 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-3 text-primary-600">
              <Smartphone className="w-4 h-4" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase">
                Plan On The Go
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-dark-900 leading-tight">
              Planning an event?
              <span className="italic text-primary-600"> Talk to ASM Ventures</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-lg mx-auto lg:mx-0">
              Get a tailored proposal within 24 hours — from concept and budgeting
              to production and flawless on-ground execution.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
              >
                <Mail className="w-4 h-4" />
                Enquire Now
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
                alt="ASM Ventures event planning"
                className="w-full h-56 lg:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
