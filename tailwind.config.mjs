/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f6ead6',
        'cream-deep': '#efe0c4',
        ink: {
          DEFAULT: '#2e241d',
          soft: '#4a3d31', // body copy on light backgrounds
          softer: '#5a4c3d', // secondary/smaller copy
        },
        apple: {
          DEFAULT: '#b23a2e',
          deep: '#8f2c22',
        },
        gingham: '#c65b4e',
        leaf: {
          DEFAULT: '#4b6b4a',
          deep: '#37502f',
        },
        butter: '#e7ab3b',
        paper: '#fffaf1',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Karla', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 14px 30px rgba(46,36,29,0.10)',
        'card-sm': '0 14px 24px rgba(46,36,29,0.10)',
      },
    },
  },
  plugins: [],
};
