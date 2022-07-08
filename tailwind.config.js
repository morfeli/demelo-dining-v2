/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      },
      width: {
        "70vw": "70vw",
      },
    },
  },
  plugins: [],
};
