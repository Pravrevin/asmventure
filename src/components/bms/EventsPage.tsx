import { useState, useEffect } from 'react';
import { MapPin, Calendar, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { liveEvents } from './data';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80',
    tag: 'Music Concert',
    title: 'Sufi Night Live',
    sub: 'Energy Park, Patna · Sat 25 Jul',
  },
  {
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80',
    tag: 'Sports & Fitness',
    title: 'FIT Patna Marathon 2026',
    sub: 'Gandhi Maidan, Patna · Sun 14 Jun',
  },
  {
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1600&q=80',
    tag: 'Fashion Show',
    title: 'Bihar Couture Runway',
    sub: 'Hotel Maurya, Patna · Fri 26 Jun',
  },
];

const ALL_CATS = ['All', ...Array.from(new Set(liveEvents.map((e) => e.category)))];

const ARTISTS = [
  {
    name: 'Niladri Kumaar',
    role: 'Sitar Maestro',
    img: '/artists/Niladri Kumaar.jpg',
  },
  {
    name: 'Kanha Kamboj',
    role: 'Folk / Devotional',
    img: '/artists/Kanha Kamboj.png',
  },
  {
    name: 'Rakesh Chaurasia',
    role: 'Flute Maestro',
    img: '/artists/Rakesh Chaurasia.jpg',
  },
  {
    name: 'Mukul Sharma',
    role: 'Harmonica / Jazz',
    img: '/artists/Mukul Sharma.png',
  },
  {
    name: 'Purbayan Chatterjee',
    role: 'Sitar / Fusion',
    img: '/artists/Purbayan Chatterjee.jpg',
  },
  {
    name: 'Atul Khatri',
    role: 'Stand-Up Comedy',
    img: '/artists/Atul Khatri.jpg',
  },
];

const EXPLORE_TILES = [
  { cat: 'Music Concert',    emoji: '🎵', bg: 'linear-gradient(135deg,#7c3aed,#4f46e5)' },
  { cat: 'Comedy',           emoji: '😂', bg: 'linear-gradient(135deg,#f59e0b,#ef4444)' },
  { cat: 'Sports & Fitness', emoji: '🏃', bg: 'linear-gradient(135deg,#10b981,#059669)' },
  { cat: 'Conference',       emoji: '🎤', bg: 'linear-gradient(135deg,#0ea5e9,#2563eb)' },
  { cat: 'Fashion Show',     emoji: '👗', bg: 'linear-gradient(135deg,#ec4899,#d946ef)' },
  { cat: 'Wedding & Social', emoji: '💍', bg: 'linear-gradient(135deg,#f97316,#b76e09)' },
  { cat: 'Exhibition',       emoji: '🖼️', bg: 'linear-gradient(135deg,#64748b,#334155)' },
  { cat: 'Workshop',         emoji: '🛠️', bg: 'linear-gradient(135deg,#14b8a6,#0f766e)' },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [query, setQuery] = useState('');
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  const prev = () => setSlide((s) => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => setSlide((s) => (s + 1) % HERO_SLIDES.length);

  const filtered = liveEvents.filter((ev) => {
    const matchCat = activeTab === 'All' || ev.category === activeTab;
    const q = query.toLowerCase();
    const matchQ =
      !q ||
      ev.title.toLowerCase().includes(q) ||
      ev.venue.toLowerCase().includes(q) ||
      ev.category.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════════════════════════════
          HERO — full-width image banner, like district.in/events
      ══════════════════════════════════════════════════════════ */}
      <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[500px] overflow-hidden">
        {/* Slides */}
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === slide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-dark-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14">
          {/* Tag pill */}
          <span className="inline-flex self-start mb-3 bg-primary-600/90 text-white font-sans text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
            {HERO_SLIDES[slide].tag}
          </span>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-2xl">
            {HERO_SLIDES[slide].title}
          </h2>

          {/* Sub-line */}
          <p className="mt-2 font-sans text-sm sm:text-base text-white/70 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary-400 shrink-0" />
            {HERO_SLIDES[slide].sub}
          </p>

          {/* Search bar — like district.in's hero search */}
          <div className="mt-5 flex items-center gap-2 bg-white rounded-xl px-4 h-12 w-full max-w-md shadow-lg">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events, venues…"
              className="flex-1 bg-transparent outline-none text-sm text-dark-900 placeholder:text-gray-400 font-sans"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-gray-300 hover:text-gray-500">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 right-6 flex items-center gap-1.5">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`rounded-full transition-all ${
                i === slide ? 'w-5 h-2 bg-primary-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          EXPLORE EVENTS — category tile strip, like district.in
          Horizontally scrollable row of genre tiles right below hero
      ══════════════════════════════════════════════════════════ */}
      <div className="bg-white pt-8 pb-2">
        <div className="container mx-auto px-4 lg:px-12">
          {/* Section heading */}
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-serif text-xl lg:text-2xl font-semibold text-dark-900">
              Explore <span className="italic text-primary-600">Events</span>
            </h2>
            <button
              onClick={() => setActiveTab('All')}
              className="font-sans text-[13px] font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              See all
            </button>
          </div>

          {/* Scrollable tile row */}
          <div className="flex gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1">
            {EXPLORE_TILES.map((tile) => {
              const count = liveEvents.filter((e) => e.category === tile.cat).length;
              const isActive = activeTab === tile.cat;
              return (
                <button
                  key={tile.cat}
                  onClick={() => setActiveTab(isActive ? 'All' : tile.cat)}
                  className={`shrink-0 group relative flex flex-col items-center justify-center gap-2 w-[110px] h-[110px] rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                    isActive
                      ? 'border-primary-600 scale-[1.03] shadow-md'
                      : 'border-transparent hover:border-primary-200 hover:scale-[1.02]'
                  }`}
                  style={{ background: tile.bg }}
                >
                  {/* Subtle inner overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                  <span className="relative text-3xl leading-none">{tile.emoji}</span>
                  <div className="relative text-center px-1">
                    <p className="font-sans text-[12px] font-bold text-white leading-tight">{tile.cat}</p>
                    <p className="font-sans text-[11px] text-white/70 mt-0.5">{count} event{count !== 1 ? 's' : ''}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          ARTISTS IN YOUR DISTRICT
          Horizontal scroll of circular artist avatars — district.in style
      ══════════════════════════════════════════════════════════ */}
      <div className="bg-white pt-8 pb-6 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-12">

          {/* Heading row */}
          <div className="flex items-baseline justify-between mb-5">
            <div>
              <h2 className="font-serif text-xl lg:text-2xl font-semibold text-dark-900">
                Artists in your{' '}
                <span className="italic text-primary-600">ASM Ventures</span>
              </h2>
              <p className="mt-0.5 font-sans text-[12px] text-gray-400">
                Performing live across Patna
              </p>
            </div>
            <a
              href="#events"
              className="font-sans text-[13px] font-medium text-primary-600 hover:text-primary-700 transition-colors whitespace-nowrap"
            >
              View all
            </a>
          </div>

          {/* Scrollable artist row */}
          <div className="flex gap-5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1">
            {ARTISTS.map((artist) => (
              <a
                key={artist.name}
                href="#events"
                className="group shrink-0 flex flex-col items-center gap-2 w-[88px]"
              >
                {/* Circular avatar */}
                <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-primary-400 transition-all duration-200 shadow-sm">
                  <img
                    src={artist.img}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Subtle gradient on hover */}
                  <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-200" />
                </div>

                {/* Name */}
                <p className="font-sans text-[12px] font-semibold text-dark-900 text-center leading-tight line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {artist.name}
                </p>

                {/* Role */}
                <p className="font-sans text-[11px] text-gray-400 text-center leading-tight -mt-1">
                  {artist.role}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Page title ───────────────────────────────────────────── */}
      <div className="bg-white pt-6 pb-2">
        <div className="container mx-auto px-4 lg:px-12">
          <h1 className="font-serif text-[26px] lg:text-3xl font-semibold text-dark-900 leading-tight">
            Events in <span className="italic text-primary-600">Patna</span>
          </h1>
          <p className="mt-0.5 font-sans text-sm text-gray-400">
            Concerts · Marathons · Fashion · Comedy &amp; more
          </p>
        </div>
      </div>

      {/* ── Sticky pill filter bar ───────────────────────────────── */}
      <div className="sticky top-0 z-20 bg-white border-y border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-3">
            {ALL_CATS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-[13px] font-medium font-sans border transition-all whitespace-nowrap ${
                  activeTab === cat
                    ? 'bg-dark-900 text-white border-dark-900'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-dark-700 hover:text-dark-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cards grid ──────────────────────────────────────────── */}
      <div className="bg-gray-50 min-h-[60vh]">
        <div className="container mx-auto px-4 lg:px-12 py-7">
          <p className="font-sans text-[13px] text-gray-400 mb-5">
            Showing <span className="font-semibold text-dark-900">{filtered.length}</span>{' '}
            event{filtered.length !== 1 ? 's' : ''}
            {activeTab !== 'All' && <> in <span className="font-medium text-primary-600">{activeTab}</span></>}
            {query && <> matching "<span className="text-dark-900">{query}</span>"</>}
          </p>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <Calendar className="w-10 h-10 mx-auto text-gray-300 mb-3" />
              <p className="font-serif text-lg text-dark-900">No events found</p>
              <p className="font-sans text-sm text-gray-400 mt-1">Try a different category or clear your search</p>
              <button
                onClick={() => { setActiveTab('All'); setQuery(''); }}
                className="mt-4 text-sm font-semibold font-sans text-primary-600 hover:text-primary-700 underline underline-offset-2"
              >
                Clear filters
              </button>
            </div>
          )}

          {filtered.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((ev) => (
                <a
                  key={ev.id}
                  href="#events"
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-dark-900 font-sans text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm">
                      {ev.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-4 gap-1.5">
                    <p className="font-sans text-[11px] font-bold text-primary-600 uppercase tracking-widest">
                      {ev.date}
                    </p>
                    <h3 className="font-serif text-[15px] font-semibold text-dark-900 leading-snug line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {ev.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[12px] text-gray-400 font-sans">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="line-clamp-1">{ev.venue}</span>
                    </div>
                    <div className="flex-1 min-h-[6px]" />
                    <p className="font-sans text-[13px] font-semibold text-dark-900">
                      {ev.price}
                    </p>
                    <span className="mt-1 block w-full text-center bg-primary-600 group-hover:bg-primary-700 text-white font-sans text-[13px] font-semibold py-2.5 rounded-xl transition-colors">
                      Book tickets
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
