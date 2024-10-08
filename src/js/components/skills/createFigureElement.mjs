export const createFigureElement = (altText, imgSrc, textContent) => {
  // create figure element
  const figure = document.createElement("figure");
  figure.classList.add("skill-wrapper");

  // create img element
  const img = document.createElement("img");
  img.loading = "lazy";
  img.alt = altText;
  img.src = imgSrc;

  // create figcaption
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = textContent;

  // append elements to the figure element
  figure.appendChild(img);
  figure.appendChild(figcaption);

  return figure;
};
