/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  daisyui: {
    darkTheme: "light",
  },
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
    },
  },

  plugins: [require("daisyui")],
};
