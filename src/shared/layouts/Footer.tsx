import { Logo } from "../components/ui/brand/Logo";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useCopyDiscordName } from "../hooks/useCopyDiscordName";
import { FeedbackPopup } from "../components/ui/feedback/feedbackPopup";

export const Footer = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("ThemeContext must be used within a provider");
  }
  const { isDarkMode } = theme;

  const { copied, copyDiscordUsername } = useCopyDiscordName();

  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Contact */}
          <div>
            {isDarkMode ? (
              <Logo to="/" variant={"darkMode"} />
            ) : (
              <Logo to="/" variant={"lightMode"} />
            )}

            <p className="mb-4 font-mono text-xs tracking-[0.18em] uppercase">Get in touch</p>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Looking for my first front-end role.
            </h2>

            <a
              href="mailto:tore@torehirth.dev"
              className="text-lg font-medium text-[#a63d1d] hover:underline">
              torehirth@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="mb-4 font-mono text-xs tracking-[0.18em] uppercase">Navigation</p>

            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>

              <li>
                <a href="/projects" className="hover:underline">
                  Projects
                </a>
              </li>

              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.18em] uppercase">Elsewhere</p>

            <ul className="space-y-3">
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:underline">
                  GitHub
                </a>
              </li>

              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:underline">
                  LinkedIn
                </a>
              </li>

              <li>
                <button
                  onClick={copyDiscordUsername}
                  className="inline-flex items-center gap-2 hover:underline">
                  Discord
                </button>
                {!copied && (
                  <FeedbackPopup className="bg-accent/80 text-surface absolute right-1/2 bottom-0 mb-4 translate-x-1/2 rounded-lg border px-4 py-3 whitespace-nowrap">
                    Username copied!
                  </FeedbackPopup>
                )}
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-3 border-t border-[#20150f]/20 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 font-mono text-xs md:flex-row md:gap-4">
            <span>© 2026 Tore Hirth.</span>
            <span>Built with React & TypeScript.</span>
          </div>

          <span>Norway</span>
        </div>
      </div>
    </footer>
  );
};
