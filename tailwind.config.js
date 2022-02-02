module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'mm': ['YoeYarOne',],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
