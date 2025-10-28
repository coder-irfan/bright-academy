/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colors: {
          white: "#FFFFFF",
          gray: "#39393B",
          lighGray: "#b8b8b8",
          darkGray: "#333333",
          midnight: "#050C26",
          purple: "#4D2C5E",
          darkPurple: "#321e3d",
          orange: "#FF7426",
          darkOrange: "#ff6b15",
        },
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero-bg.webp')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        h1: "clamp(1.2rem, 0.9706rem + 4.7059vw, 3.5rem)",
        h2: "clamp(1.5rem, 3vw, 2.8rem)",
        h3: "clamp(1.1rem, 2vw, 1.3rem)",
        h4: "clamp(1.2rem, 2vw, 1.2rem)",
        description: "clamp(0.85rem, 2vw, 1.2rem)",
      },
    },
  },
  plugins: [],
};
