/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      whiteSmoke: '#F5F5F5',
    }
  },
  plugins: [require('flowbite/plugin')],
}
