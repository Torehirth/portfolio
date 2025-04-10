export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [],
  darkMode: "selector", // OBS! To be in control of dark-mode in TailwindCSS v4 use "selector", and add the custom selector in index.css
  theme: {}, // OBS! In TailwindCSS v4 every custom theme-style must be under @theme in index.css
  plugins: [],
};
