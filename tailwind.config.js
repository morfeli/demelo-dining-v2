/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      objectPosition: {
        "center-bottom": "center bottom",
      },
      backgroundColor: {
        lightGrayOne: "#eeeeee",
        lightGrayTwo: "#dddddd",
        lightGrayThree: "#cccccc",
        grayOne: "#bbbbbb",
        grayTwo: "#aaaaaa",
      },
      colors: {
        lightGrayOne: "#eeeeee",
        lightGrayTwo: "#dddddd",
        lightGrayThree: "#cccccc",
        grayOne: "#bbbbbb",
        grayTwo: "#aaaaaa",
        darkGray: "#262626",
        mediumGray: "#3c3c3b",
        lightPurple: "#8991e5",
        logoMediumPurple: "#6468ab",
        darkPurple: "#3d3075",
        highlightPurple: "#5c20df",
      },
      width: {
        "70vw": "70vw",
        "85vw": "85vw",
      },
    },
  },
  plugins: [],
};
