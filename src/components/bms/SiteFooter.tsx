import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
  Headphones,
} from 'lucide-react';

const tagPills = [
  'Corporate Events in Patna',
  'Wedding Planners in Bihar',
  'Brand Activations',
  'Marathon Management',
  'Fashion Shows',
  'Exhibitions & Expos',
  'Concert Production',
  'Government Events',
  'Product Launches',
  'Conferences',
];

const columns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Our Services',
    links: [
      { label: 'Event Management', href: '#services' },
      { label: 'Brand Promotions', href: '#services' },
      { label: 'Wedding & Social', href: '#services' },
      { label: 'Production & Execution', href: '#services' },
      { label: 'Creative & Media', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Vision', href: '#about' },
      { label: 'Why Choose Us', href: '#about' },
      { label: 'Notable Projects', href: '#projects' },
      { label: 'Careers', href: '#contact' },
      { label: 'List Your Event', href: '#contact' },
    ],
  },
];

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-dark-800">
      {/* Tag pill cloud */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-12 py-10">
          <h4 className="text-white/80 font-semibold mb-5">
            Event Services in National Capital &amp; Bihar
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {tagPills.map((tag) => (
              <a
                key={tag}
                href="#services"
                className="text-xs text-white/55 border border-white/10 hover:border-primary-500 hover:text-primary-400 rounded-full px-4 py-1.5 transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Link grid */}
      <div className="container mx-auto px-4 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">A</span>
              </div>
              <span className="font-serif text-xl font-semibold text-white">
                ASM Ventures
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              A dynamic event management company crafting impactful, engaging and
              seamlessly executed experiences across India.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-primary-600 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-white/55 hover:text-primary-400 text-sm transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 24/7 customer care strip */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary-600/20 flex items-center justify-center">
              <Headphones className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <div className="text-white/50 text-[11px] uppercase tracking-[0.2em]">
                24/7 Customer Care
              </div>
              <a
                href="tel:+91XXXXXXXXXX"
                className="text-white font-semibold hover:text-primary-400 transition-colors"
              >
                +91 XXXXX XXXXX
              </a>
            </div>
          </div>
          <p className="text-white/40 text-xs leading-relaxed max-w-2xl text-center md:text-right">
            ASM Ventures plans, produces and executes corporate, social and
            public events across India. Imagery shown is illustrative of event
            categories we deliver.
          </p>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} ASM Ventures. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
