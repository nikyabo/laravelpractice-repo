/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./resources/**/*.js",
  "./resources/**/*.vue",
  "./resources/views/home.blade.php"],
  theme: {
    extend: {

      rotate: {
        '5': '5deg',
      }

    },
  },
  plugins: [],
}
