/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '480px'
      },
      colors: {
        primary: '#ff6363',
        secondary: {
          '100': '#e2e2d5',
          '200': '#888883'
        }
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
        'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
    fontFamily: {
      body: ['Nunito']
    }
  },
  plugins: [],
}
