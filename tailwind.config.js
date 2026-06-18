/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  purge: ['./src//*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./index.html", "./src//*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {},
  },
};