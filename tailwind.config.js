module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeColor': '#0049F3',
        'themeDark': '#111111',
        'themeViolet': '#6366F1'
      },
      fontFamily: {
        lato: ['Lato', "sans-serif"],

      },
      boxShadow: {
        'CourseCard': '0px 10px 24px -24px rgba(0,0,0,0.75)'
      }

    },
  },
  plugins: [],
};