# Prestige Legal Attorneys

A premium, agency-quality law firm website built with React 18, Vite, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS v4**
- **shadcn/ui** (Radix UI primitives)
- **Framer Motion** animations
- **Lucide React** icons
- **React Router DOM**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel auto-detects Vite — no extra configuration needed
4. Deploy

The included `vercel.json` handles SPA routing for client-side navigation.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Legal Services |
| `/attorneys` | Our Attorneys |
| `/case-results` | Case Results |
| `/faq` | FAQ |
| `/contact` | Contact |

## Customization

- **Brand colors**: `src/index.css` (`@theme` block)
- **Content**: `src/data/` (services, attorneys, testimonials, FAQ, cases)
- **Images**: Replace Unsplash URLs with your own assets
- **SEO**: `index.html` meta tags + `SEO` component per page

## Project Structure

```
src/
├── components/
│   ├── animations/   # Framer Motion wrappers
│   ├── layout/       # Navbar, Footer, Layout
│   ├── sections/     # Reusable page sections
│   └── ui/           # shadcn/ui components
├── data/             # Placeholder content
├── hooks/            # useCounter, etc.
├── pages/            # Route pages
├── lib/              # Utilities
├── App.jsx
└── main.jsx
```

## License

Private — Prestige Legal Attorneys
