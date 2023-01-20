/** @type {import('tailwindcss').Config} */

const numbers = [];
for (let n = 1; n <= 100; n++) {
  numbers.push(n);
}
const pxToRem = (px, base = 16) => `${px / base}rem`;

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
      spacing: {
        ...numbers.reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px);
          return acc;
        }, {}),
      },
    },
  },
  plugins: [],
};
