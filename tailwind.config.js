/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lb' : '#F7FBFD',
        'grey': '#DCE0E1'
      },
      minWidth: {
        'half': '50%'
      }
    },
    fontFamily: {
      'rubik' : ['"Rubik"', 'system-ui']
    }
  },
  plugins: [],
}

