const random = Math.floor(Math.random() * 8) + 1;
document.body.insertAdjacentHTML(
  "afterbegin",
  `<img src="images/${random}.jpg" alt="Random image">`
);
