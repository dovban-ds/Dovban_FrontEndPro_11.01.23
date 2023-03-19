const outerCase = document.getElementById("outer");
const innerInput = document.getElementById("input");
const innerCase = document.getElementById("inner");

innerCase.hidden = true;

innerInput.addEventListener("focusin", () => {
  innerCase.hidden = false;
});

innerInput.addEventListener("focusout", () => {
  innerCase.hidden = true;
});
