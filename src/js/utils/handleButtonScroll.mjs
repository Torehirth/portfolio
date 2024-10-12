import { scrollToSectionOnClick } from "./scrollToSectionOnClick.mjs";
// Creates an array of objects, where each object contains the buttons and the corresponding section.
const sections = [
  { buttons: ".projects-btn", section: "#projects" },
  { buttons: ".skills-btn", section: "#skills" },
  { buttons: ".about-btn", section: "#about" },
  { buttons: ".experience-btn", section: "#experience" },
  { buttons: ".contact-btn", section: "#contact" },
  { buttons: ".logo-btn", section: "#header" },
];

// Loops over each object in the array, and for each, it selects the buttons and targetSection
export const handleButtonScroll = () => {
  sections.forEach(({ buttons, section }) => {
    const navButtons = document.querySelectorAll(buttons);
    const targetSection = document.querySelector(section);

    // Loops over all the buttons/links, so each button navigates to the corresponding section
    navButtons.forEach((button) => {
      scrollToSectionOnClick(button, targetSection);
    });
  });
};
