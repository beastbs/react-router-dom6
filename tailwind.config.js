/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{react,js,ts,jsx,tsx}'],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        'white-bg': '#374a72',
        'dark-bg': '#232e4a'
      }
    },
  },
  plugins: [],
}

