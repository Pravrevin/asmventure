import { Target, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
                alt="Event Management"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-50 rounded-2xl -z-10" />

            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-4 lg:right-8 bg-white rounded-xl shadow-xl p-6 max-w-[200px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-600" />
                </div>
              </div>
              <div className="text-3xl font-serif font-bold text-dark-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">Events Successfully Managed</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="eyebrow">About Us</span>
              <div className="accent-line" />
            </div>

            <h2 className="section-title mb-6">
              Dynamic & Innovative
              <br />
              <span className="font-serif italic text-primary-600">Event Management</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              ASM Ventures is a dynamic and innovative event management company specializing in creating
              impactful, engaging, and seamlessly executed events. With a strong presence in Bihar and beyond,
              we bring ideas to life through strategic planning, creative execution, and flawless management.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              From large-scale public events to corporate functions and lifestyle experiences, ASM Ventures is
              committed to delivering excellence, ensuring every event leaves a lasting impression.
            </p>

            {/* Location Badge */}
            <div className="flex items-center gap-3 text-gray-700 mb-8">
              <MapPin className="w-5 h-5 text-primary-600" />
              <span className="font-medium">Based in Bihar, Serving Across India</span>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-cream rounded-xl">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 mb-1">Precision Planning</h4>
                  <p className="text-sm text-gray-600">Meticulous attention to every detail</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-cream rounded-xl">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <SparklesIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 mb-1">Creative Excellence</h4>
                  <p className="text-sm text-gray-600">Innovative concepts and designs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SparklesIcon() {
  return (
    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
