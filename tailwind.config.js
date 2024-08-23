/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(26, 100%, 55%)",
          paleorange: "hsl(25, 100%, 94%)",
        },
        neutral: {
          "very-dark-blue": "hsl(220, 13%, 13%)",
          "dark-grayish-blue": "hsl(219, 9%, 45%)",
          "grayish-blue": "hsl(220, 14%, 75%)",
          "light-grayish-blue": "hsl(223, 64%, 98%)",
          white: "hsl(0, 0%, 100%)",
          black: "hsla(0, 0%, 0%, 0.75)", // Black with 75% opacity
        },
      },
      fontFamily: {
        Kumbh: 'Kumbh Sans, sans-serif',
      },
      fontSize: {
        bodycopy: "15px",
         
      },
      fontWeight: {
       
        normal: 500,
       
        bold: 700,
      },
    },
  },
  plugins: [],
};