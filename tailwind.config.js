/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': { DEFAULT: '#8F0938', 50: '#F11A65', 100: '#EF0F5E', 200: '#D70E54', 300: '#BF0C4B', 400: '#A70B41', 500: '#8F0938', 600: '#72072D', 700: '#550521', 800: '#390416', 900: '#1C020B', 950: '#0D0105' },
        'secondary': {  DEFAULT: '#FFA500',  50: '#FFE6B8',  100: '#FFDFA3',  200: '#FFD07A',  300: '#FFC252',  400: '#FFB329',  500: '#FFA500',  600: '#C78100',  700: '#8F5C00',  800: '#573800',  900: '#1F1400',  950: '#030200'},
      },
    },
  },
  plugins: [],
}