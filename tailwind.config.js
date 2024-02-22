const { initFlowbite } = require('flowbite');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        'red rose':'red rose'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
