const readMoreBtn = document.querySelector("#read-more-btn");
const readLessBtn = document.querySelector("#read-less-btn");
const description = document.querySelector(".description-wrapper");
// Using the closest() method to select the related parent container (".project-wrapper")
const scrollTarget = description.closest(".project-wrapper");

export const toggleProjectDescription = () => {
  document.addEventListener("click", (e) => {
    if (
      // if the description isn't displaying, show the description
      !description.classList.contains("is-active") &&
      e.target === readMoreBtn
    ) {
      description.classList.add("is-active");
      readMoreBtn.style.display = "none";
      readLessBtn.style.display = "block";
    } else if (
      // if the description is displaying, close the description
      description.classList.contains("is-active") &&
      e.target === readLessBtn
    ) {
      description.classList.remove("is-active");
      readLessBtn.style.display = "none";
      readMoreBtn.style.display = "block";
      // Scrolls to the parent container of the project when clicking "read less".
      scrollTarget.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
};
