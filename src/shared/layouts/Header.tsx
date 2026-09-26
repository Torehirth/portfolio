import { Menu, MoonIcon, Sun, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import { useState } from "react";
import { ButtonLink } from "../components/ui/buttons/ButtonLink";
import { Logo } from "../components/ui/brand/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const linkInitialStyle = "px-2 py-1 text-lg font-medium";
  const linkActiveStyle = `${linkInitialStyle} text-accent`;

  return (
    <>
      <header className="border-border/50 relative h-16 border-b">
        <div className="max-w-layout mx-auto flex items-center justify-between px-4 md:px-8">
          <div className="flex">
            {isDarkMode ? <Logo variant="darkMode" /> : <Logo variant="lightMode" />}
          </div>
          <div className="flex items-center justify-between">
            {/* Desktop navigation */}
            <nav aria-label="desktop navigation menu">
              <ul className="hidden items-center gap-4 md:flex">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}>
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
            <button type="button" className="cursor-pointer pr-2 md:ml-6 md:pr-0">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>

            {/* Mobile menu btn */}
            <div className="md:hidden">
              <button
                type="button"
                className="ml-2 cursor-pointer px-2 py-1"
                onClick={() => setIsMenuOpen((prevState) => !prevState)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile nav menu */}
      <nav
        aria-label="mobile navigation menu"
        className={`bg-subtle fixed top-16 right-0 z-50 flex h-[calc(100vh-4rem)] w-full max-w-100 flex-col pt-12 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="flex flex-col items-center gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}
              onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}
              onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}
              onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <ButtonLink to="/contact" variant="primary" onClick={closeMenu}>
              Contact
            </ButtonLink>
          </li>
        </ul>
        <ul className="mt-auto flex justify-center gap-4 pb-12">
          <li>
            <Link to="https://www.linkedin.com/in/torehirth/">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/Torehirth/">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </Link>
          </li>
          <li>
            <Link to="">
              <FontAwesomeIcon icon={faDiscord} size="xl" />
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/torehirth">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/torehirth/">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Backdrop blur */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-10 backdrop-blur-lg md:hidden"
          onClick={closeMenu}></div>
      )}
    </>
  );
};
