// eslint.config.mjs
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      // JavaScript recommended rules
      ...js.configs.recommended.rules,

      // React recommended rules
      ...pluginReact.configs.recommended.rules,

      // Prettier plugin rules
      "prettier/prettier": "error", // Show Prettier formatting problems as ESLint errors

      // Your own custom rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
]);
