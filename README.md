# 🏭 Warehouse Moderator App

A streamlined inventory management interface built with **Next.js 14** for the Turuq Frontend Assessment. Tailored specifically for warehouse moderators to manage products cleanly and efficiently — wrapped in a warehouse-tag design language (mono bin codes, barcode strips, rack-style cards).

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss&logoColor=white)

</div>

---

## ✨ Features

| Feature | Details |
| --- | --- |
| 🧑‍💼 **Moderator profile** | Root page renders 5 personal records (name, age, email, phone, university) as warehouse rack tags with bin codes + barcode strips |
| 📦 **Product inventory** | Server-rendered product list fetched from a mock API, with 60s revalidation |
| 🔍 **Product details** | Per-product page with ID/variant/name/price readout, `notFound()` handling, and per-page metadata |
| ✏️ **Inline editing** | Fully validated edit form that updates the readout instantly (local state, no API write) |
| 🌗 **Dark / light mode** | Toggle persisted to `localStorage`, applied **before first paint** (zero theme flash), respects `prefers-color-scheme` |
| ⏳ **Loading skeletons** | Pulse skeletons that mirror the final layout — no layout shift when data arrives |
| 🚨 **Error boundaries** | Dedicated `error.tsx` pages with retry buttons for failed fetches |
| 📱 **Responsive shell** | Fixed sidebar on desktop → slide-in drawer on mobile (closes on route change, overlay click, or `Esc`) |
| ♿ **Accessibility** | `aria-live` update announcements, `aria-current` nav states, focus-visible rings, semantic landmarks, skip-safe markup |
| 🎨 **Design system** | Turuq token palette (custom Tailwind colors), Inter + JetBrains Mono, staggered card entrances |

---

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Linting / Formatting:** ESLint (`eslint-config-next`) + Prettier (`prettier-plugin-tailwindcss`)

---

## 🗺 Routes

| Route | Page | Type | Description |
| --- | --- | --- | --- |
| `/` | `src/app/page.tsx` | Server | Moderator profile — 5 personal record cards |
| `/products` | `src/app/products/page.tsx` | Server | Full product list from the warehouse API |
| `/products/[id]` | `src/app/products/[id]/page.tsx` | Server | Product readout + edit form (client component inside) |

Route segments also include `loading.tsx` (skeletons), `error.tsx` (fetch-failure retry), and `not-found.tsx`.

---

## ⚙️ Data & Architecture Decisions

### Server-side fetching (`src/lib/products.ts`)

- Fetches from `https://6776992512a55a9a7d0c4868.mockapi.io/products` with `next: { revalidate: 60 }` — the list stays fresh without refetching on every render.
- The mock API has **no `GET /products/:id` endpoint** (returns 404), so `fetchProduct(id)` reads the cached collection and picks the matching record.
- `fetchProduct` is wrapped in React's `cache()` so the page and its `generateMetadata` share **one request per render**; Next.js additionally deduplicates the inner fetch.
- Fetch failures throw, which triggers the nearest `error.tsx` boundary.

### Client-side editing (`ProductDetails` + `ProductEditForm`)

- The assessment requires only local reflection — the details page keeps the displayed record in state so a submit updates the readout immediately. **No API write is performed.**
- Form validation: all fields required; ID must be ≥ 1; price must be ≥ 0.

### Theme (flash-free)

- An inline script in the root layout reads `localStorage` (with `prefers-color-scheme` fallback) and applies the `.dark` class **before hydration**, so there's never a flash of the wrong theme.
- `ThemeToggle` only reads/syncs current state and flips the class on `<html>`; persistence failures (e.g. private mode) degrade gracefully.

### Design language

- Every card wears a **bin code** (`A-01`, …) and a deterministic **barcode strip** (`Barcode.tsx` uses fixed bar widths so server/client renders always match).
- `Intl.NumberFormat` (USD) in `src/lib/format.ts` — one place to change currency/locale.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.17 (Next.js 14 requirement)

### Install & run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment variables

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `PRODUCTS_API_URL` | No | `https://6776992512a55a9a7d0c4868.mockapi.io/products` | Override the product list API endpoint |

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint (`next lint`) |
| `npm run format` | Format the whole project with Prettier |

---

## 📁 Project Structure

```plaintext
turuq-task-frontend/
├── src/
│   ├── app/                            # App Router — file-based routing
│   │   ├── layout.tsx                  # Root layout: metadata, fonts, pre-paint theme script
│   │   ├── page.tsx                    # / — moderator profile (5 personal records)
│   │   ├── not-found.tsx               # Global 404
│   │   └── products/
│   │       ├── page.tsx                # /products — warehouse product list (server fetch)
│   │       ├── loading.tsx             # Skeleton grid while the list loads
│   │       ├── error.tsx               # Fetch-failure boundary with retry
│   │       └── [id]/
│   │           ├── page.tsx            # /products/[id] — details + edit form, generateMetadata
│   │           ├── loading.tsx         # Details skeleton
│   │           └── error.tsx           # Error boundary with retry
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppShell.tsx            # Fixed sidebar / mobile drawer, sticky header, content
│   │   │   ├── Header.tsx              # Route title, "On duty" chip, theme toggle
│   │   │   ├── Sidebar.tsx             # Brand + nav (Overview, Products, soon: Dashboard/Settings)
│   │   │   └── ThemeToggle.tsx         # Dark/light toggle (persisted)
│   │   ├── products/
│   │   │   ├── ProductCard.tsx         # Product card in the list grid
│   │   │   ├── ProductDetails.tsx      # Readout panel + local state after edit
│   │   │   ├── ProductEditForm.tsx     # Validated form for every product field
│   │   │   └── ErrorState.tsx          # Shared error/retry presentation
│   │   ├── profile/
│   │   │   └── ProfileCard.tsx         # Personal record as a warehouse rack tag
│   │   └── ui/
│   │       ├── Barcode.tsx             # Deterministic decorative barcode strip
│   │       ├── FormField.tsx           # Labeled controlled input
│   │       └── icons.tsx               # Hand-rolled inline SVG icon set
│   │
│   ├── data/
│   │   └── profile.ts                  # Profile records
│   │
│   ├── lib/
│   │   ├── products.ts                 # Server-only fetching: list, revalidation, cached detail lookup
│   │   └── format.ts                   # Shared currency formatter (Intl.NumberFormat)
│   │
│   ├── styles/
│   │   ├── globals.css                 # Turuq design tokens, card animations
│   │   └── fonts.ts                    # Inter + JetBrains Mono (next/font)
│   │
│   └── types/
│       ├── product.ts                  # Product model matching the API shape
│       └── css.d.ts                    # Declarations for plain CSS imports
│
├── .eslintrc.json
├── .prettierrc
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts                  # Turuq palette (primary/accent/surface tokens)
└── tsconfig.json
```
