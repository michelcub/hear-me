/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#1A1A1A',
      'grey-light': '#F6F6F6',
      'gray': '#E6E6E6',
      'blue': '#0F408A',
      'blue-light': '#D1E1FA',
      'orange-light': '#FFE3CC',
      'blue-extra-light': '#E8F0FD',
      'yellow-light': '#FEFFCC',
      'green-light': '#D3FECD'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Roboto', 'serif'],
      
    },
    extend: {},
  },
  plugins: [],
}