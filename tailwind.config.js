/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1c1917',
        ivory: '#f7f4ef',
        warm: '#ede8e0',
        sand: '#c9b99a',
        rust: '#a0522d',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        fadeUp: 'fadeUp 0.4s ease forwards',
        breathe: 'breathe 9s ease-in-out infinite',
        drift: 'drift 22s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.75' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '33%': { transform: 'translate(6px, -9px)' },
          '66%': { transform: 'translate(-5px, 6px)' },
        },
      },
    },
  },
  plugins: [],
}
