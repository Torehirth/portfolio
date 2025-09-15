// Scroll to section by click event
export const scrollToSectionOnClick = (button, sectionElement) => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    sectionElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};