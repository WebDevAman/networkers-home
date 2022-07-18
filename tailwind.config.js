module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeColor': '#0049F3',
        'themeDark': '#111111'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ['Inter', 'sans-serif'],

      },
      scale: {
        '102': '1.02'
      }

    },
  },
  plugins: [],
};