/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      cobalt: {
        50: '#F2F5FB',
        100: '#E5EBF7',
        200: '#BFCEEA',
        300: '#99B0DE',
        400: '#7393D1',
        500: '#4D75C5',
        600: '#2658B8',
        700: '#003AAC',
        800: '#003292',
        900: '#002978',
        950: '#00205F',
        DEFAULT: '#003AAC',
      },
    },
    fontFamily: {
      display: ['var(--open-sans-font)'],
    },
    extend: {},
  },
  plugins: [],
}
