import { createFigureElement } from "./createFigureElement.mjs";

const skillsContainers = document.querySelectorAll(".skill-slider");

export const renderSkillElements = () => {
  // Error handling if container isn't present
  if (!skillsContainers.length) {
    console.error("No container found with the class [skill-slider]");
  }

  // create skill elements and save to array
  const SkillsElements = [];
  SkillsElements.push(
    createFigureElement(
      "JavaScript icon",
      "./src/assets/icons/programming-languages/javascript-svgrepo-com.webp",
      "JavaScript"
    )
  );
  SkillsElements.push(
    createFigureElement(
      "HTML5 icon",
      "./src/assets/icons/programming-languages/html-5-svgrepo-com.webp",
      "HTML"
    )
  );
  SkillsElements.push(
    createFigureElement(
      "CSS icon",
      "./src/assets/icons/programming-languages/css-3-svgrepo-com.webp",
      "CSS"
    )
  );
  SkillsElements.push(
    createFigureElement(
      "SASS icon",
      "./src/assets/icons/programming-languages/sass-svgrepo-com.svg",
      "SASS"
    )
  );
  SkillsElements.push(
    createFigureElement(
      "Tailwind CSS icon",
      "./src/assets/icons/programming-languages/tailwindcss-mark.d52e9897.svg",
      "Tailwind CSS"
    )
  );
  SkillsElements.push(
    createFigureElement(
      "Figma icon",
      "./src/assets/icons/programming-languages/figma-svgrepo-com.webp",
      "Figma"
    )
  );
  SkillsElements.push(
    createFigureElement(
      "Visual Studio Code icon",
      "./src/assets/icons/programming-languages/vs-code-svgrepo-com.webp",
      "VS Code"
    )
  );
  SkillsElements.push(
    createFigureElement(
      "GitHub icon",
      "./src/assets/icons/programming-languages/github-svgrepo-com1.svg",
      "GitHub"
    )
  );
  SkillsElements.push(
    createFigureElement(
      "Git icon",
      "./src/assets/icons/programming-languages/git-svgrepo-com.webp",
      "Git"
    )
  );
  SkillsElements.push(
    createFigureElement(
      "WordPress icon",
      "./src/assets/icons/programming-languages/wordpress-color-svgrepo-com.webp",
      "WordPress"
    )
  );
  SkillsElements.push(
    createFigureElement("Vite icon", "./src/assets/icons/programming-languages/Vite.js.svg", "Vite")
  );
  SkillsElements.push(
    createFigureElement(
      "Vitest icon",
      "./src/assets/icons/programming-languages/vitest-seeklogo.svg",
      "Vitest"
    )
  );
  SkillsElements.push(
    createFigureElement(
      "Playwright icon",
      "./src/assets/icons/programming-languages/playwright-logo.svg",
      "Playwright"
    )
  );

  // Append each skill element to both/all containers using the cloneNode method
  skillsContainers.forEach((skillsContainer) => {
    SkillsElements.forEach((element) => {
      skillsContainer.appendChild(element.cloneNode(true));
    });
  });
};
