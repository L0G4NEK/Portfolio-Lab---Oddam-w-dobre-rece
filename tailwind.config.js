/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './public/**/*.{html,js}',
    './src/**/*.{html,js}'
  ],
  theme: {
    colors: {
      'color-background': '#F0F1F1',
      'color-one': '#5E5322',
      'color-two': '#FAD648',
      'color-three': '#737373',
      'color-font': '#3C3C3C',
    },
    fontFamily: {
      'font-base': 'Merriweather, serif',
      'font-alt': 'Open Sans, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}
