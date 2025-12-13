/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/**/*.css",
    "./src/**/*.{css,html,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#0D3B66',
        accent: '#5999B1',
        grayline: '#D1D5DB',
        brand: {
          DEFAULT: '#0D3B66',
          light: '#5999B1',
        },
      },
      fontFamily: {
        body: ['Roboto'],
      },
      fontSize: {
        navSize: "24px",
        heroSize: "74px",
        pSize: "18px",
      },
    },
  },
  plugins: [],
};
