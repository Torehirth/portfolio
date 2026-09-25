import { MoonIcon, Sun } from "lucide-react";
import { NavLink } from "react-router";
import lightModeLogo from "../assets/logo/dark-logo.svg";
import darkModeLogo from "../assets/logo/light-logo.svg";

export const Header = () => {
  const darkMode = true;
  return (
    <>
      <header className="border-border/50 border-b">
        <div className="max-w-layout mx-auto flex items-center justify-between">
          <div className="flex">
            <NavLink to="/" className="px-4 py-2">
              <img
                src={darkMode ? darkModeLogo : lightModeLogo}
                alt="Tore Hirth's initials"
                className="h-12 w-12"
              />
            </NavLink>
          </div>
          <div className="flex items-center justify-between">
            <nav aria-label="desktop menu">
              <ul className="flex items-center gap-2">
                <li>
                  <NavLink to="/projects" className="px-2 py-1 text-lg font-medium">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="px-2 py-1 text-lg font-medium">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="px-2 py-1 text-lg font-medium">
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button type="button" className="ml-2 cursor-pointer px-2 py-1">
              {darkMode ? <MoonIcon /> : <Sun />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
