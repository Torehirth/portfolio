import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const SoMeLinks = () => {
  return (
    <nav aria-label="Social Media">
      <ul className="hidden lg:flex w-full items-center gap-3">
        <li>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/torehirth/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-primaryBlack dark:text-primaryWhite"
          >
            <LinkedInIcon
              aria-label="LinkedIn icon"
              className="text-primaryBlack dark:text-primaryWhite hover:scale-105 transition-transform duration-200"
            />
          </a>
        </li>

        <a
          rel="noopener noreferrer"
          href="https://github.com/torehirth"
          aria-label="GitHub"
          target="_blank"
          className="text-primaryBlack dark:text-primaryWhite"
        >
          <GitHubIcon
            aria-label="GitHub icon"
            className="text-primaryBlack dark:text-primaryWhite hover:scale-105 transition-transform duration-200"
          />
        </a>

        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/torehirth"
          aria-label="Instagram"
          target="_blank"
          className="text-primaryBlack dark:text-primaryWhite"
        >
          <InstagramIcon
            aria-label="Instagram icon"
            className="text-primaryBlack dark:text-primaryWhite hover:scale-105 transition-transform duration-200"
          />
        </a>

        <a
          rel="noopener noreferrer"
          href="https://www.facebook.com/torehirth"
          aria-label="Facebook"
          target="_blank"
          className="text-primaryBlack dark:text-primaryWhite"
        >
          <FacebookIcon
            aria-label="Facebook icon"
            className="text-primaryBlack dark:text-primaryWhite hover:scale-105 transition-transform duration-200"
          />
        </a>
      </ul>
    </nav>
  );
};

export default SoMeLinks;
