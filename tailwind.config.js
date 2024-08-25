/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#E0CEBA",
      },
      fontFamily: {
        Montserrat: "Montserrat",
        Nunito: "Nunito",
      },
    },
  },
  plugins: [],
}
