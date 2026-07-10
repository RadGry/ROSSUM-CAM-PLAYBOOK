# ROSSUM CAM Operating Playbook

A React-powered operating manual for the Commercial Account Manager seat at Rossum — grammar, competencies, worked knot library, and reference shelf.

## Stack

- **React 19** + **TypeScript**
- **Vite** for dev and production builds
- Deploys to **Vercel** with zero config

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy on Vercel

1. Push to [GitHub](https://github.com/RadGry/ROSSUM-CAM-PLAYBOOK).
2. Import the repo in [Vercel](https://vercel.com).
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`

## Project structure

```
src/
├── components/     # UI components (Sidebar, KnotsSection, etc.)
├── data/           # Content as typed data (knots, competencies, primitives)
├── App.tsx         # Page layout
└── index.css       # Design system styles
legacy/             # Original static HTML version
```

## What's improved over the static version

- Mobile slide-out navigation with active section highlighting
- Knot library search and verdict filtering
- Component-based structure for easier content updates
- OG/meta tags for sharing
- Inter font + valid CSS font weights
