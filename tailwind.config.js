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
      width: {
        '4.5': '18px'
      },
      height: {
        '4.5': '18px'
      },
      minWidth: {
        '89.5' : '89.5%',
        'half': '50%'
      }
    },
    fontFamily: {
      'rubik' : ['"Rubik"', 'system-ui']
    }
  },
  plugins: [],
}

