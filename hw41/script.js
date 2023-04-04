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

modal.style.display = "none";

const modalNext = document.querySelector(".modal-next");
const modalTitleNext = document.querySelector(".modal-title-next");
const modalDescriptionNext = document.querySelector(".modal-description-next");
const buttonCloseNext = document.querySelector(".close-next");

modalNext.style.display = "none";

const buttons = document.querySelectorAll("button");
const good = document.querySelectorAll(".goods");
const images = document.querySelectorAll(".image-block");
const text = document.querySelectorAll(".text-block");

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
  } else if (target.textContent === "BMW 328i") {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[0].style.display = "";
  } else if (target.textContent === "Toyota Supra") {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[1].style.display = "";
  } else if (target.textContent === "Mitsubishi Lancer X Evo") {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[2].style.display = "";
  } else if (target.textContent === "Laptop") {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[3].style.display = "";
  } else if (target.textContent === "Gaming PC") {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[4].style.display = "";
  } else if (target.textContent === "Tablet") {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[5].style.display = "";
  } else if (target.textContent === "Junk food") {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[6].style.display = "";
  } else if (target.textContent === "Healthy food") {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[7].style.display = "";
  } else if (target.textContent === "Sea food") {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[8].style.display = "";
  } else if (target.textContent === "Hair paste") {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[9].style.display = "";
  } else if (target.textContent === "Toothpaste") {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[10].style.display = "";
  } else if (target.textContent === "Shaving gel") {
    goods.forEach((item) => {
      item.style.display = "none";
    });
    goods[11].style.display = "";
  } else if (target.textContent === "Add to cart") {
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
  } else {
    return;
  }
}

container.addEventListener("click", doAll);

const payment = document.querySelector("#payment");
const card = document.querySelector(".card-numb");

card.style.display = "none";

payment.addEventListener("change", () => {
  if (payment.value === "online") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
});

const city = document.querySelector("#city");
const posts = document.querySelectorAll(".posts");

const postsNumb = document.querySelector("#post");

for (let item of posts) {
  item.style.display = "none";
}

city.addEventListener("change", () => {
  const select = document.querySelector("#post");
  if (city.value === "Dnipro") {
    select.value = "";
    posts.forEach((item) => {
      if (item.value === "Dnipro Post") {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  } else if (city.value === "Lviv") {
    select.value = "";
    posts.forEach((item) => {
      if (item.value === "Lviv Post") {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  } else if (city.value === "Kiyv") {
    select.value = "";
    posts.forEach((item) => {
      if (item.value === "Kiyv Post") {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  } else if (city.value === "Kharkiv") {
    select.value = "";
    posts.forEach((item) => {
      if (item.value === "Kharkiv Post") {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
});

const submit = document.querySelector("#submit");

let clonedNodes = [];

function handle(index) {
  let iclone = images[index].cloneNode(true);
  let tclone = text[index].cloneNode(true);
  modalDescriptionNext.append(iclone);
  modalDescriptionNext.append(tclone);
  clonedNodes.push(iclone, tclone);
}
buttons.forEach((button, index) => {
  button.removeEventListener("click", () => handle(index));
  button.addEventListener("click", () => handle(index));
});

function checking(submit) {
  const cardNumb = document.querySelector("#card");
  const requirments = document.querySelectorAll(".required");

  for (let item of requirments) {
    if (item.value.length === 0) {
      const label = document.querySelector(`label[for=${item.id}]`);
      alert(`Please, fill ${label.textContent} gap properly`);
      submit.preventDefault();
      return;
    }
  }

  const amount = document.querySelector("#amount");

  function handleFormSubmit(
    submit,
    modal,
    modalNext,
    buttonCloseNext,
    modalDescriptionNext,
    clonedNodes
  ) {
    submit.preventDefault();
    modal.style.display = "none";
    modalNext.style.display = "flex";
    buttonCloseNext.addEventListener("click", () => {
      const pElements = modalDescriptionNext.querySelectorAll("p");
      for (let i = 0; i < pElements.length; i++) {
        pElements[i].remove();
      }
      modalNext.style.display = "none";
      clonedNodes.forEach((node) => node.remove());
      clonedNodes = [];
    });
    modalNext.addEventListener("click", (event) => {
      const pElements = modalDescriptionNext.querySelectorAll("p");
      for (let i = 0; i < pElements.length; i++) {
        pElements[i].remove();
      }
      if (event.target !== modalNext) return;
      clonedNodes.forEach((node) => node.remove());
      clonedNodes = [];
      modalNext.style.display = "none";
    });
    const box = document.createElement("div");
    box.classList.add("js-set");
    modalDescriptionNext.append(box);
    const collection = [];
    const fullName = document.querySelector("#fname");
    const post = document.querySelector("#post");
    const method = document.querySelector("#payment");
    collection.push(
      "Fullname: " + fullName.value,
      "City: " + city.value,
      "Post office: " + post.value,
      "Payment method: " + method.value,
      "Items's amount: " + amount.value
    );
    if (method.value === "online") {
      const numb = document.querySelector("#card");
      collection.push("Your card number: " + numb.value);
    }
    if (comm.value.length !== 0) {
      let comm = document.querySelector("#comm");
      collection.push("Your wishes: " + comm.value);
    }
    for (let i = 0; i < collection.length; i++) {
      const p = document.createElement("p");
      p.style.margin = "6px";
      p.append(collection[i]);
      box.append(p);
    }
  }

  if (payment.value === "online") {
    if (cardNumb.value.length !== 16) {
      alert('Please, input 16 digits in "card number" field');
      submit.preventDefault();
    } else {
      handleFormSubmit(
        submit,
        modal,
        modalNext,
        buttonCloseNext,
        modalDescriptionNext,
        clonedNodes
      );
    }
  } else if (amount.value < 1) {
    alert("Please, input coorect amount value");
    submit.preventDefault();
  } else {
    handleFormSubmit(
      submit,
      modal,
      modalNext,
      buttonCloseNext,
      modalDescriptionNext,
      clonedNodes
    );
  }
}

submit.addEventListener("click", checking);
