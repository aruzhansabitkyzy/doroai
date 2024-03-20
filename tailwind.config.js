/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "nunito"],
      },
      colors: {
        maine: "#5458EA",
        coral: "#F34545",
        grey: "#C0C0C0",
        newblack: "#494949",
        neutralGrey: "#F7F6F9"
      },
    },
  },
  plugins: [],
};
