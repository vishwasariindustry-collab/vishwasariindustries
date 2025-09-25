module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: '#002366',
        steel: '#6C757D',
        orange: '#FF6B35',
      }
    },
  },
  plugins: [],
}