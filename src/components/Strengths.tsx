import { Users, Network, Lightbulb, Clock, HeartHandshake } from 'lucide-react';

const strengths = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Experienced & Dedicated Team',
    description: 'Our skilled professionals bring years of expertise and passion to every event.',
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Strong Vendor Network',
    description: 'Access to premium vendors and suppliers ensuring quality and reliability.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Creative Approach',
    description: 'Innovative concepts with meticulous attention to every detail.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'On-Time & Budget-Friendly',
    description: 'Delivering excellence within your timeline and budget constraints.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Client-Centric Approach',
    description: 'Your vision is our priority. We listen, adapt, and exceed expectations.',
  },
];

export default function Strengths() {
  return (
    <section className="py-20 lg:py-32 bg-dark-900">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-primary-500" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary-400">
              Our Strengths
            </span>
            <div className="h-[1px] w-8 bg-primary-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.05] mb-6">
            What Sets Us
            <span className="font-serif italic text-primary-400"> Apart</span>
          </h2>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.slice(0, 3).map((strength, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center mb-6">
                <div className="text-primary-400">{strength.icon}</div>
              </div>
              <h3 className="text-xl font-serif font-medium text-white mb-3">
                {strength.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 items centered */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          {strengths.slice(3).map((strength, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center mb-6">
                <div className="text-primary-400">{strength.icon}</div>
              </div>
              <h3 className="text-xl font-serif font-medium text-white mb-3">
                {strength.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
