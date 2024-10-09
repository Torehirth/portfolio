export const toggleProjectDescription = () => {
  document.addEventListener("click", (e) => {
    // If clicking the "Read more" button (e.target = read more button)
    if (e.target.classList.contains("read-more-btn")) {
      // Selecting the related/closest container with the closest() method.
      const projectWrapper = e.target.closest(".project-wrapper");
      const descriptionWrapper = projectWrapper.querySelector(".description-wrapper");
      const readLessBtn = projectWrapper.querySelector(".read-less-btn");

      // Display the extended description and update buttons styling
      descriptionWrapper.classList.add("is-active");
      e.target.style.display = "none";
      readLessBtn.style.display = "block";

      // Scroll to the extended container when clicking read more button
      descriptionWrapper.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // If clicking the "Read less" button (e.target = read less button)
    if (e.target.classList.contains("read-less-btn")) {
      // Selecting the related/closest container with the closest() method.
      const projectWrapper = e.target.closest(".project-wrapper");
      const descriptionWrapper = projectWrapper.querySelector(".description-wrapper");
      const readMoreBtn = projectWrapper.querySelector(".read-more-btn");

      // Hide the extended description and update buttons styling
      descriptionWrapper.classList.remove("is-active");
      e.target.style.display = "none";
      readMoreBtn.style.display = "block";

      // Scroll to the parent container of the project when clicking read less button
      projectWrapper.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
};
