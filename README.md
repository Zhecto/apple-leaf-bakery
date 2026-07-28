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

## Deploying (Netlify)

**Note on hosting choice:** this is set up for Netlify rather than Vercel.
Vercel's free "Hobby" tier is explicitly restricted to personal,
non-commercial projects — running a business on it violates their terms.
Netlify's free tier explicitly permits commercial use (100 GB bandwidth,
125k function calls/month), which is what you want for an actual shop.

1. Push this repo to GitHub (see below).
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** →
   **Import an existing project** → connect GitHub → pick this repo.
3. Netlify auto-detects Astro's build settings from `astro.config.mjs`
   (build command `npm run build`, publish directory `dist`) — no manual
   config needed. Click **Deploy**.
4. From then on, every push to `main` auto-deploys. Pull requests get
   their own deploy preview URL.
5. Once deployed, go to **Site settings → Domain management** to add a
   custom domain (e.g. `appleleafbakery.com`) if you buy one later — free
   HTTPS is included automatically.

## Before going live — TODOs

A couple of placeholders in `src/data/menu.ts` need real values:

- [ ] `orderFormUrl` — the Google Form URL was truncated in the source
      screenshot this site was built from. Paste the full link.
- [ ] `pickupSchedule` — fill in the real pickup cadence.
- [ ] Menu items in `houseRegulars` and `flavourOfTheMonth` are placeholders
      based on the brand — swap in the real flavours and descriptions.

## Adding the real ordering system later

The plan for v2 is: a proper order form on the site that emails you (and
maybe the customer) when someone submits, instead of the current Google
Form link. The rest of the site stays exactly as it is — only the order
form itself becomes interactive, using a single React "island" rather
than rewriting anything else.

1. Run `npx astro add react` — this installs `@astrojs/react` and wires
   it into `astro.config.mjs` automatically.
2. Build the form itself as a React component, e.g.
   `src/components/OrderForm.tsx`, with whatever client-side state/
   validation it needs (React only ships JS for this one component —
   everything else on the page stays static HTML).
3. Drop it into a page with a `client:load` directive so it hydrates:
   ```astro
   <OrderForm client:load />
   ```
4. Create `src/pages/api/order.ts`. Because this project's `output` mode
   is already `hybrid` (static by default, opt-in per page), this route
   runs as a serverless function automatically — no config changes needed.
5. In that API route, use an email API such as [Resend](https://resend.com)
   (generous free tier, simple API) to send a notification email when an
   order comes in.
6. Add your Resend API key as an environment variable in Netlify's
   **Site settings → Environment variables** (never commit it to the repo).

No new hosting, no framework migration — just one dependency and a
couple of new files when you're ready. If down the road you want order
history/a dashboard instead of just email notifications, that's when a
database (e.g. [Supabase](https://supabase.com)) would come in — not
needed for the email-only version.

## License

Private project — all rights reserved.
