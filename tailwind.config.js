/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lb' : '#F7FBFD',
        'grey': '#DCE0E1',
        'custom': '#B7E0FF'
      },
      fontSize: {
        '80': '80%'
      },
      animation: {
        animateOutline: 'animateOutline 4s ease infinite'
      },
      keyframes: {
        animateOutline: {
          '0%' : {
            'outline-width': '1px',
            'outline-offset': '0',
            'outline-color': 'rgba(0, 130, 206, 0)'
          },
          '10%' : {
            'outline-color': 'rgba(0, 130, 206, 0.75)'
          },
          '50%' : {
            'outline-width': '7px',
            'outline-offset': '4px',
            'outline-color': 'rgba(0, 130, 206, 0)'
          },
          '100%' : {
            'outline-width': '7px',
            'outline-offset': '4px',
            'outline-color': 'rgba(102, 102, 102, 0)'
          }
        }
      },
      width: {
        '4.5': '18px',
        'half': '50%',
        '85': '85%',
      },
      height: {
        '4.5': '18px',
        '85': '85%',
      },
      minWidth: {
        '85': '85%',
        '89.5' : '89.5%',
        'half': '50%',
        '5': '5%'
      },
      maxWidth: {
        'half': '50%',
        '85': '85%',
        '10': '10%'
      },
    },
    fontFamily: {
      'rubik' : ['"Rubik"', 'system-ui']
    }
  },
  plugins: [],
}

