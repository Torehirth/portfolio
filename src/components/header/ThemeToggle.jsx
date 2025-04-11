import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import useTheme from "../../hooks/useTheme.mjs";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button
        onClick={toggleTheme}
        aria-label="Toggle colour theme"
        title="Toggle colour theme"
        className="inlet-shadow group cursor-pointer"
      >
        {theme === "dark" ? (
          <LightModeSharpIcon
            className="text-primaryWhite group-hover:scale-95"
            aria-label="Light mode icon"
          />
        ) : (
          <DarkModeSharpIcon
            className="text-primaryBlack ml-0.5 group-hover:scale-95"
            aria-label="Dark mode icon"
          />
        )}
      </button>
    </div>
  );
};
export default ThemeToggle;
