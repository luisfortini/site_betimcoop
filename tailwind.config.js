/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'betim-primary': '#1E432B',
        'betim-secondary': '#2A5A3B',
        'betim-accent': '#EBC03A',
        'betim-gray': '#FDF8EC',
        'betim-dark': '#112215'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
