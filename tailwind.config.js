/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'background1': "url('/top1.jpg')", 
        'background2':"url('/down.jpg')" ,
      },

    },
  },
  plugins: [],
}
