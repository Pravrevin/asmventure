// ── Front-end only data store ───────────────────────────────────────────────
//
// There is no backend yet: registrations and volunteer applications are kept in
// the browser's localStorage so the full flow (register → admin dashboard) works
// end-to-end on one device. When an API is ready, replace the bodies of these
// functions with fetch() calls — every page talks to data only through here.

const REG_KEY = 'asm_registrations'
const VOL_KEY = 'asm_volunteers'

function read(key) {
  try {
    const v = JSON.parse(localStorage.getItem(key) || '[]')
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

function write(key, rows) {
  try {
    localStorage.setItem(key, JSON.stringify(rows))
    return true
  } catch {
    return false
  }
}

export const makeRef = (prefix = 'ASM') =>
  `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 9000 + 1000)}`

// ── registrations ──
export const listRegistrations = () => read(REG_KEY)

export function saveRegistration(payload) {
  const row = { ...payload, createdAt: new Date().toISOString() }
  return write(REG_KEY, [...read(REG_KEY), row]) ? row : null
}

export function updateRegistration(id, patch) {
  write(REG_KEY, read(REG_KEY).map((r) => (r.id === id ? { ...r, ...patch } : r)))
}

export function deleteRegistration(id) {
  write(REG_KEY, read(REG_KEY).filter((r) => r.id !== id))
}

export const clearRegistrations = () => write(REG_KEY, [])

// ── volunteers ──
export const listVolunteers = () => read(VOL_KEY)

export function saveVolunteer(payload) {
  const row = { id: makeRef('VOL'), ...payload, createdAt: new Date().toISOString() }
  return write(VOL_KEY, [...read(VOL_KEY), row]) ? row : null
}

export function deleteVolunteer(id) {
  write(VOL_KEY, read(VOL_KEY).filter((r) => r.id !== id))
}

// ── demo data for the admin dashboard ──
const FIRST = ['Aarav', 'Diya', 'Rohan', 'Ananya', 'Vikram', 'Sneha', 'Kabir', 'Priya', 'Aditya', 'Neha', 'Rahul', 'Ishita', 'Karan', 'Pooja', 'Siddharth', 'Meera']
const LAST = ['Kumar', 'Singh', 'Sharma', 'Verma', 'Gupta', 'Jha', 'Mishra', 'Sinha', 'Prasad', 'Raj']
const CATS = [
  ['5k', '5KM Fun Run', 499], ['10k', '10KM Timed Run', 799], ['21k', '21.1KM Half Marathon', 1199],
  ['42k', '42.2KM Full Marathon', 1799], ['virtual', 'Virtual Run', 399],
]
const CITIES = ['Patna, Bihar', 'Gaya, Bihar', 'Muzaffarpur, Bihar', 'Bhagalpur, Bihar']
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
const BLOOD = ['A+', 'B+', 'O+', 'AB+', 'O-', 'B-']
const pick = (a) => a[Math.floor(Math.random() * a.length)]

export function seedDemoData(count = 36) {
  const rows = Array.from({ length: count }, (_, i) => {
    const [code, label, fee] = pick(CATS)
    const first = pick(FIRST)
    const last = pick(LAST)
    const created = new Date(Date.now() - Math.floor(Math.random() * 21) * 86400000 - i * 3600000)
    return {
      id: `ASM-DEMO${String(i + 1).padStart(3, '0')}`,
      category: label,
      categoryCode: code,
      city: pick(CITIES),
      firstName: first,
      lastName: last,
      dob: `19${80 + Math.floor(Math.random() * 20)}-0${1 + Math.floor(Math.random() * 9)}-1${Math.floor(Math.random() * 9)}`,
      gender: pick(['Male', 'Female']),
      bloodGroup: pick(BLOOD),
      email: `${first}.${last}${i}@example.com`.toLowerCase(),
      mobile: `+91 9${Math.floor(100000000 + Math.random() * 899999999)}`,
      emergencyName: `${pick(FIRST)} ${last}`,
      emergencyMobile: `+91 8${Math.floor(100000000 + Math.random() * 899999999)}`,
      medicalConditions: Math.random() < 0.15 ? 'Asthma' : 'None',
      tshirtSize: pick(SIZES),
      qualifierProvided: code === '42k' ? 'Yes' : 'N/A',
      qualifierFile: code === '42k' ? 'timing-certificate.pdf' : '',
      entryFee: fee,
      processingFee: 20,
      totalAmount: fee + 20,
      paymentMode: pick(['UPI', 'Card', 'Net Banking']),
      paymentStatus: Math.random() < 0.8 ? 'Paid' : 'Pending',
      createdAt: created.toISOString(),
    }
  })
  write(REG_KEY, [...read(REG_KEY), ...rows])
}
