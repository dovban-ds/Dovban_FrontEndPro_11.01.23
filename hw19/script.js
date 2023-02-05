function sum() {
  let sum = 0;
  return function (num = 0) {
    sum += num;
    return sum;
  };
}

const result = sum();

console.log(result(3));
console.log(result(5));
console.log(result(20));
console.log(result(100));
