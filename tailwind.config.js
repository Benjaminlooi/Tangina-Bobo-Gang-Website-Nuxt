module.exports = {
  purge: [
    // https://stackoverflow.com/questions/66484296/some-tailwind-styles-not-working-in-production-with-next-js
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Josefin Sans'],
      // serif: ['Josefin Sans'],
      // mono: ['Josefin Sans'],
      // display: ['Josefin Sans'],
      // body: ['Josefin Sans'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
