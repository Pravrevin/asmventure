/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          50: '#fdf8ed',
          100: '#faedcd',
          200: '#f5d98e',
          300: '#efbf52',
          400: '#eaa72b',
          500: '#d18a0e',
          600: '#b76e09',
          700: '#92560a',
          800: '#78450d',
          900: '#65390f',
        },
        dark: {
          900: '#0f0f0f',
          800: '#1a1a1a',
          700: '#2a2a2a',
        },
        cream: '#Fdfbf7',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-in': 'slide-in 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
