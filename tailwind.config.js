/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}','./src/app/search/search.{html,ts}'],
  theme: {
    extend: {
      margin: {
      '250': '250px',
    },
    width :{
      '10':'10rem',
    },
    height:{
      '10': '10rem',
    }
  },
  },
  plugins: [],
}

