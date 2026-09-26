import { Menu, MoonIcon, Sun, X } from "lucide-react";
import { NavLink } from "react-router";
import lightModeLogo from "../assets/logo/dark-logo.svg";
import darkModeLogo from "../assets/logo/light-logo.svg";
import { useState } from "react";
import { ButtonLink } from "../components/ui/ButtonLink";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  console.log(isMenuOpen);

  return (
    <>
      <header className="border-border/50 relative h-16 border-b">
        <div className="max-w-layout mx-auto flex items-center justify-between px-4 md:px-8">
          <div className="flex">
            <NavLink to="/" className="px-4 py-2">
              <img
                src={isDarkMode ? lightModeLogo : darkModeLogo}
                alt="Tore Hirth's initials"
                className="h-12 w-12"
              />
            </NavLink>
          </div>
          <div className="flex items-center justify-between">
            <nav aria-label="desktop navigation menu">
              {/* Desktop navigation */}
              <ul className="hidden items-center gap-2 md:flex">
                <li>
                  <NavLink to="/" className="px-2 py-1 text-lg font-medium">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className="px-2 py-1 text-lg font-medium">
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="px-2 py-1 text-lg font-medium">
                    About
                  </NavLink>
                </li>
                <li>
                  <ButtonLink to="/contact" variant="primary">
                    Contact
                  </ButtonLink>
                </li>
              </ul>
            </nav>
            <button type="button" className="cursor-pointer pr-2 md:ml-5 md:pr-0">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            {/* Mobile navigation */}
            <div className="md:hidden">
              <button
                type="button"
                className="ml-2 cursor-pointer px-2 py-1"
                onClick={() => setIsMenuOpen((prevState) => !prevState)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          <nav
            id="mobile-nav"
            aria-label="mobile navigation menu"
            className={`bg-subtle absolute top-16 z-50 h-screen w-full max-w-100 pt-12 shadow-lg transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? "right-0" : "-right-full"}`}>
            <ul className="flex flex-col items-center gap-6">
              <li>
                <NavLink to="/" className="px-2 py-1 text-lg font-medium" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="px-2 py-1 text-lg font-medium"
                  onClick={closeMenu}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="px-2 py-1 text-lg font-medium" onClick={closeMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <ButtonLink to="/contact" variant="primary" onClick={closeMenu}>
                  Contact
                </ButtonLink>
              </li>
            </ul>
          </nav>
          {/* Backdrop blur */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 top-16 z-10 backdrop-blur-lg md:hidden"
              onClick={closeMenu}></div>
          )}
        </div>
      </header>
    </>
  );
};
