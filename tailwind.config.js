/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter, sans-serif",
        lexend: "Lexend Deca, sans-serif;",
      },
      colors: {
        mainBackground: "hsl(233, 47%, 7%)",
        cardBackground: "hsl(244, 38%, 16%)",
        violetAccent: "hsl(277, 64%, 61%)",
        whiteColor: "hsl(0, 0%, 100%)",
        whiteMainParagraph: "hsla(0, 0%, 100%, 0.75)",
        whiteStatHeading: "hsla(0, 0%, 100%, 0.6)",
      },
      screens: {
        ds: "1440px",
      },
    },
  },
  plugins: [],
};
