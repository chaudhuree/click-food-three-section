/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackbg': '#050116',
        'primary':'#A1045A',
        'secondary': '#27AE60',
      },
      fontFamily: {
        'viga': ['Viga', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [require('daisyui')],
}

