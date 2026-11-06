/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fcfbf7',
          100: '#f8f5ed',
          200: '#f2eddb', // print2 color #f2eddb
          300: '#eee1c5', // print2 color #eee1c5
          400: '#e5d1a8',
          500: '#d9bf89',
        },
        sand: {
          DEFAULT: '#eee1c5',
          light: '#f7f1e5',
          dark: '#decab0',
        },
        brand: {
          DEFAULT: '#f47524', // print2 color #f47524
          hover: '#e06212',
          light: '#ff8a43',
          subtle: 'rgba(244, 117, 36, 0.12)',
          border: 'rgba(244, 117, 36, 0.35)',
        },
        charcoal: {
          DEFAULT: '#252525', // print2 color #252525
          light: '#323232',
          dark: '#1a1a1a',
          deep: '#121212',
          card: '#1e1e1e',
          border: '#3a3a3a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'bento': '0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
        'bento-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.4), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
        'glow-orange': '0 0 35px -5px rgba(244, 117, 36, 0.45)',
      }
    },
  },
  plugins: [],
}
