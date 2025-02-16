/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'gentle-pulse': 'gentle-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-crazy': 'spin-crazy 12s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite',
        'fly-around': 'fly-around 12s linear infinite',
      },
      keyframes: {
        'gentle-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'spin-crazy': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(180deg) scale(1.5)' },
          '50%': { transform: 'rotate(180deg) scale(1)' },
          '75%': { transform: 'rotate(360deg) scale(1.5)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'fly-around': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg) translate(180px) rotate(0deg) scale(1.2)' },
          '50%': { transform: 'translate(-50%, -50%) rotate(180deg) translate(180px) rotate(-180deg) scale(1.5)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg) translate(180px) rotate(-360deg) scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
