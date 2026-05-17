import { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { navCategories, navUtility } from './data';

export default function TopBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Primary bar: logo · search · location · sign in */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex items-center gap-4 lg:gap-8 h-16 lg:h-[72px]">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">A</span>
              </div>
              <span className="hidden sm:block font-serif text-xl font-semibold tracking-tight text-dark-900">
                ASM Ventures
              </span>
            </a>

            {/* Search */}
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-3 bg-gray-100 hover:bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-300 border border-transparent focus-within:border-primary-300 rounded-lg px-4 h-10 transition-all">
                <Search className="w-4 h-4 text-gray-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search for Events, Services, Projects and Venues"
                  className="w-full bg-transparent outline-none text-sm text-dark-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Location + Sign in */}
            <div className="hidden md:flex items-center gap-5 shrink-0">
              <button className="flex items-center gap-1 text-sm text-dark-800 hover:text-primary-600 transition-colors">
                Patna, Bihar
                <ChevronDown className="w-4 h-4" />
              </button>
              <a
                href="#contact"
                className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors"
              >
                Sign in
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 text-dark-900"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary bar: category nav · utility links */}
      <div className="hidden md:block bg-cream/70">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex items-center justify-between h-11">
            <nav className="flex items-center gap-7">
              {navCategories.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[13px] font-medium text-dark-800 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <nav className="flex items-center gap-6">
              {navUtility.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[13px] text-gray-500 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white animate-slide-in">
          <nav className="flex flex-col px-4 py-2">
            {[...navCategories, ...navUtility].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-medium text-dark-800 hover:text-primary-600 border-b border-gray-100 last:border-0 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="my-3 text-center bg-primary-600 text-white text-sm font-medium px-5 py-2.5 rounded-md"
            >
              Sign in
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
