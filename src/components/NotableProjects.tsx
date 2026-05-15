import { Trophy, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'FIT Patna Marathon',
    description: 'A large-scale fitness and awareness event bringing together thousands of participants for a healthy cause.',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80',
    category: 'Sports Event',
  },
  {
    title: 'Bihar Couture Runway',
    description: 'Premier fashion and lifestyle event showcasing the finest talent and designs from the region.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
    category: 'Fashion Show',
  },
  {
    title: 'Corporate Brand Launches',
    description: 'Successful promotional events for various brands and partners, creating lasting market impact.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    category: 'Brand Promotion',
  },
];

export default function NotableProjects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="eyebrow">Notable Projects</span>
            <div className="accent-line" />
          </div>
          <h2 className="section-title mb-6">
            Events That Made
            <span className="font-serif italic text-primary-600"> An Impact</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Showcasing some of our most successful and memorable events that have set new benchmarks in the industry.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-dark-900 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Banner */}
        <div className="mt-16 bg-dark-900 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center">
                <Trophy className="w-8 h-8 text-primary-400" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-white">
                  Award-Winning Event Management
                </h3>
                <p className="text-white/60">
                  Recognized for excellence in event execution and innovation
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
