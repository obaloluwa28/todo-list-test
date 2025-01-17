/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        phone_screen: { max: "600px" },
        micro_screen: { max: "400px" },
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px",
      },
      borderColor: {
        "custom-red": "#e50000",
      },
      colors: {
        greybackground: "rgba(145, 145, 145, 0.699)",
      },
    },
  },
  plugins: [],
};
