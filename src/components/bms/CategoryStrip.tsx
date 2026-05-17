import {
  Building2,
  Heart,
  Megaphone,
  Trophy,
  Shirt,
  Store,
  Music,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { categories } from './data';

const ICONS: Record<string, LucideIcon> = {
  Building2,
  Heart,
  Megaphone,
  Trophy,
  Shirt,
  Store,
  Music,
  Users,
};

export default function CategoryStrip() {
  return (
    <section className="py-12 lg:py-16 bg-dark-900">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-medium text-white">
            The Best of
            <span className="italic text-primary-400"> Live Events</span>
          </h2>
          <a
            href="#services"
            className="text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
          >
            Explore All
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
          {categories.map((cat) => {
            const Icon = ICONS[cat.icon] ?? Building2;
            return (
              <a
                key={cat.id}
                href={cat.href}
                className="group flex flex-col items-center text-center gap-3"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary-600 group-hover:border-primary-600 flex items-center justify-center transition-colors">
                  <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs lg:text-sm text-white/70 group-hover:text-white transition-colors">
                  {cat.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
