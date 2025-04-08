// import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["text-4xl", "font-bold", "text-blue-600"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primaryBlack: "#22252C",
        primaryWhite: "#F0E9F2",
        accentGrey: "#363D48",
        success: "",
        warning: "",
        error: "",
        info: "",
      },
      fontFamily: {},
      screens: {},
    },
  },
  plugins: [],
};
