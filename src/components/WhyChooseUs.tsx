import { Star, CheckCircle2 } from 'lucide-react';

const reasons = [
  'We don\'t just manage events—we create experiences',
  'Ability to understand client needs',
  'Creative execution and operational excellence',
  'Trusted partner for all types of events',
  'End-to-end event solutions',
  'Professional and dedicated team',
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="eyebrow">Why Choose Us</span>
              <div className="accent-line" />
            </div>

            <h2 className="section-title mb-6">
              Your Trusted Event
              <span className="font-serif italic text-primary-600"> Partner</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              At ASM Ventures, we don't just manage events—we create experiences. Our ability to understand
              client needs, combined with our creative execution and operational excellence, makes us a trusted
              partner for all types of events.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary-200 border-2 border-white flex items-center justify-center"
                  >
                    <Star className="w-4 h-4 text-primary-700" />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-dark-900">500+ Happy Clients</div>
                <div className="text-sm text-gray-600">Trust us with their events</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80"
                    alt="Corporate Event"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80"
                    alt="Wedding Event"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80"
                    alt="Conference"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80"
                    alt="Celebration"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-100 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-50 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
