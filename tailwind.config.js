/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#101010",
        secondary: "#F84611",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        neutral: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: ["hover"],
    },
    screens: {
      xxs: "75px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("daisyui")],
};
