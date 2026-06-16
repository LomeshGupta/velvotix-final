/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary:  '#0099FF',
        electric: '#00C2FF',
        orange:   '#FF7A00',
        'deep-orange': '#FF5500',
        glow:     '#00D9FF',
        'bg-dark': '#030B1D',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
