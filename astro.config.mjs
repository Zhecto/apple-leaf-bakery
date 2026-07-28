import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build/en/guides/deploy/netlify/
export default defineConfig({
  output: 'hybrid', // static by default; pages opt in to server rendering individually
  adapter: netlify(),
  integrations: [tailwind({ applyBaseStyles: false })],
  // When you add the order form's API route later, this project is ready
  // for it as-is (see README) — and when you're ready to add the React
  // island for that form, run `npx astro add react` to wire it up.
});
