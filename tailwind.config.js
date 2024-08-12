/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '7xl': '7rem',
      },
      colors: {
        aqua: '#00ffff',
        new: '#09df90'
      },
      keyframes: {
        Line2: {
          '0%': { width: '10rem' },
          '50%': { width: '0rem' },
          '100%': { width: '10rem' },
        },
        Line1: {
          '0%': { width: '6rem'},
          '50%': { width: '0rem' },
          '100%': { width: '6rem'},
        }
      },
      animation: {
        Line1 : 'Line1 4s ease infinite',
        Line2: 'Line2 4s ease infinite',
        Line3: 'Line2 3s ease infinite',
      },
    }
  },
  plugins: [],
}

