/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  extend: {
    colors: {
      "dark-primary": "#2A254B",
      "primary": "#4E4D93",
      "light-grey": "#F9F9F9",
      "border-grey": "#EBE8F4",
      "white": "#FFFFFF",
      "border-dark": "#CAC6DA",
    },
    fontFamily: {
      clashRegular:['ClashRegular', 'sans-serif'],
      satoshi:['Satoshi', 'sans-serif'],
    },
  }
  },
  plugins: [],
};
