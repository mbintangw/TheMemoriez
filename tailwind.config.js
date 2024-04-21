/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
        primary : "#FF204E",
        secondary : "#A0153E",
        third : "#190411",
        fourth : "#00224D",
      },
      fontFamily: {
        mochy : ['Mochiy Pop P One', 'sans-serif'],
        'great-vibes' : ['Great Vibes', 'cursive']
      }
    },

  },
  plugins: [],
}

