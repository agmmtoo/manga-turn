const colors = require("tailwindcss/colors")

module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'mm': ['Pyidaungsu',],
        'sora': ['Sora'],
      },
      colors: colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
