/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './html/**/*.{html,js}',
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
        'newsGray': 'rgba(50, 57, 77, 0.05)',
        'newsTags': '#0A2FB9',
      },
      gridTemplateColumns: {
        'dashboard': 'auto 400px',
        'cards': 'repeat(2, minmax(300px, 1fr))',
        'projects': '1fr 2fr 1fr',
        'projectsMore': 'repeat(10, 302px)',
        'news': '180px 1fr',
      },
    },
  },
  plugins: [],
}
