const container = document.querySelector(".container");
const smiles = document.querySelectorAll(".smile");
const digits = document.querySelectorAll(".digit");

function doAdd(event) {
  const target = event.target;

  if (target.classList.contains("count1")) {
    digits[0].innerHTML = `${++digits[0].textContent}`;
  } else if (target.classList.contains("count2")) {
    digits[1].innerHTML = `${++digits[1].textContent}`;
  } else if (target.classList.contains("count3")) {
    digits[2].innerHTML = `${++digits[2].textContent}`;
  } else if (target.classList.contains("count4")) {
    digits[3].innerHTML = `${++digits[3].textContent}`;
  } else if (target.classList.contains("count5")) {
    digits[4].innerHTML = `${++digits[4].textContent}`;
  }
}

container.addEventListener("click", doAdd);
