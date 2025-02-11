/* eslint-disable @typescript-eslint/no-require-imports */
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: colors.blue['600'],
        secondary: colors.blue['400'],
        black: colors.slate['800'],
        white: colors.slate['100'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
