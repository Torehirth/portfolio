import { mobileNavEventListeners } from "../components/navigation/mobileNavEventListeners.mjs";
import { renderSkillElements } from "../components/skills/renderSkillElements.mjs";
import { displayHeaderOnScrollUp } from "../ui/displayHeaderOnScrollUp.mjs";

// Open/close the mobile nav
mobileNavEventListeners();
// Render Skill elements
renderSkillElements();
// Display nav bar on scroll up
displayHeaderOnScrollUp();
