class SuperMath {
  check(obj) {
    const { x, y, znak } = obj;

    let result;

    switch (znak) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        result = x / y;
        break;
      case "%":
        result = x % y;
        break;
      default:
        alert(`Input correct sign!`);
        return this.input();
    }

    const userAnsw = confirm(
      `Are u sure about ${x} and ${y} operation with ${znak} sign ?`
    );

    if (userAnsw === false) {
      this.input();
    } else {
      console.log(`${x} ${znak} ${y} = ${result}`);
    }
  }

  input() {
    const x = +prompt("Input first figure");
    const y = +prompt("Input second figure");
    const znak = prompt("Input sign for the operation");

    this.check({ x, y, znak });
  }
}

const figure = new SuperMath();
const obj = {
  x: 5,
  y: 5,
  znak: "+",
};
figure.check(obj);
