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

const buttons = document.querySelectorAll(".btn");
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
      clonedNodes.forEach((node) => node.remove());
      clonedNodes = [];
      if (lastAddedItem) {
        lastAddedItem.remove();
        liArray.pop();
        localStorage.setItem("liTextArray", JSON.stringify(liArray));
      }
      // dataArray.pop();
      // localStorage.setItem("dataCollection");
      modal.style.display = "none";
    });
    modal.addEventListener("click", (event) => {
      if (event.target !== modal) return;
      if (lastAddedItem) {
        lastAddedItem.remove();
        liArray.pop();
        localStorage.setItem("liTextArray", JSON.stringify(liArray));
      }
      // dataArray.pop();
      // localStorage.setItem("dataCollection");
      clonedNodes.forEach((node) => node.remove());
      clonedNodes = [];
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

const cart = document.querySelector(".cart");
const list = document.querySelector("#goods-list");

list.addEventListener("click", (event) => {
  if (event.target.textContent === catalogNames[0].textContent + "×") {
    for (let good of goods) {
      good.style.display = "none";
    }
    goods[0].style.display = "";
  } else if (event.target.textContent === catalogNames[1].textContent + "×") {
    for (let good of goods) {
      good.style.display = "none";
    }
    goods[1].style.display = "";
  } else if (event.target.textContent === catalogNames[2].textContent + "×") {
    for (let good of goods) {
      good.style.display = "none";
    }
    goods[2].style.display = "";
  } else if (event.target.textContent === catalogNames[3].textContent + "×") {
    for (let good of goods) {
      good.style.display = "none";
    }
    goods[3].style.display = "";
  } else if (event.target.textContent === catalogNames[4].textContent + "×") {
    for (let good of goods) {
      good.style.display = "none";
    }
    goods[4].style.display = "";
  } else if (event.target.textContent === catalogNames[5].textContent + "×") {
    for (let good of goods) {
      good.style.display = "none";
    }
    goods[5].style.display = "";
  } else if (event.target.textContent === catalogNames[6].textContent + "×") {
    for (let good of goods) {
      good.style.display = "none";
    }
    goods[6].style.display = "";
  } else if (event.target.textContent === catalogNames[7].textContent + "×") {
    for (let good of goods) {
      good.style.display = "none";
    }
    goods[7].style.display = "";
  } else if (event.target.textContent === catalogNames[8].textContent + "×") {
    for (let good of goods) {
      good.style.display = "none";
    }
    goods[8].style.display = "";
  } else if (event.target.textContent === catalogNames[9].textContent + "×") {
    for (let good of goods) {
      good.style.display = "none";
    }
    goods[9].style.display = "";
  } else if (event.target.textContent === catalogNames[10].textContent + "×") {
    for (let good of goods) {
      good.style.display = "none";
    }
    goods[10].style.display = "";
  } else if (event.target.textContent === catalogNames[11].textContent + "×") {
    for (let good of goods) {
      good.style.display = "none";
    }
    goods[11].style.display = "";
  }
});
const items = document.querySelectorAll(".item");
cart.addEventListener("click", () => {
  list.style.display === "none"
    ? (list.style.display = "")
    : (list.style.display = "none");

  if (list.style.display === "") {
    for (let item of items) {
      item.style.display = "none";
    }
    for (let item of catalogs) {
      item.style.display = "none";
    }
    for (let item of goods) {
      item.style.display = "none";
    }
    const btn = document.querySelectorAll(".btn");
    btn.forEach((item) => {
      item.style.display = "none";
    });
  } else {
    for (let item of items) {
      item.style.display = "";
    }
    for (let item of goods) {
      item.style.display = "none";
    }
    for (let i = 0; i < goods.length; i++) {
      const pElements = goods[i].querySelectorAll("p");
      for (let j = 0; j < pElements.length; j++) {
        pElements[j].style.display = "none";
      }
    }
    const all = document.querySelectorAll(".special");
    all.forEach((item) => {
      item.style.display = "none";
    });
    const btn = document.querySelectorAll(".btn");
    btn.forEach((item) => {
      item.style.display = "";
    });
    location.reload();
  }
});
const catalogNames = document.querySelectorAll(".catalog-name");

let lastAddedItem;

window.addEventListener("load", () => {
  // localStorage.clear();
  const liTextArrayJSON = localStorage.getItem("liTextArray");
  const dataTextArray = localStorage.getItem("dataCollection");
  if (liTextArrayJSON) {
    const parsedLiTextArray = JSON.parse(liTextArrayJSON);
    const parsedDataArray = JSON.parse(dataTextArray);
    parsedLiTextArray.forEach((liText, index) => {
      const li = document.createElement("li");
      const res = liText.replace("×", "");
      li.textContent = res;
      const span = document.createElement("span");
      li.classList.add("li");
      span.classList.add("span");
      span.innerHTML = "&#215";
      li.append(span);
      span.addEventListener("click", () => {
        for (let item of goods) {
          item.style.display = "none";
        }
        const index = parsedLiTextArray.indexOf(liText);
        console.log(liText);
        console.log(index);
        parsedLiTextArray.splice(index, 1);
        localStorage.setItem("liTextArray", JSON.stringify(parsedLiTextArray));
        li.remove();
      });
      li.addEventListener("click", () => {
        const div = document.createElement("div");
        const p = document.createElement("p");
        console.log(parsedDataArray);
        for (let data of parsedDataArray[index]) {
          p.append(data);
        }
        div.append(p);
        const newStr = li.textContent.slice(0, -1);
        const resultIndex = Array.from(catalogNames).findIndex(
          (li) => li.textContent.trim() === newStr
        );
        const existingDiv = goods[resultIndex].querySelector(
          `div[data-index="${index}"]`
        );

        const existingDivs = goods[resultIndex].querySelectorAll(`p`);
        existingDivs.forEach((div) => {
          div.remove();
        });
        const existingSpec = goods[resultIndex].querySelectorAll(`.special`);
        existingSpec.forEach((div) => {
          div.remove();
        });
        p.textContent = parsedDataArray[index];
        div.dataset.index = index;
        div.append(p);
        p.classList.add("next");
        if (goods[resultIndex].classList.contains("special")) {
          const existingDivs = goods[resultIndex].querySelectorAll(`p`);
          existingDivs.forEach((div) => {
            div.remove();
          });
          const existingSpec = goods[resultIndex].querySelectorAll(`.special`);
          existingSpec.forEach((div) => {
            div.remove();
          });
          existingDiv.style.display = "none";
          return;
        } else {
          goods[resultIndex].append(div);
        }
      });
      list.append(li);
    });
    liArray.push(...parsedLiTextArray);
    dataArray.push(...parsedDataArray);
  }
});

const liArray = [];

function addButtonListeners() {
  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      const li = document.createElement("li");
      const catalogName = catalogNames[index];
      li.textContent = catalogName.textContent;
      const span = document.createElement("span");
      span.innerHTML = "&#215";
      span.classList.add("span");
      span.addEventListener("click", (event) => {
        event.stopPropagation();
        goods[index].style.display = "none";
        li.remove();
        const indexToRemove = liArray.indexOf(li.textContent);
        if (indexToRemove > -1) {
          liArray.splice(indexToRemove, 1);
          localStorage.setItem("liTextArray", JSON.stringify(liArray));
        }
      });
      li.addEventListener("click", () => {
        const everyDiv = document.querySelectorAll(".special");
        for (let item of everyDiv) {
          item.remove();
        }
        for (let item of goods) {
          item.style.display = "none";
        }
        goods[index].style.display = "";
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
        for (let item of collection) {
          const div = document.createElement("div");
          goods[index].append(div);
          div.style.marginBottom = "8px";
          div.classList.add("special");
          div.append(item);
        }
      });
      li.append(span);
      li.classList.add("li");

      list.append(li);
      lastAddedItem = li;
      //////
      liArray.push(li.textContent);
      localStorage.setItem("liTextArray", JSON.stringify(liArray));
    });
  });
}

addButtonListeners();

dataArray = [];

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
      box.remove();
      modalNext.style.display = "none";
      clonedNodes.forEach((node) => node.remove());
      clonedNodes = [];
      location.reload();
    });
    modalNext.addEventListener("click", (event) => {
      if (event.target !== modalNext) {
        return;
      } else {
        const pElements = modalDescriptionNext.querySelectorAll("p");
        for (let i = 0; i < pElements.length; i++) {
          pElements[i].remove();
        }
        location.reload();
      }
      if (event.target !== modalNext) return;
      box.remove();
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
    dataArray.push(collection);
    localStorage.setItem("dataCollection", JSON.stringify(dataArray));
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
