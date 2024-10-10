const body = document.querySelector("#body");
const colourModeWrapper = document.querySelector(".colour-mode-wrapper");
const lightModeBtn = document.querySelector("#light-mode-btn");
const darkModeBtn = document.querySelector("#dark-mode-btn");

export const toggleColourMode = () => {
  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("is-active") &&
      (e.target === lightModeBtn || e.target.closest("img") === lightModeBtn)
    ) {
      // Switch to Dark Mode
      darkModeBtn.classList.add("is-active");
      lightModeBtn.classList.remove("is-active");
      body.classList.add("light-mode");
      // Button wrapper styling
      colourModeWrapper.style.backgroundColor = "var(--success-colour)";
      colourModeWrapper.style.boxShadow = "1px -1px 6px var(--text-colour)";
    } else if (
      e.target.classList.contains("is-active") &&
      (e.target === darkModeBtn || e.target.closest("img") === darkModeBtn)
    ) {
      // Switch to Light Mode
      lightModeBtn.classList.add("is-active");
      darkModeBtn.classList.remove("is-active");
      body.classList.remove("light-mode");
      // Button wrapper styling
      colourModeWrapper.style.backgroundColor = "";
      colourModeWrapper.style.boxShadow = "";
    }
  });
};
