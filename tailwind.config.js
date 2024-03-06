/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderBottomClass: {
        'border-bottom': '2px solid #111',
      },
    },
  },
  plugins: [],
};