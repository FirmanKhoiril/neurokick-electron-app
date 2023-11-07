/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      backgroundColor: {
        register: '#18364A',
        primary: '#2e6fff',
        sidebar: '#0E183C'
      }
    }
  },
  plugins: []
}
