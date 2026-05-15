import { MessageSquare, ClipboardList, Palette, Settings, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Understanding Requirements',
    description: 'We begin by deeply understanding your vision, goals, and expectations to create a tailored event strategy.',
  },
  {
    number: '02',
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Strategic Planning & Concept',
    description: 'Developing comprehensive plans and creative concepts that align with your objectives and budget.',
  },
  {
    number: '03',
    icon: <Palette className="w-6 h-6" />,
    title: 'Creative Design & Execution',
    description: 'Bringing concepts to life through innovative design, vendor coordination, and meticulous preparation.',
  },
  {
    number: '04',
    icon: <Settings className="w-6 h-6" />,
    title: 'Seamless Event Management',
    description: 'Flawless on-site execution with dedicated coordination to ensure everything runs smoothly.',
  },
  {
    number: '05',
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Post-Event Analysis & Support',
    description: 'Comprehensive feedback collection and analysis to continuously improve our services.',
  },
];

export default function Approach() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="eyebrow">Our Approach</span>
            <div className="accent-line" />
          </div>
          <h2 className="section-title mb-6">
            How We Work
            <span className="font-serif italic text-primary-600"> With You</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our proven methodology ensures every event is executed with precision, creativity, and excellence.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary-200 via-primary-500 to-primary-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Step Card */}
                <div className="bg-cream rounded-2xl p-6 text-center hover:shadow-lg transition-shadow h-full">
                  {/* Number & Icon */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
                      <div className="text-primary-600">{step.icon}</div>
                    </div>
                    <span className="absolute -top-1 -right-1 w-8 h-8 bg-primary-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-serif font-medium text-dark-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ready to start planning your next event?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-dark-900 hover:bg-dark-800 text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Let's Discuss Your Event
          </a>
        </div>
      </div>
    </section>
  );
}
