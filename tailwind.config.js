/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ['Bebas_Neue'], 
        custom2: ['Century_Gothic'],   
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Bebas_Neue',
            src: 'url("/fonts/BebasNeue-Regular.woff2") format("woff2")',
            src: 'url("/fonts/BebasNeue-Regular.woff") format("woff")',
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          {
            fontFamily: 'Century_Gothic',
            src: 'url("/fonts/Century Gothic.woff2") format("woff2")',
            src: 'url("/fonts/Century Gothic.woff") format("woff")',
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
        ],
      });
    }),
  ],
};
