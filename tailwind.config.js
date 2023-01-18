/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Alfa Slab One", "cursive"],
        content: ["Arial"],
      },
      colors: {
        black: "#1A1818",
        green: "#00C69A",
        yellow: "#F4E66B",
        blue: "#70ABFE",
        skyblut: "#99EBFA",
        mint: "#A0F7E5",
        red: "#FF8989",
        gray: "#C9C9C9",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
