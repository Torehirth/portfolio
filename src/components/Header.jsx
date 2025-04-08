const Header = () => {
  return (
    <>
      <div>
        <div>
          <a id="logo-btn" href="#" aria-label="Go to top of page">
            <img
              src="./src/assets/images/logo/logo-red.svg"
              alt="Tore M. Hirth logo"
              aria-hidden="true"
              loading="lazy"
            />
          </a>
          <nav aria-label="Primary links">
            <ul>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Experience</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Social Media">
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/torehirth/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <img
                    src="./src/assets/icons/icons/linkedin.svg"
                    alt="LinkedIn icon"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/torehirth"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <img src="./src/assets/icons/icons/github.svg" alt="GitHub icon" loading="lazy" />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/torehirth"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <img
                    src="./src/assets/icons/icons/instagram.svg"
                    alt="Instagram icon"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/torehirth"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <img
                    src="./src/assets/icons/icons/facebook.svg"
                    alt="Facebook icon"
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </nav>
          <div>
            {/* <!-- colour mode --> */}
            <div aria-label="Toggle colour modes">
              <button
                id="light-mode-btn"
                aria-label="Click for light colour mode"
                title="Light colour mode"
              >
                <img
                  src="./src/assets/icons/icons/Light-mode.svg"
                  alt="Light mode icon"
                  loading="lazy"
                />
              </button>
              <button
                id="dark-mode-btn"
                aria-label="Click for dark colour mode"
                title="Dark colour mode"
              >
                <img
                  src="./src/assets/icons/icons/dark-mode.svg"
                  alt="Dark mode icon"
                  loading="lazy"
                />
              </button>
            </div>
            {/* <!-- Hamburger button --> */}
            <div title="hamburger menu">
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
