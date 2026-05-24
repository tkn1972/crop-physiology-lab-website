/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#faf9f6',
        cream: '#f5f2ec',
        surface: '#ffffff',
        ink: '#1f2328',
        muted: '#5b6257',
        line: '#d9d6cf',
        pine: '#2e7d32',
        sage: '#66bb6a',
        moss: '#c8e6c9',
        earth: '#b35844',
        soft: '#ece7df',
        forest: '#0f3d1f',
      },
      fontFamily: {
        serif: ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 18px 40px rgba(31, 35, 40, 0.06)',
      },
      maxWidth: {
        content: '76rem',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
