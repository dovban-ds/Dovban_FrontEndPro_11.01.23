const animations = document.querySelectorAll(".btn");

for (let item of animations) {
  item.addEventListener("mouseout", () => {
    item.classList.add("extra");
  });
}

const forms = document.querySelectorAll("[action]");

for (let item of forms) {
  const handler = () => {
    if (item.getAttribute("action").includes("http" || "https") === false) {
      item.setAttribute("action", `https://${item.getAttribute("action")}`);
    } else {
      return;
    }
  };
  item.addEventListener("click", handler);
}
