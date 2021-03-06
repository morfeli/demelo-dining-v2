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
        overLay: "rgba(0, 0, 0, 0.5)",
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
        "30vw": "30vw",
        "70vw": "70vw",
        "85vw": "85vw",
        "90vw": "90vw",
        "50vw": "50vw",
        "500px": "500px",
      },
    },

    fontFamily: {
      Bai: ["Bai Jamjuree", "sans-serif"],
      Nautigal: ["Nautigal", "cursive"],
    },
  },
  plugins: [],
};
