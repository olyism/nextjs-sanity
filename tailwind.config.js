/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      template: colors.slate['900'],
      icon: colors.slate['900'],
      'base-color': colors.slate['700'],
    },
    fontFamily: {
      heading: ['var(--heading-font)'],
      system: ['var(--system-font)'],
    },
    extend: {
      flexGrow: {
        2: '2',
      },
      height: {
        header: '58px',
        logo: '40px',
      },
    },
  },
  safelist: ['text-white'],
  plugins: [require('@tailwindcss/typography')],
}
