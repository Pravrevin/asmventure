import { navCategories, navUtility } from './data';

/**
 * BookMyShow's white sub-navigation row (Movies / Events / Plays / Sports ...).
 * Rendered on the dark carousel backdrop so the transparent ASM header stays
 * readable above it — uses ASM gold accents, not BMS colours.
 */
export default function CategoryNav() {
  return (
    <div className="bg-dark-900 pt-24 lg:pt-28">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav className="flex items-center gap-7 shrink-0">
            {navCategories.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0
                    ? 'text-primary-400'
                    : 'text-white/80 hover:text-primary-400'
                }`}
              >
                {item.label}
                {i === 0 && (
                  <span className="absolute -bottom-3 left-0 right-0 h-[2px] bg-primary-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>
          <nav className="hidden md:flex items-center gap-6 shrink-0">
            {navUtility.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] text-white/50 hover:text-primary-400 whitespace-nowrap transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
