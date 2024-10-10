import {
  toggleMobileNav,
  closeMobileNav,
  closeMobileNavByClickOutside,
  disableScrollWhenMobileNavOpen,
  closeMobileNavByKeyPress,
} from "./mobileNavHandlers.mjs";

const hamburgerMenu = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".main-link");
const mobileSoMeLinks = document.querySelectorAll(".contact-some-link");

// handle all event listeners on the mobile nav
export function mobileNavEventListeners() {
  // toggle the mobile nav with the hamburger icon
  hamburgerMenu.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMobileNav();
    // if mobile nav is open stop page from scrolling
    disableScrollWhenMobileNavOpen();
  });

  // close the nav when clicked outside an "a" tag or outside the hamburger icon.
  document.addEventListener("click", closeMobileNavByClickOutside);

  // Close mobile nav by Escape key press
  document.addEventListener("keydown", closeMobileNavByKeyPress);

  // close the nav when a page link inside it is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
  // close the nav when a SoMe link inside it is clicked
  mobileSoMeLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
}
