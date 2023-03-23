const table = document.createElement("table");

document.body.append(table);

function doCell() {
  for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr");
    table.append(tr);
    for (let j = tr.children.length; j < 10; j++) {
      const td = document.createElement("td");
      const numb = Math.floor(Math.random() * 100) + 1;
      tr.append(td);
      td.append(numb);
      td.style.cssText = `padding: 10px;
      border: 1px solid white;`;
    }
  }
}

doCell();

document.body.style.backgroundColor = "gray";
table.style.cssText = `color: white;
 border: 1px solid white;
 border-collapse: collapse;
 margin: 50px auto`;
