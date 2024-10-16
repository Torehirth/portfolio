const HTMLbody = document.querySelector("#body");
const hamburgerMenu = document.querySelector(".hamburger");
const mobileNav = document.querySelector("#mobile-nav");

export function toggleMobileNav() {
  // toggles the hamburger menu and mobile nav.
  hamburgerMenu.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active");
  disableScrollWhenMobileNavOpen();
}

// close the mobile nav by removing classes
export function closeMobileNav() {
  hamburgerMenu.classList.remove("is-active");
  mobileNav.classList.remove("is-active");
  disableScrollWhenMobileNavOpen();
}

// close the nav when clicked outside an "a" tag or outside the hamburger icon.
export function closeMobileNavByClickOutside(e) {
  // if the HTML element is not an "a" or the hamburger icon doesn't contain the event target, close the nav
  if (e.target.localName !== "a" && !hamburgerMenu.contains(e.target)) {
    closeMobileNav();
  }
}

// Close mobile nav by Escape key press, executed in the event listener
export const closeMobileNavByKeyPress = (e) => {
  if (e.key === "Escape") {
    closeMobileNav();
  }
};

export const disableScrollWhenMobileNavOpen = () => {
  if (mobileNav.classList.contains("is-active")) {
    HTMLbody.classList.add("no-scroll");
  } else {
    HTMLbody.classList.remove("no-scroll");
  }
};
