/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      whiteSmoke: '#F5F5F5',
      seaGreen: '#3ab16e',
      darkSeaGreen: '#2E8B57',
      darkGreen: '#1d5737'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
