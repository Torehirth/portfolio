// Scroll to HTML ID by click event
export const scrollToSectionOnClick = (button, sectionId) => {
  button.addEventListener("click", () => {
    sectionId.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};
