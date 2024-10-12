import { mobileNavEventListeners } from "../components/navigation/mobileNavEventListeners.mjs";
import { renderSkillElements } from "../components/skills/renderSkillElements.mjs";
import { displayHeaderOnScrollUp } from "../ui/displayHeaderOnScrollUp.mjs";
import { toggleProjectDescription } from "../ui/toggleProjectDescription.mjs";
import { toggleColourMode } from "../ui/toggleColourMode.mjs";
import { updateCopyrightYear } from "../components/footer/updateCopyrightYear.mjs";
import { handleButtonScroll } from "../utils/handleButtonScroll.mjs";

// Open/close the mobile nav
mobileNavEventListeners();
// Render Skill elements
renderSkillElements();
// Display nav bar on scroll up
displayHeaderOnScrollUp();
// Open and Close project description
toggleProjectDescription();
// Toggle Colour mode/theme
toggleColourMode();
// Update copyright date/year
updateCopyrightYear();
// Scroll/navigate to sections by button/link click
handleButtonScroll();
