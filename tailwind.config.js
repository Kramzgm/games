/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '8px',
    },
    extend: {
      colors:{
        primary: '#404040',
        secondary: '#fbbf24',
      },
      screens:{
        'ssm': '500px',
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

