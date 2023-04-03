const container = document.querySelector(".container");

const catalogs = document.querySelectorAll(".catalog");

const goods = document.querySelectorAll(".goods");
for (let i = 0; i < goods.length; i++) {
  goods[i].style.display = "none";
}

for (let item of catalogs) {
  item.style.display = "none";
}

const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");
const buttonClose = document.querySelector(".close");

modalTitle.textContent = "Congratulations!";
modalDescription.textContent = "Manager will contact you soon!";
modal.style.display = "none";

function doAll(event) {
  const target = event.target;
  if (target.classList.contains("vehicles")) {
    for (let item of catalogs) {
      item.style.display = "none";
    }
    catalogs[0].style.display = "";

    goods.forEach((item) => {
      item.style.display = "none";
    });
  } else if (target.classList.contains("computers")) {
    for (let item of catalogs) {
      item.style.display = "none";
    }
    catalogs[1].style.display = "";

    goods.forEach((item) => {
      item.style.display = "none";
    });
  } else if (target.classList.contains("food")) {
    for (let item of catalogs) {
      item.style.display = "none";
    }
    catalogs[2].style.display = "";

    goods.forEach((item) => {
      item.style.display = "none";
    });
  } else if (target.classList.contains("fashion")) {
    for (let item of catalogs) {
      item.style.display = "none";
    }
    catalogs[3].style.display = "";

    goods.forEach((item) => {
      item.style.display = "none";
    });
  } else if (target.textContent.includes("BMW")) {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[0].style.display = "";
  } else if (target.textContent.includes("Toyota")) {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[1].style.display = "";
  } else if (target.textContent.includes("Lancer")) {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[2].style.display = "";
  } else if (target.textContent.includes("Laptop")) {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[3].style.display = "";
  } else if (target.textContent.includes("Gaming")) {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[4].style.display = "";
  } else if (target.textContent.includes("Tablet")) {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[5].style.display = "";
  } else if (target.textContent.includes("Junk")) {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[6].style.display = "";
  } else if (target.textContent.includes("Healthy")) {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[7].style.display = "";
  } else if (target.textContent.includes("Sea")) {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[8].style.display = "";
  } else if (target.textContent.includes("Hair")) {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[9].style.display = "";
  } else if (target.textContent.includes("Tooth")) {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[10].style.display = "";
  } else if (target.textContent.includes("Shaving")) {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[11].style.display = "";
  } else if (target.textContent.includes("Add")) {
    modal.style.display = "flex";
    buttonClose.addEventListener("click", () => {
      modal.style.display = "none";
    });
    modal.addEventListener("click", (event) => {
      if (event.target !== modal) return;
      modal.style.display = "none";
    });
    goods.forEach((item) => {
      item.style.display = "none";
    });
    for (let item of catalogs) {
      item.style.display = "none";
    }
  }
}

container.addEventListener("click", doAll);
