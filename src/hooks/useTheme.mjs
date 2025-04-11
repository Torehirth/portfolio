import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.theme;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(prefersDark ? "dark" : "light");
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!theme) return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const resetTheme = () => {
    localStorage.removeItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(systemPrefersDark ? "dark" : "light");
  };

  return { theme, toggleTheme, resetTheme, isMounted };
};

export default useTheme;
