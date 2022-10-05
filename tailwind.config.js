/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary':'#f9f9f9',
        'secondary': '#ebebeb',
        'tertiary': '#e1692b'
      })
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}

