// ── All editable site content lives here ────────────────────────────────────

export const BRAND = {
  company: 'ASM Ventures',
  event: 'ASM Ventures Marathon',
  edition: 'Edition 2027',
  city: 'Patna, Bihar',
  venue: 'Gandhi Maidan, Patna',
  email: 'run@asmventures.com',
  phone: '+91 XXXXX XXXXX',
  address: 'ASM Ventures, Fraser Road, Patna – 800001, Bihar',
}

// Single source of truth for race categories (used by Home, Categories, Registration, Admin)
export const CATEGORIES = [
  { code: '5k', dist: '5K', unit: 'KM', name: 'Fun Run', label: '5KM Fun Run', fee: 499, color: 'var(--flame)', flag: '6:30 AM', cut: '8:30 AM', age: '10+ yrs', skill: 'Everyone', qual: false },
  { code: '10k', dist: '10K', unit: 'KM', name: 'Timed Run', label: '10KM Timed Run', fee: 799, color: 'var(--cobalt)', flag: '6:00 AM', cut: '8:30 AM', age: '18+ yrs', skill: 'Beginner+', qual: false },
  { code: '21k', dist: '21.1', unit: 'KM', name: 'Half Marathon', label: '21.1KM Half Marathon', fee: 1199, color: 'var(--mint)', flag: '5:30 AM', cut: '9:30 AM', age: '18+ yrs', skill: 'Intermediate', qual: false },
  { code: '42k', dist: '42.2', unit: 'KM', name: 'Full Marathon', label: '42.2KM Full Marathon', fee: 1799, color: 'var(--violet)', flag: '5:00 AM', cut: '11:30 AM', age: '18+ yrs', skill: 'Advanced', qual: true },
  { code: '50k', dist: '50', unit: 'KM', name: 'Ultra Marathon', label: '50KM Ultra Marathon', fee: 2499, color: 'var(--rose)', flag: '1:30 AM', cut: '10:30 AM', age: '21+ yrs', skill: 'Elite only', qual: true, soon: true },
  { code: 'virtual', dist: 'ANY', unit: 'WHERE', name: 'Virtual Run', label: 'Virtual Run', fee: 399, color: 'var(--lime-ink)', flag: 'Anytime', cut: 'Race weekend', age: 'Open', skill: 'Everyone', qual: false },
]

export const PROCESSING_FEE = 20
export const CITIES = ['Patna, Bihar', 'Gaya, Bihar', 'Muzaffarpur, Bihar', 'Bhagalpur, Bihar']
export const SIZES = [
  { s: 'XS', chest: '34"' }, { s: 'S', chest: '36"' }, { s: 'M', chest: '38"' }, { s: 'L', chest: '40"' },
  { s: 'XL', chest: '42"' }, { s: 'XXL', chest: '44"' }, { s: '3XL', chest: '46"' },
]
export const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

export const PARTNERS = [
  'Title Partner · FitLife India', 'Hydration · AquaFuel', 'Footwear · RunPro Gear',
  'Medical · Apollo Health', 'Green Partner · GreenStride', 'Timing · ChipTrack',
]

export const STATS = [
  { num: '50K+', desc: 'Runners expected' },
  { num: '06', desc: 'Race categories' },
  { num: '04', desc: 'Host cities' },
  { num: '98%', desc: 'Finisher rate' },
]

export const PLEDGE = [
  'Plantable seed bibs — your bib grows into a sapling',
  'Finisher tees made from 100% recycled plastic',
  'Zero single-use plastic on the entire route',
  'Compostable aid-station materials',
  'Carbon offset through partner sapling drives',
]

export const IMPACT = [
  { num: '15,000+', desc: 'Saplings planted across Bihar', tone: 'mint' },
  { num: '4.2 T', desc: 'Organic waste composted', tone: 'cobalt' },
  { num: '0 kg', desc: 'Single-use plastic on route', tone: 'flame' },
  { num: '30,000', desc: 'Community runners so far', tone: 'violet' },
]

export const TIMELINE = [
  { year: '2018', text: 'ASM Ventures is founded in Patna as an events & experiences company.' },
  { year: '2020', text: 'First community 5K along the Ganga riverfront — 500 runners turn up.' },
  { year: '2022', text: '21K Half Marathon added. AIMS-certified course. 5,000+ participants.' },
  { year: '2024', text: 'Zero-waste race policy adopted. 15,000 saplings planted through runner pledges.' },
  { year: '2027', text: 'ASM Ventures Marathon — 50,000 runners, 4 cities, 6 categories. The movement grows.' },
]

export const ORGS = [
  { title: 'ASM Ventures', desc: 'Race director — permits, operations, experience & sustainability mandate' },
  { title: 'Bihar Striders Running Club', desc: 'Technical partner — course management, timing & logistics' },
  { title: 'AFI & AIMS Certified', desc: 'Athletics Federation of India + Association of International Marathons' },
]

export const ROUTES = [
  { id: '5k', label: '5K', title: 'Riverfront Loop', text: 'A flat, fast loop along the Patna riverfront — ideal for first-timers and families.', points: ['Start/Finish: Gandhi Maidan', '2 hydration stations', 'Fully barricaded'] },
  { id: '10k', label: '10K', title: 'Gandhi Maidan ⇄ Golghar', text: 'A heritage loop past Golghar and the Patna Museum with timing mats every 2.5K.', points: ['4 hydration stations', 'Chip-timed', 'Pacers at 50/60/70 min'] },
  { id: '21k', label: '21K', title: 'City Circuit + Riverbank', text: 'The signature route: a full city circuit followed by a sunrise stretch along the riverbank.', points: ['Hydration every 2.5K', 'Medical camps at KM 7 & 14', 'Physio at finish'] },
  { id: '50k', label: '50K', title: 'Extended City & Rural Loop', text: 'Night start under floodlights, rolling into the countryside by dawn. Launching soon.', points: ['Night-start 1:30 AM', 'Mandatory gear checks', 'Crewed checkpoints'] },
]

export const PRIZES = {
  open: {
    head: ['Position', '5K', '10K', '21K Half', '50K Ultra'],
    rows: [
      ['gold', '1st', '₹5,000', '₹15,000', '₹50,000', '₹1,50,000'],
      ['silver', '2nd', '₹3,000', '₹10,000', '₹30,000', '₹75,000'],
      ['bronze', '3rd', '₹1,500', '₹5,000', '₹15,000', '₹40,000'],
    ],
  },
  veterans: {
    head: ['Position', 'Bracket', '10K', '21K Half'],
    rows: [
      ['gold', '1st', '45–59 yrs', '₹8,000', '₹25,000'],
      ['silver', '2nd', '45–59 yrs', '₹5,000', '₹15,000'],
      ['gold', '1st', '60+ yrs', '₹8,000', '₹25,000'],
      ['silver', '2nd', '60+ yrs', '₹5,000', '₹15,000'],
    ],
  },
}

export const KIT = [
  { icon: 'Shirt', name: 'Finisher Tee', desc: '100% recycled performance tee' },
  { icon: 'Medal', name: 'Finisher Medal', desc: 'Edition 2027 die-cast medal' },
  { icon: 'Timer', name: 'Timing Chip', desc: 'Chip-timed results & e-certificate' },
  { icon: 'Coffee', name: 'Post-Race Breakfast', desc: 'Hot meal at the finish village' },
  { icon: 'HeartPulse', name: 'Medical Cover', desc: 'On-route first aid & ambulance' },
  { icon: 'Droplets', name: 'Hydration', desc: 'Aid stations every 2.5 KM' },
]

export const GEAR = [
  { m: true, name: 'Working headlamp / torch', desc: 'Mandatory — 1:30 AM start for Ultra' },
  { m: true, name: 'Reflective running vest', desc: 'Mandatory for all night runners' },
  { m: true, name: 'Reusable flask / bladder', desc: 'Mandatory after 21K — no paper cups' },
  { m: false, name: 'Race bib (front-facing)', desc: 'Must be visible at all times' },
  { m: false, name: 'Timing chip (on bib)', desc: 'Do not fold or bend the bib' },
  { m: false, name: 'Charged mobile phone', desc: 'Keep your emergency contact reachable' },
  { m: false, name: 'GPS / sports watch', desc: 'Recommended for pacing' },
  { m: false, name: 'Energy gels / nutrition', desc: 'Your personal fuelling plan' },
  { m: false, name: 'Blister & first-aid kit', desc: 'Plasters, anti-chafe balm' },
  { m: false, name: 'Emergency whistle', desc: 'Recommended for Ultra runners' },
]

export const PLANS = [
  {
    week: '08', level: 'Beginner', target: '5K & 10K', tone: 'cobalt',
    desc: 'Couch to 10K. Three runs a week with walk-run intervals, progressive mileage and full rest days.',
    summary: 'A gentle 8-week ramp from walk-run intervals to a continuous 10K. Three quality runs a week with full rest days — built to form the habit and stay injury-free.',
    structure: [
      ['Mon', 'Rest'], ['Tue', 'Run / walk intervals · 30–35 min'], ['Wed', 'Rest or easy cross-train'],
      ['Thu', 'Easy run · 25–30 min'], ['Fri', 'Rest'], ['Sat', 'Long run / walk (progressive)'], ['Sun', 'Optional recovery walk'],
    ],
    head: ['Week', 'Focus', 'Long Run', 'Weekly Volume'],
    rows: [
      ['1', 'Walk-run 1:2', '3 km', '10 km'], ['2', 'Walk-run 1:1', '4 km', '12 km'],
      ['3', 'Run 5 / walk 1', '5 km', '14 km'], ['4', 'Run 8 / walk 1', '6 km', '16 km'],
      ['5', 'Continuous easy', '7 km', '18 km'], ['6', 'Continuous easy', '8 km', '20 km'],
      ['7', 'Add short tempo', '9 km', '22 km'], ['8', 'Taper + 10K', '10 km', '15 km'],
    ],
  },
  {
    week: '12', level: 'Intermediate', target: '21K Half', tone: 'mint',
    desc: 'From 10K fitness to a strong half. Four runs a week — tempo, intervals, long runs and cross-training.',
    summary: 'Twelve weeks to a confident 21.1K. Four focused runs a week — tempo, intervals and a building long run — periodised into base, build, peak and taper blocks.',
    structure: [
      ['Mon', 'Rest'], ['Tue', 'Tempo run · 6–10 km'], ['Wed', 'Easy run · 5–7 km'],
      ['Thu', 'Intervals · 6 × 800 m'], ['Fri', 'Rest or cross-train'], ['Sat', 'Long run (progressive)'], ['Sun', 'Recovery jog · 4 km'],
    ],
    head: ['Weeks', 'Block', 'Long Run', 'Weekly Volume'],
    rows: [
      ['1–3', 'Base building', '10 → 13 km', '30–35 km'], ['4–6', 'Strength & build', '14 → 17 km', '38–45 km'],
      ['7–9', 'Peak endurance', '18 → 21 km', '48–55 km'], ['10–11', 'Sharpen', '16 → 19 km', '45 km'],
      ['12', 'Taper + race', '8 km', '25 km'],
    ],
  },
  {
    week: '16', level: 'Elite', target: '50K Ultra', tone: 'flame', soon: true,
    desc: 'Ultra-specific: back-to-back long runs, hill strength, night running and heat acclimatisation.',
    summary: 'Sixteen weeks of ultra-specific training: back-to-back long runs, hill strength, night-running practice and heat acclimatisation for the 1:30 AM, 50K start.',
    structure: [
      ['Mon', 'Strength & mobility'], ['Tue', 'Easy run · 8–12 km'], ['Wed', 'Hills / tempo · 10–14 km'],
      ['Thu', 'Easy run · 8–10 km'], ['Fri', 'Rest'], ['Sat', 'Long run (build)'], ['Sun', 'Back-to-back long run'],
    ],
    head: ['Weeks', 'Block', 'Long Run', 'Weekly Volume'],
    rows: [
      ['1–4', 'Aerobic base', '20 → 28 km', '55–65 km'], ['5–8', 'B2B build', '30 → 38 km', '70–85 km'],
      ['9–12', 'Peak + heat prep', '40 → 50 km', '90–110 km'], ['13–14', 'Sharpen', '30 km', '75 km'],
      ['15–16', 'Taper + race', '15 km', '40 km'],
    ],
    note: 'The 50K Ultra is launching soon — this plan is a preview and may be refined before registration opens.',
  },
]

export const RULES = [
  { v: 'warn', icon: 'Ban', title: 'Bib transfers are banned', text: "Running under another person's bib is an immediate DQ and a lifetime ban. Bibs are non-transferable under any circumstances." },
  { v: 'warn', icon: 'Clock', title: '8:00 AM sweep vehicle policy', text: 'Sweep vehicles start at 8:00 AM. Runners behind cutoff pace will be collected — no exceptions, for runner safety.' },
  { v: 'info', icon: 'MapPin', title: 'Checkpoint timing mats', text: 'Runners must cross every mandatory checkpoint mat. Missing a mat removes you from prize standings.' },
  { v: 'info', icon: 'ShieldCheck', title: 'Anti-doping compliance', text: 'The event is AFI compliant. Random tests may be conducted; a positive result means immediate DQ and reporting.' },
]

export const FAQS = {
  Registration: [
    { q: 'Can I register on race day?', a: 'No. All registrations must be completed online before the deadline. Walk-in entries are not available — categories fill up fast, so register early.' },
    { q: 'Can I transfer my bib to someone else?', a: "No. Bib transfers are strictly prohibited. Running under another person's registration results in a lifetime ban from ASM Ventures events." },
    { q: 'Is there an age limit for the 50K Ultra?', a: 'Yes — 21 years and above, plus a qualifying full-marathon timing certificate (finished in under 5 hours) uploaded during registration.' },
    { q: 'What payment methods are accepted?', a: 'UPI, Net Banking, Credit/Debit cards and wallets (Paytm, PhonePe, Google Pay). All transactions are secured with 256-bit SSL encryption.' },
  ],
  'Race Day': [
    { q: 'What time should I arrive?', a: 'At least 45 minutes before your flag-off. 50K Ultra runners must be in the start zone by 1:00 AM. Baggage counters open at 4:00 AM.' },
    { q: 'Where can I park?', a: 'Runner parking is available at the Gandhi Maidan East Lot and riverside zones. Public transport and carpooling are strongly encouraged.' },
    { q: 'What if I need to drop out mid-race?', a: 'Tell any marshal or medical crew at the nearest aid station. Sweep vehicles will bring you back safely; your last checkpoint is recorded.' },
    { q: 'Are earphones allowed?', a: 'Single-ear earphones are fine for 5K and 10K. For 21K and above they are discouraged for safety on shared-road sections.' },
  ],
  Medical: [
    { q: 'Is there medical support on course?', a: 'Yes. Staffed medical camps at KM 7 and KM 14 on the 21K route, ambulances on standby, first-aid volunteers at every hydration point and a physio clinic at the finish.' },
    { q: 'I have a medical condition — can I run?', a: 'Consult your physician first, especially for cardiac issues, diabetes or asthma. Declare all conditions during registration and carry your medication.' },
    { q: 'What if I feel unwell during the race?', a: 'Stop immediately and signal a marshal. Never push through chest pain, extreme dizziness, cramping or signs of heat stroke.' },
  ],
  Cancellations: [
    { q: 'Can I get a refund if I cancel?', a: 'More than 30 days before race day: 70% refund. 15–30 days: 40%. Within 14 days: no refund. Processing fees are non-refundable.' },
    { q: 'Can I defer my entry to next edition?', a: `One-time deferrals are available for medical emergencies with a physician's certificate. Email your request at least 7 days before race day.` },
  ],
}

export const TRANSPORT = [
  { icon: 'TrainFront', title: 'By Rail', text: 'Patna Junction — 1.2 km from venue. Pre-book autos or use the shuttle.' },
  { icon: 'Bus', title: 'By Bus', text: 'Patna Bus Terminal — 2 km. Race-day shuttles run from 3:00 AM.' },
  { icon: 'SquareParking', title: 'Parking', text: 'Gandhi Maidan East Lot — gates open 2:00 AM. Carpool if you can.' },
]

export const SPONSORS = [
  { tier: 'Title Partner', big: true, names: ['FitLife India'] },
  { tier: 'Driven By', names: ['Mahindra Electric', 'TATA Power'] },
  { tier: 'Hydration Partners', names: ['AquaFuel', 'Gatorade India'] },
  { tier: 'Quick Commerce', names: ['Blinkit', 'Zepto'] },
  { tier: 'Wellness & Medical', names: ['Apollo Health', 'Dabur'] },
  { tier: 'Media Partners', names: ['Hindustan', 'Times of India Digital', 'Bihar Live TV'] },
]

export const VOLUNTEER_ROLES = ['Aid Station Volunteer', 'Route Marshal', 'Finish Line Crew', 'Medical Support', 'Baggage Counter', 'Registration Desk', 'Photography / Media']

export const POSTS = [
  {
    slug: 'city-streets-green-miles',
    title: 'From City Streets to Green Miles',
    tag: 'Community', date: 'Sep 24, 2026', readTime: '4 min read', tone: 'mint',
    excerpt: 'How every run creates a ripple effect — stronger communities, deeper connections and a shared commitment to a cleaner city.',
    content: [
      'The movement grows one stride at a time. What begins as a personal challenge quickly becomes a shared promise: to run with purpose and leave a lighter footprint.',
      'Community-led races are powerful because they make sustainability tangible. When runners see seed bibs, refill stations and greener finish villages, they understand progress is possible without excess waste.',
      'The strongest events make participation feel rewarding on both a personal and a collective level. Every mile becomes a contribution to a culture that values health, responsibility and connection.',
    ],
  },
  {
    slug: 'sustainable-race-kits',
    title: 'Why Sustainable Race Kits Matter',
    tag: 'Sustainability', date: 'Sep 12, 2026', readTime: '5 min read', tone: 'cobalt',
    excerpt: 'The smallest choices — from recycled tees to reusable hydration — can shift an event from wasteful to responsible.',
    content: [
      'Race kits are often treated as giveaways, but they are also a visible statement of an event’s values. Recycled apparel, reusable hydration gear and compostable packaging all say that care for the environment is part of the experience.',
      'When the kit itself carries the mission, participants become partners. They see it in their hands, on their bodies and in the way the event is run.',
      'A better kit is not just a greener product — it is a clearer commitment to running responsibly, from the first confirmation email to the final medal.',
    ],
  },
  {
    slug: 'training-long-run',
    title: 'Training for the Long Run — and the Long View',
    tag: 'Training', date: 'Aug 30, 2026', readTime: '3 min read', tone: 'flame',
    excerpt: 'Great marathon prep is not only about mileage — it is recovery, consistency and building a habit that lasts.',
    content: [
      'Long-distance training builds more than stamina. It builds discipline, patience and resilience — qualities that matter as much on race day as in the weeks before it.',
      'The most effective plans balance effort and recovery, making room for strength work, sleep and reflection so you arrive at the start line steady, not simply tired.',
      'The same is true of a running culture: it rewards preparation, care and consistency instead of quick wins and short-lived hype.',
    ],
  },
]
