import { Logo } from "../components/ui/brand/Logo";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useCopyDiscordName } from "../hooks/useCopyDiscordName";
import { FeedbackPopup } from "./../components/ui/feedback/FeedbackPopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router";

export const Footer = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("ThemeContext must be used within a provider");
  }
  const { isDarkMode } = theme;

  const { copied, copyDiscordUsername } = useCopyDiscordName();

  const linkInitialStyle = "px-2 py-1 text-lg";
  const linkActiveStyle = `${linkInitialStyle} text-accent`;

  return (
    <footer>
      <div className="max-w-layout mx-auto px-6 py-16 pb-6 md:px-10 md:pt-12">
        <div className="grid gap-8 md:grid-cols-[5fr_1fr_1fr]">
          {/* Contact */}
          <div>
            {isDarkMode ? (
              <Logo to="/" variant={"darkMode"} />
            ) : (
              <Logo to="/" variant={"lightMode"} />
            )}
            <p className="mt-2 mb-4 font-mono text-xs tracking-[0.18em] uppercase">Get in touch</p>
            <p className="text-h2 mb-4 font-semibold tracking-tight md:text-4xl">
              Always up for coffee or a chat!
            </p>
            <a href="mailto:tore@torehirth.dev" className="text-accent text-lg hover:underline">
              torehirth@gmail.com
            </a>
          </div>
          {/* Navigation */}
          <nav aria-label="Footer navigation" className="mt-0 md:mt-6">
            <p className="mb-4 font-mono text-xs uppercase">Navigation</p>
            <ul className="space-y-3">
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
                  to="/About"
                  className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? linkActiveStyle : linkInitialStyle)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* Social */}
          <div className="mt-0 md:mt-6">
            <p className="mb-4 font-mono text-xs tracking-[0.18em] uppercase">Elsewhere</p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="inline-flex items-center gap-1 hover:underline">
                  <FontAwesomeIcon aria-hidden="true" icon={faGithub} />
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-1 hover:underline">
                  <FontAwesomeIcon aria-hidden="true" icon={faLinkedin} />
                  LinkedIn
                </a>
              </li>
              <li>
                <button
                  onClick={copyDiscordUsername}
                  className="inline-flex items-center gap-1 hover:underline">
                  <FontAwesomeIcon aria-hidden="true" icon={faDiscord} />
                  Discord
                </button>
                {copied && (
                  <FeedbackPopup className="bg-accent/80 text-surface fixed right-1/2 bottom-0 mb-4 translate-x-1/2 rounded-lg border px-4 py-3 whitespace-nowrap">
                    Discord username copied!
                  </FeedbackPopup>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-border mt-14 flex flex-col gap-3 border-t pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 font-mono text-xs md:flex-row md:gap-4">
            <span className="mb-1 md:mb-0">© 2026 Tore Hirth.</span>
            <span>Built with React, TypeScript and Tailwind CSS.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
