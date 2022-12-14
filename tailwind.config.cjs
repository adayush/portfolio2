/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
          'grow-in': {
              '0%': {
                  opacity: '0.5',
                  transform: 'scale(0.8)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'scale(1)'
              },
          }
      },
      animation: {
          'grow-in': 'grow-in 0.4s ease-out'
      }
    },
  },
  plugins: [],
}
