/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "coiny": ["Coiny", "sans-serif"],
      "sans": ["Inter", "sans-serif"],
    }
  },
  plugins: [],
};
