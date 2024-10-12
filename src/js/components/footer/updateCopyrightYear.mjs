const copyrightText = document.querySelector(".copyright");

// Using the Date() constructor in a event listener to update the copyright year automatically when the page loads
export const updateCopyrightYear = () => {
  const newDate = new Date().getFullYear().toString();
  document.addEventListener("DOMContentLoaded", () => {
    copyrightText.textContent = `${newDate}, Tore M. Hirth. All rights reserved!`;
  });
};
