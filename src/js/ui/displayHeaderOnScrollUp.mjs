const headerBarContainer = document.querySelector(".header-bar-container");
const headerBar = document.querySelector(".header-bar");

export const displayHeaderOnScrollUp = () => {
  // Keep track of last scroll position
  let lastScroll = 0;
  if (window.scrollY > 100) {
    headerBarContainer.classList.add("scroll-down");
  }

  // updates the initial visibility on the nav bar
  headerBarContainer.style.visibility = "visible";

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (
      // If scrolling down add class of scroll-down, it hides the nav bar
      lastScroll < currentScroll &&
      !headerBarContainer.classList.contains("scroll-down")
    ) {
      headerBarContainer.classList.remove("scroll-up");
      headerBarContainer.classList.add("scroll-down");
    }

    if (
      // If scrolling up, add scroll-up class that shows the nav bar, and removes top/bottom padding.
      lastScroll > currentScroll &&
      headerBarContainer.classList.contains("scroll-down")
    ) {
      headerBarContainer.classList.remove("scroll-down");
      headerBarContainer.classList.add("scroll-up");
      headerBar.style.padding = "0 1rem";
    }

    if (
      // if scroll position is 100 pixels from the top it removes the class and adds initial padding, results in showing intial nav bar styling
      lastScroll < 100 &&
      headerBarContainer.classList.contains("scroll-up")
    ) {
      headerBarContainer.classList.remove("scroll-up");
      headerBar.style.padding = "1rem 1rem";
    }

    // Updates the lastScroll to currentScroll to keep track of lates scroll position, needs to be at last
    lastScroll = currentScroll;
  });
};
