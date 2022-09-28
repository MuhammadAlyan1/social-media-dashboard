/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        limeGreen: '#1db489',
        brightRed: '#dc414c',
        facebook: '#198ff5',
        twitter: '#1ca0f2',
        instagram: '#fb923c',
        youtube: '#c4032a',
        toggleLight: '#aeb3cb',
        veryDarkBlue: '#1e202a',
        darkDesaturatedBlue: '#252a41',
        desaturatedBlue: '#8b97c6',
        veryPaleBlue: '#f5f7ff',
        lightGrayishBlue: '#f0f2fa',
        darkGraylistBlue: '#63687e',
      },
    },
  },
  plugins: [],
};
