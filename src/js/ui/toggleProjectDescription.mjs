// const descriptionWrappers = document.querySelectorAll(
//   ".description-wrapper"
// );
// // Using the closest() method to select the related parent container (".project-wrapper")
// const scrollTarget = descriptionWrappers.forEach((descriptionWrapper) => {
//   descriptionWrapper.closest(".project-wrapper");
// });

// export const toggleProjectDescription = () => {
//   document.addEventListener("click", (e) => {
//     console.log(e.target);

//     readMoreBtns.forEach((readMoreBtn) => {
//       if (
//         // if the descriptionWrappers isn't displaying, show the descriptionWrappers
//         !descriptionWrappers.classList.contains("is-active") &&
//         e.target === readMoreBtn
//       ) {
//         descriptionWrappers.classList.add("is-active");
//         readMoreBtn.style.display = "none";
//         // readLessBtns.style.display = "block";
//       }
//     });

//     readLessBtns.forEach((readLessBtn) => {
//       if (
//         // if the descriptionWrappers is displaying, close the descriptionWrappers
//         descriptionWrappers.classList.contains("is-active") &&
//         e.target === readLessBtn
//       ) {
//         descriptionWrappers.classList.remove("is-active");
//         readLessBtn.style.display = "none";
//         // readMoreBtns.style.display = "block";
//         // Scrolls to the parent container of the project when clicking "read less".
//         scrollTarget.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     });
//   });
// };

// const readMoreBtns = document.querySelectorAll(".read-more-btn");
// const readLessBtns = document.querySelectorAll(".read-less-btn");

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
