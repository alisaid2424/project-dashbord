/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container :{
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        'blue-color': '#0075ff',
        'blue-alt-color': '#0d69d5',
        'orange-color': '#f59e0b',
        'green-color': '#22c55e',
        'red-color': '#f44336',
        'grey-color': '#888',
        'secandry' :'#eee'
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      animation: {
        'changeColor': 'changeColor 0.8s infinite alternate',
      },
      keyframes: {
        'changeColor': {
          '0%': { backgroundColor: '#0075ff' },
          '100%': { backgroundColor: 'white' },
        },
      },
    },
  },
  plugins: [],
}


