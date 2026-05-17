// Content for the BookMyShow-style homepage layout.
// All copy/imagery stays on-brand for ASM Ventures — only the
// information architecture mirrors bookmyshow.com.

export interface Banner {
  id: number;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  cta: string;
  href: string;
}

export interface PosterCard {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tag: string;       // shown as the gold "rating" pill on the poster
  meta: string;      // small line under the title (genre-equivalent)
}

export interface Category {
  id: number;
  label: string;
  icon: string;      // lucide-react icon name
  href: string;
}

export const banners: Banner[] = [
  {
    id: 1,
    eyebrow: 'Event Management Excellence',
    title: 'Creating',
    accent: 'Unforgettable',
    description:
      'From concept to curtain-call — strategic planning, creative production and flawless on-ground execution.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80',
    cta: 'Explore Services',
    href: '#services',
  },
  {
    id: 2,
    eyebrow: 'Corporate & Government',
    title: 'Professional',
    accent: 'Gatherings',
    description:
      'Conferences, product launches and dealer meets engineered for impact and run with precision.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80',
    cta: 'Plan a Corporate Event',
    href: '#contact',
  },
  {
    id: 3,
    eyebrow: 'Weddings & Social',
    title: 'Dream',
    accent: 'Celebrations',
    description:
      'Bespoke décor, artist management and guest experiences that turn moments into memories.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80',
    cta: 'Start Planning',
    href: '#contact',
  },
];

// "Recommended Movies" equivalent — flagship events ASM has delivered.
export const featuredEvents: PosterCard[] = [
  {
    id: 1,
    title: 'FIT Patna Marathon',
    subtitle: 'Sports • Mass Participation',
    image:
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80',
    tag: 'Flagship',
    meta: 'Sports / Fitness',
  },
  {
    id: 2,
    title: 'Bihar Couture Runway',
    subtitle: 'Fashion • Lifestyle',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
    tag: 'Premiere',
    meta: 'Fashion Show',
  },
  {
    id: 3,
    title: 'Corporate Brand Launch',
    subtitle: 'Brand • Activation',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    tag: 'Featured',
    meta: 'Brand Promotion',
  },
  {
    id: 4,
    title: 'Grand Wedding Gala',
    subtitle: 'Wedding • Décor',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    tag: 'Signature',
    meta: 'Wedding & Social',
  },
  {
    id: 5,
    title: 'Live Music Night',
    subtitle: 'Concert • Production',
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    tag: 'Sold Out',
    meta: 'Concert / Festival',
  },
  {
    id: 6,
    title: 'Trade Expo & Exhibition',
    subtitle: 'Exhibition • Fabrication',
    image:
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
    tag: 'Featured',
    meta: 'Exhibition',
  },
];

// "The Best of Live Events" equivalent — service lines as poster cards.
export const services: PosterCard[] = [
  {
    id: 1,
    title: 'Event Management',
    subtitle: 'End-to-end planning & execution',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
    tag: 'Core',
    meta: 'Corporate / Govt / Social',
  },
  {
    id: 2,
    title: 'Brand Promotions',
    subtitle: 'Roadshows, launches & activations',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
    tag: 'Popular',
    meta: 'Marketing',
  },
  {
    id: 3,
    title: 'Wedding & Social',
    subtitle: 'Bespoke celebrations',
    image:
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    tag: 'Signature',
    meta: 'Weddings',
  },
  {
    id: 4,
    title: 'Production & Execution',
    subtitle: 'Stage, sound, light & fabrication',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
    tag: 'Technical',
    meta: 'Infrastructure',
  },
  {
    id: 5,
    title: 'Creative & Media',
    subtitle: 'Concept, design & coverage',
    image:
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80',
    tag: 'Creative',
    meta: 'Design / Film',
  },
];

// "Live Events" equivalent — BookMyShow's landscape event cards
// (date · venue · meta line), adapted to ASM's event portfolio.
export interface LiveEvent {
  id: number;
  title: string;
  image: string;
  date: string;
  venue: string;
  category: string;
}

export const liveEvents: LiveEvent[] = [
  {
    id: 1,
    title: 'FIT Patna Marathon 2026',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    date: 'SUN 14 JUN',
    venue: 'Gandhi Maidan, Patna',
    category: 'Sports & Fitness',
  },
  {
    id: 2,
    title: 'Bihar Couture Runway',
    image:
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80',
    date: 'FRI 26 JUN',
    venue: 'Hotel Maurya, Patna',
    category: 'Fashion Show',
  },
  {
    id: 3,
    title: 'Startup Conclave & Expo',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    date: 'SAT 11 JUL',
    venue: 'Bapu Sabhagar, Patna',
    category: 'Conference',
  },
  {
    id: 4,
    title: 'Sufi Night Live',
    image:
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80',
    date: 'SAT 25 JUL',
    venue: 'Energy Park, Patna',
    category: 'Music Concert',
  },
  {
    id: 5,
    title: 'Grand Wedding Showcase',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    date: 'SUN 09 AUG',
    venue: 'Taj Convention, Patna',
    category: 'Wedding & Social',
  },
];

// Full-width promotional banner strips (BookMyShow's mid-page ad banners).
export interface PromoStrip {
  id: number;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  cta: string;
  href: string;
}

export const promoStrips: PromoStrip[] = [
  {
    id: 1,
    eyebrow: 'Premiere',
    title: 'Signature Productions,',
    accent: 'Flawlessly Staged',
    description:
      'Stage, sound, light and fabrication handled end-to-end by our in-house production team.',
    image:
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1600&q=80',
    cta: 'See Production',
    href: '#services',
  },
  {
    id: 2,
    eyebrow: 'For Brands',
    title: 'Activations That',
    accent: 'Move Markets',
    description:
      'Roadshows, mall promotions and launches built to put your brand in front of the right crowd.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80',
    cta: 'Plan a Campaign',
    href: '#contact',
  },
];

export const categories: Category[] = [
  { id: 1, label: 'Corporate', icon: 'Building2', href: '#services' },
  { id: 2, label: 'Weddings', icon: 'Heart', href: '#services' },
  { id: 3, label: 'Brand Promotions', icon: 'Megaphone', href: '#services' },
  { id: 4, label: 'Sports & Marathons', icon: 'Trophy', href: '#services' },
  { id: 5, label: 'Fashion Shows', icon: 'Shirt', href: '#services' },
  { id: 6, label: 'Exhibitions', icon: 'Store', href: '#services' },
  { id: 7, label: 'Concerts', icon: 'Music', href: '#services' },
  { id: 8, label: 'Conferences', icon: 'Users', href: '#services' },
];

export const navCategories = [
  { label: 'Events', href: '#home' },
  { label: 'Corporate', href: '#services' },
  { label: 'Weddings', href: '#services' },
  { label: 'Promotions', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Production', href: '#services' },
];

export const navUtility = [
  { label: 'List Your Event', href: '#contact' },
  { label: 'Corporates', href: '#services' },
  { label: 'Offers', href: '#contact' },
  { label: 'Contact', href: '#contact' },
];
