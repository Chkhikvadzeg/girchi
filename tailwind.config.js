/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    
    extend: {
      colors: {
        'veryLightGreen': '#dfffe4',
        'lightGreen': '#2fa837',
        'darkGreen': '#327f37',
        'mainYellow': '#ffa823',
        'grayOpacityFull': '#32394d',
        'grayOpacityLow': '#32394de6',
        'lightBlue': '#e2eeff',
        'mainOrange': '#ffeee6',
        'mainRed': '#f10000',
      },
      gridTemplateColumns: {
        'dashboard': 'auto 400px',
        'cards': 'repeat(2, minmax(300px, 407px))',
      },
    },
  },
  plugins: [],
}