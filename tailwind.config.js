/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#6F6F76",
        bgBlack: "#212121",
        bgBlackMedium: "#2C2C2C",
        orange: "#F9A825",
      },
    },
  },
  plugins: [],
};
