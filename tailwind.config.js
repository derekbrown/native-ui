const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['scale-90', 'shadow-inner', 'hover:scale-90', 'active:scale-90', 'active:shadow-inner'],
  theme: {
    extend: {
      animation: {
        'opacity-slow': 'opacity 5s ease-in-out infinite',
        'scale-slow': 'scale 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': '0.65rem',
        '3xs': '0.5rem',
      },
      keyframes: {
        opacity: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        },
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      maxWidth: {
        studio: '23rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
