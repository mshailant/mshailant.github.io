/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lblue: "#8ECAE6",
      blue: "#219EBC",
      dblue: "#023047",
      yellow: "#FFB703",
      orange: "#FB8500",
    },
    screens: {
      md: { max: "1369px" },
      sm: { max: "739px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-jet)"],
      },
    },
  },
  plugins: [require("tailwindcss-opentype")],
};
