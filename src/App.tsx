import { Router } from "./app/router/Router";
import { ThemeContext } from "./shared/context/ThemeContext";
import { useDarkMode } from "./shared/hooks/useDarkMode";

export const App = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log(isDarkMode);

  return (
    <ThemeContext value={{ isDarkMode, toggleDarkMode }}>
      <Router />
    </ThemeContext>
  );
};
