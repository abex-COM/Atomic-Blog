/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  daisyui: {
    darkTheme: "light",
  },
  theme: {
    extend: {
      backgroundColor: {
        "custom-green": "rgb(0,40,33)",
      },
      screens: {
        xs: "425px",
      },
    },
  },

  plugins: [require("daisyui")],
};
