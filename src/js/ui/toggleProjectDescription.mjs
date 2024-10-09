const readMoreBtn = document.querySelector("#read-more-btn");
const readLessBtn = document.querySelector("#read-less-btn");
const description = document.querySelector(".description-modal");

export const toggleProjectDescription = () => {
  document.addEventListener("click", (e) => {
    if (
      !description.classList.contains("is-active") &&
      e.target === readMoreBtn
    ) {
      description.classList.add("is-active");
      readMoreBtn.style.display = "none";
      readLessBtn.style.display = "block";
    } else if (
      description.classList.contains("is-active") &&
      e.target === readLessBtn
    ) {
      description.classList.remove("is-active");
      readLessBtn.style.display = "none";
      readMoreBtn.style.display = "block";
    }
  });
};
