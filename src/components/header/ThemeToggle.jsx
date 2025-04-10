import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggle = () => {
  return (
    <div>
      <button
        aria-label="Toggle colour theme"
        title="Toggle colour theme"
        className="ring-1 rounded-xl px-1 dark:ring-primaryWhite group"
      >
        <span aria-label="Click for light colour mode">
          <LightModeSharpIcon
            className="dark:text-primaryWhite mr-0.5 group-hover:scale-90"
            aria-label="Light mode icon"
          />
        </span>
        <span>
          <DarkModeIcon
            className="dark:opacity-0 ml-0.5 group-hover:scale-90"
            aria-label="Dark mode icon"
          />
        </span>
      </button>
    </div>
  );
};
export default ThemeToggle;
