import { 
  Briefcase, 
  Megaphone, 
  Heart, 
  Palette, 
  Camera,
  Building2,
  Landmark,
  Music,
  Trophy,
  Shirt,
  Store,
  Users,
  Video,
  PartyPopper,
  Lightbulb
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Event Management',
    icon: <Briefcase className="w-6 h-6" />,
    description: 'Comprehensive event planning and execution for all occasions',
    items: [
      { icon: <Building2 className="w-4 h-4" />, label: 'Corporate Events' },
      { icon: <Landmark className="w-4 h-4" />, label: 'Government Events' },
      { icon: <Music className="w-4 h-4" />, label: 'Social & Cultural' },
      { icon: <Trophy className="w-4 h-4" />, label: 'Sports & Marathons' },
      { icon: <Shirt className="w-4 h-4" />, label: 'Fashion Shows' },
      { icon: <Store className="w-4 h-4" />, label: 'Exhibitions' },
    ],
  },
  {
    id: 2,
    title: 'Brand Promotions',
    icon: <Megaphone className="w-6 h-6" />,
    description: 'Strategic marketing campaigns to amplify your brand presence',
    items: [
      { icon: <PartyPopper className="w-4 h-4" />, label: 'Product Launches' },
      { icon: <Users className="w-4 h-4" />, label: 'Roadshows & Activations' },
      { icon: <Store className="w-4 h-4" />, label: 'Mall Promotions' },
      { icon: <Video className="w-4 h-4" />, label: 'Digital Campaigns' },
    ],
  },
  {
    id: 3,
    title: 'Wedding & Social',
    icon: <Heart className="w-6 h-6" />,
    description: 'Creating magical moments for your special celebrations',
    items: [
      { icon: <Heart className="w-4 h-4" />, label: 'Wedding Planning' },
      { icon: <Palette className="w-4 h-4" />, label: 'Theme Decor' },
      { icon: <Users className="w-4 h-4" />, label: 'Artist Management' },
      { icon: <Briefcase className="w-4 h-4" />, label: 'Guest Management' },
    ],
  },
  {
    id: 4,
    title: 'Production & Execution',
    icon: <Palette className="w-6 h-6" />,
    description: 'Technical expertise for stunning event infrastructure',
    items: [
      { icon: <Palette className="w-4 h-4" />, label: 'Stage & Set Design' },
      { icon: <Lightbulb className="w-4 h-4" />, label: 'Sound & Light Setup' },
      { icon: <Building2 className="w-4 h-4" />, label: 'Fabrication & Branding' },
      { icon: <Briefcase className="w-4 h-4" />, label: 'Event Logistics' },
    ],
  },
  {
    id: 5,
    title: 'Creative & Media',
    icon: <Camera className="w-6 h-6" />,
    description: 'Creative solutions to capture and amplify your event',
    items: [
      { icon: <Lightbulb className="w-4 h-4" />, label: 'Event Conceptualization' },
      { icon: <Palette className="w-4 h-4" />, label: 'Designing & Branding' },
      { icon: <Camera className="w-4 h-4" />, label: 'Photography & Video' },
      { icon: <Video className="w-4 h-4" />, label: 'Social Media Coverage' },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="eyebrow">Our Services</span>
            <div className="accent-line" />
          </div>
          <h2 className="section-title mb-6">
            End-to-End Event
            <span className="font-serif italic text-primary-600"> Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            From conceptualization to execution, we offer comprehensive services tailored to make your event extraordinary.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-cream rounded-2xl p-6 lg:p-8 hover:bg-dark-900 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-600/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <div className="text-primary-600 group-hover:text-primary-400 transition-colors">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-serif font-medium text-dark-900 group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-white/70 text-sm mb-6 transition-colors">
                {service.description}
              </p>

              {/* Service Items */}
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-700 group-hover:text-white/80 transition-colors"
                  >
                    <div className="text-primary-600 group-hover:text-primary-400">{item.icon}</div>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Discuss Your Event Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
