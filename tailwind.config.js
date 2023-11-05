/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColors: {
        'primary': '#3490dc',
        'secondary': '#53AF80',
        'danger': '#e3342f',
      },
      fontFamily: {
        'sansation': ['Sansation', 'sans'], // 'sans' is a generic fallback
      },
      screens: {
        'xxs': '540px', // min-width
      },
      // Other theme customizations
    },
  },
  plugins: [],
}
