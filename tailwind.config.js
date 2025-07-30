/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue-green': '#0d9488', // teal-600
        'brand-soft-gray': '#d1d5db', // gray-300
        'brand-accent': '#f59e0b', // amber-500
      }
    },
  },
  plugins: [],
}
