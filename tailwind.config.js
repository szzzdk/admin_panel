/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myCustomColor: '#9370DB',
      }
    },
    // screens: {
    //   'xs': '640px',
    //   // => @media (min-width: 640px) { ... }

    
    // }
  },
  plugins: [],
}