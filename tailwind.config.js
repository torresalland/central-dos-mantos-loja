/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brasil: {
          green: '#009b3a',
          yellow: '#fedf00',
          blue: '#002776',
        }
      }
    },
  },
  plugins: [],
}
