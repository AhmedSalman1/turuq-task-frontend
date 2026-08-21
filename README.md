# Warehouse Moderator App

A streamlined inventory management interface built with Next.js 14 for the Turuq Frontend Assessment. Tailored specifically for warehouse moderators to manage products cleanly and efficiently.

---

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS

---

## 📁 Project Structure

```plaintext
turuq-task-frontend/
├── src/
│   ├── app/                        # App Router — file-based routing
│   │   ├── layout.tsx              # Root layout (metadata, global providers)
│   │   ├── page.tsx                # Home page — 5 personal info cards
│   │   └── products/
│   │       ├── page.tsx            # /products — warehouse product list
│   │       └── [id]/
│   │           └── page.tsx        # /products/[id] — product details + edit form
│   │
│   ├── components/                 # Reusable UI components (modular)
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx         # Side navigation (root ↔ /products)
│   │   │   └── ThemeToggle.tsx     # Dark/light mode toggle (persisted)
│   │   └── products/
│   │       ├── ProductCard.tsx     # Single product card in the list
│   │       └── ProductEditForm.tsx # Form to update product details
│   │
│   ├── styles/
│   │   ├── globals.css             # Turuq design tokens, spinners
│   │   └── fonts.ts                # Font loading/configuration
│   │
│   └── types/
│       ├── product.ts              # Product TypeScript model/API types
│       └── css.d.ts                # Declarations for plain CSS imports
│
├── .eslintrc.json
├── .prettierrc
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Getting Started

First, install the dependencies and run the development server:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```
