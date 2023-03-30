const arr = [1, 2, 3, [1, 2, 3], 5];

function generateList(array) {
  const unordered = document.createElement("ul");
  document.body.append(unordered);
  array.forEach((item) => {
    if (typeof item === "number") {
      const li = document.createElement("li");
      unordered.append(li);
      li.innerHTML = item;
    } else if (typeof item === "object") {
      const digit = array.indexOf(item) + 1;
      const innerUnordered = document.createElement("ul");
      unordered.append(innerUnordered);
      for (let i = 0; i <= item.length - 1; i++) {
        const innerLi = document.createElement("li");
        innerUnordered.append(innerLi);
        innerLi.innerHTML = `${digit}.${item[i]}`;
      }
    }
  });
}

generateList(arr);
