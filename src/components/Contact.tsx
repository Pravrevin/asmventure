import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+91XXXXXXXXXX',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'info@asmventures.com',
    href: 'mailto:info@asmventures.com',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Patna, Bihar, India',
    href: '#',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: 'Working Hours',
    value: 'Mon - Sat: 9AM - 7PM',
    href: '#',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-dark-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-primary-500" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-primary-400">
                Contact Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.05] mb-6">
              Let's Plan Your
              <span className="font-serif italic text-primary-400"> Perfect Event</span>
            </h2>

            <p className="text-white/70 leading-relaxed mb-10">
              Ready to create something extraordinary? Get in touch with us and let's discuss how we can make your next event unforgettable.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-primary-400">{item.icon}</div>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-white font-medium text-sm">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-serif font-medium text-dark-900 mb-2">
              Send us a Message
            </h3>
            <p className="text-gray-600 text-sm mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-900 mb-2">
                  Event Type
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white">
                  <option value="">Select Event Type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="social">Social/Cultural Event</option>
                  <option value="sports">Sports Event</option>
                  <option value="fashion">Fashion Show</option>
                  <option value="promotion">Brand Promotion</option>
                  <option value="exhibition">Exhibition</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-900 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your event requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-medium transition-colors"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
