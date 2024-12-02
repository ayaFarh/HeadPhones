/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#aa6d6b",
        brandDark:"#151616"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        varela: ["Varela", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
         ls: "4rem",
          xl: "5rem",
         "2xl": "6rem",
        },
        screenS: {
          sm: "540px",
          md: "668px",
          lg: "924px",
          xl: "1100px",
        },
      }
    },
  },
  plugins: [],
}

