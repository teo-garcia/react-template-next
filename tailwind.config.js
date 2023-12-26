// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: colors.amber['500'],
        secondary: colors.amber['600'],
        black: colors.slate['800'],
        white: colors.slate['100'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
