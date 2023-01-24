/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        banner: {
          'background-image': "url('../images/banner.png') , linear-gradient(180deg, #111111 0%, rgba(17, 17, 17, 0) 100%)",
          'background-blend-mode': "multiply",
    

        },

        
      },
    },
    plugins: [],
  }