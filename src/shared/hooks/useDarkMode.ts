import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const initialTheme = () => {
      document.documentElement.classList.toggle(
        "dark",
        localStorage.darkMode === "true" ||
          (!("darkMode" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches),
      );
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    initialTheme();
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      setIsDarkMode(true);
      localStorage.setItem("darkMode", "true");
    } else {
      setIsDarkMode(false);
      localStorage.setItem("darkMode", "false");
    }
  };
  return { isDarkMode, toggleDarkMode };
};
