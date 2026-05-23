/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#f8f7f5',
        surface: '#ffffff',
        ink: '#1f2328',
        muted: '#5b6257',
        line: '#d9d6cf',
        pine: '#4a7c59',
        sage: '#6b8e6f',
        earth: '#b35844',
        soft: '#ece7df',
        charcoal: '#2b2d31',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
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
