import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// Creates __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  // plugins: [react()],
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
