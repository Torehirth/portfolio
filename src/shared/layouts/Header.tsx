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
  const [copied, setCopied] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const linkInitialStyle = "px-2 py-1 text-lg font-medium";
  const linkActiveStyle = `${linkInitialStyle} text-accent`;

  const copyDiscordUsername = async () => {
    await navigator.clipboard.writeText("torehirth");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <header className="border-border/50 relative h-16 border-b">
        <div className="max-w-layout mx-auto flex items-center justify-between px-4 md:px-8">
          <Link to="/" className="flex">
            {isDarkMode ? (
              <Logo variant="darkMode" aria-hidden="true" />
            ) : (
              <Logo variant="lightMode" aria-hidden="true" />
            )}
          </Link>
          <div className="flex items-center justify-between">
            {/* Desktop navigation */}
            <nav aria-label="desktop navigation menu">
              <ul className="hidden items-center gap-4 md:flex">
                <li>
                  <NavLink
                    aria-label="Navigate to home page"
                    to="/"
                    className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    aria-label="Navigate to projects page"
                    to="/projects"
                    className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    aria-label="Navigate to about page"
                    to="/about"
                    className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}>
                    About
                  </NavLink>
                </li>
                <li>
                  <ButtonLink aria-label="Navigate to contact page" to="/contact" variant="primary">
                    Contact
                  </ButtonLink>
                </li>
              </ul>
            </nav>
            <button
              type="button"
              className="cursor-pointer pr-2 md:ml-6 md:pr-0"
              aria-label="Toggle dark mode">
              {isDarkMode ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>

            {/* Mobile menu btn */}
            <div className="md:hidden">
              <button
                type="button"
                className="ml-2 cursor-pointer px-2 py-1"
                aria-label="Toggle mobile navigation menu"
                onClick={() => setIsMenuOpen((prevState) => !prevState)}>
                {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
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
              onClick={closeMenu}
              aria-label="Navigate to home page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}
              onClick={closeMenu}
              aria-label="Navigate to projects page">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}
              onClick={closeMenu}
              aria-label="Navigate to about page">
              About
            </NavLink>
          </li>
          <li>
            <ButtonLink
              to="/contact"
              variant="primary"
              onClick={closeMenu}
              aria-label="Navigate to contact page">
              Contact
            </ButtonLink>
          </li>
        </ul>
        <ul className="mt-auto flex justify-center gap-4 pb-12">
          <li>
            <a
              aria-label="Navigate to Tore Hirth's Linkedin profile"
              href="https://www.linkedin.com/in/torehirth/"
              rel="noopener noreferrer"
              target="_blank">
              <FontAwesomeIcon aria-hidden="true" icon={faLinkedin} size="xl" />
            </a>
          </li>
          <li>
            <a
              aria-label="Navigate to Tore Hirth's GitHub profile"
              href="https://github.com/Torehirth/"
              rel="noopener noreferrer"
              target="_blank">
              <FontAwesomeIcon aria-hidden="true" icon={faGithub} size="xl" />
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/torehirth"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Navigate to Tore Hirth's Facebook profile">
              <FontAwesomeIcon aria-hidden="true" icon={faFacebook} size="xl" />
            </a>
          </li>
          <li>
            <a
              aria-label="Navigate to Tore Hirth's Instagram profile"
              href="https://www.instagram.com/torehirth/"
              rel="noopener noreferrer"
              target="_blank">
              <FontAwesomeIcon aria-hidden="true" icon={faInstagram} size="xl" />
            </a>
          </li>
          <li>
            <button aria-label="Copy Discord username" onClick={copyDiscordUsername}>
              <FontAwesomeIcon aria-hidden="true" icon={faDiscord} size="xl" />
              {/* Pop over info */}
              {copied && (
                <span className="bg-accent/80 text-surface absolute right-0 bottom-20 left-0 mx-20 mb-4 rounded-lg border px-4 py-3 whitespace-nowrap">
                  <p className="">Username copied!</p>
                </span>
              )}
            </button>
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
