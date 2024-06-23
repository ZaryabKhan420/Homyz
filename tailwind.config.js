/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
      center: true,
    },
    colors: {
      primary: "#1f3e72",
      secondary: "#9B9A9A",
      black: "#131110",
      blueGradient: "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
      orangeGradient: "linear-gradient(270deg, #ffb978 0%, #ff922d 100%)",
      blue: "#4066ff",
      lightBlue: "#5D77D6",
      shadow: "0px 23px 21px -8px rgba(136, 160, 255, 0.25",
      white: "#fff",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans - serif"],
    },
  },
  plugins: [],
};
