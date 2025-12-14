/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/**/*.css",
    "./src/**/*.{css,html,js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
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
        heroSize: "64px",
        pSize: "18px",
      },
    },
  },
  plugins: [],
};
