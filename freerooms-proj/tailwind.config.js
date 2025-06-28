/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}", // Ensure this or similar is included
    "./index.html",
  ],
  darkMode: 'class', // Changed to 'media'
  theme: {
    extend: {},
  },
  plugins: [],
}