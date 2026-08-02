# Apple Leaf Bakery

Website for Apple Leaf Bakery — Winnipeg specialty cookies, baked in
rotating monthly batches.

**Stack:** [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com),
deployed on [Netlify](https://netlify.com) (chosen over Vercel because
Netlify's free tier explicitly allows commercial use — see the deploy
section below). TypeScript throughout. React is intentionally not
installed yet — see "Adding the order form" below for when/how it comes in.

## Project structure

```
apple-leaf-bakery/
├── public/                 # static files served as-is (favicon, images)
├── src/
│   ├── components/         # one .astro file per section of the page
│   ├── data/
│   │   └── menu.ts         # ← edit flavours, tags, and site info here
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro     # homepage, assembles the components
│   └── styles/
│       └── global.css      # Tailwind entrypoint + a few signature textures
├── astro.config.mjs
├── tailwind.config.mjs     # colors, fonts — the site's design tokens
└── package.json
```

## Editing content

You almost never need to touch a component to update the site day-to-day.

- **Change flavours, the monthly special, pickup info, or links** → edit
  `src/data/menu.ts`. Every page reads from this file.
- **Change colors or fonts** → edit `tailwind.config.mjs` under
  `theme.extend`. Colors are named (`apple`, `leaf`, `gingham`, `butter`,
  etc.) and used as Tailwind classes throughout, e.g. `bg-apple`,
  `text-leaf-deep`.
- **Change layout/sections** → edit the relevant file in `src/components/`,
  using Tailwind utility classes directly on elements (no separate CSS
  files to hunt through).
- A few brand-specific textures (the gingham weave, the ribbon divider)
  aren't plain utility classes — they're defined once in
  `src/styles/global.css` under `@layer components` and reused via
  `class="gingham"` / `class="ribbon-divider"`.

## Local development

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

This starts a local server (usually `http://localhost:4321`) that live-reloads
as you edit files.

```bash
npm run build      # builds the production site into dist/
npm run preview    # previews that production build locally
```

## License

Private project — all rights reserved.
