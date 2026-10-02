# ASM Ventures Marathon — website

React + Vite front-end for the ASM Ventures Marathon. Fully self-contained (no backend,
no Google Apps Script). Registrations and volunteer applications are stored in the
browser's localStorage so the full flow — register → admin dashboard — works out of the box.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview
```

## Pages

| Route | Page |
|---|---|
| `/` | Hero bento with live countdown, partner marquee, stats, 6 race cards, green pledge |
| `/categories` | Race matrix, virtual run, route maps (tabs), 21K elevation profile, prize money |
| `/register` | 5-step registration (race → runner → qualifier → merch → pay) + e-ticket. `?cat=21k` preselects a race |
| `/about` | Timeline, impact, organisers |
| `/athlete` | Interactive gear checklist, training plans with detail modal |
| `/rules` | Race regulations + FAQ tabs/accordion |
| `/expo` | Bib expo, venue & transport, sponsor wall, contact, volunteer form |
| `/blog`, `/blog/:slug` | Journal list + article |
| `/admin` | Admin dashboard (passcode in `src/lib/adminConfig.js`, default `asm2027`) |

## Where to edit

- **Content** (races, fees, FAQs, sponsors, posts, contact…): `src/data/site.js`
- **Data layer**: `src/lib/store.js` — swap the localStorage calls for real API calls when a backend exists
- **Payment**: `pay()` in `src/pages/Registration.jsx` simulates the gateway — replace with Razorpay etc.
- **Design tokens** (colours, fonts, radii, dark theme): top of `src/styles.css`

## Admin dashboard

KPIs, 14-day sign-up chart, category donut, city / T-shirt breakdowns, searchable &
filterable registrations table, detail drawer (mark paid / pending, delete), volunteers list,
CSV export and a "Load demo data" button for previewing.

> The passcode gate and localStorage data are for a front-end preview only — data is per
> browser and not secure. Add a backend + real auth before going live.
