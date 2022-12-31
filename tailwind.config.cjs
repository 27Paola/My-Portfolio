/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true, 
    },
    fontFamily: {
      'Passions':['Passions Conflict','sans-serif'],
      'Shadows':['Shadows Into Light','sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
