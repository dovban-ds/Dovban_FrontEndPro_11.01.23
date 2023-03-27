const slidesContainer = document.querySelector(".slider");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector(".left");
const nextButton = document.querySelector(".right");

const hLeft = document.querySelector(".hleft");
const hRight = document.querySelector(".hright");

const arrowsBlock = document.querySelector(".arrows");

hLeft.hidden = true;
arrowsBlock.classList.add("test");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  if (slidesContainer.scrollLeft === 0) {
    hLeft.hidden = false;
    arrowsBlock.classList.remove("test");
  } else if (slidesContainer.scrollLeft === 2000) {
    hRight.hidden = true;
  }
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  if (slidesContainer.scrollLeft === 1000) {
    hLeft.hidden = true;
    arrowsBlock.classList.add("test");
  } else if (slidesContainer.scrollLeft === 3000) {
    hRight.hidden = false;
  }
});
