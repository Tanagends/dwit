/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/*.jsx",
    "./src/routes/*.jsx",
    "./src/App.jsx"
  ],
  theme: {
    extend: {
      colors:{
        main: {
          100: "#13d4f7",
          200:"#14b8d4",
          300: "#109eb8",
          400: "#0e8aa0",
          500: "#0b6b7c",
          600: "#095563",
          700: "#084550",
          800: "#063841",
          900: "#062f36"         
      },
        magnify: "#f7a40a",
        app:'#3DD877'
      },
      screens:{
        xs:'400px',
        fold:'350px'
      }
    },
  },
  plugins: [],
}

