import { Eye, Target, CheckCircle2 } from 'lucide-react';

const missionPoints = [
  'To provide end-to-end event solutions tailored to client needs',
  'To maintain high standards of professionalism and innovation',
  'To create memorable experiences that connect people and brands',
  'To execute events with precision, passion, and perfection',
];

export default function VisionMission() {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                <Eye className="w-7 h-7 text-primary-600" />
              </div>
              <span className="eyebrow">Our Vision</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-serif font-medium text-dark-900 mb-6">
              Leading Event Management
              <span className="italic text-primary-600"> Across India</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become a leading event management company known for creativity, reliability, and delivering
              exceptional experiences across India. We envision transforming the event landscape with innovative
              concepts and flawless execution.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-dark-900 rounded-2xl p-8 lg:p-12 shadow-lg text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary-600/20 rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-primary-400" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary-400">
                Our Mission
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-serif font-medium text-white mb-8">
              Delivering Excellence
              <span className="italic text-primary-400"> Every Time</span>
            </h3>
            <ul className="space-y-4">
              {missionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
