/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff930f",
        secondary: "#ff1b6b",
      },
    },
  },
  plugins: [],
};
