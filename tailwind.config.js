/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      desaturatedCyan: "#5FB4A2",
      darkBlue: "#203A4C",
      grayishDarkBlue: "#33323D",
      veryLightGrey: "#FAFAFA",
      lightGrey: "#EAEAEB",
      brightRed: "#F43030",
      textcolor: "#979797",
      white: "white",
    },
    fontFamily: {
      ibarra: ["Ibarra Real Nova"],
      public: ["Public Sans"],
    },
    extend: {
      content: {
        img: 'url("./images/icons/down-arrows.svg")',
        arrL: 'url("./images/icons/arrow-left.svg")',
        arrR: 'url("./images/icons/arrow-right.svg")',
      },
    },
  },
  plugins: [],
};
