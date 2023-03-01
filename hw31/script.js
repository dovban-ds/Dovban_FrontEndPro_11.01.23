// 1) Избавится от неуникальных элементов массива
const numbersArray = [1, 1, 2, 3, 4, 5, 5, 5, 6];

const unique = new Set(numbersArray);
const uniqueArr = new Array(...unique);

console.log(uniqueArr);

// 2) Создать Map который будет по переданному объекту возвращать строку привествия
const userBob = {
  name: "Bob",
};
const userJane = {
  name: "Jane",
};

const map = new Map();

map.set(userBob, "Hello Bob nice to see you");
map.set(userJane, "How your kids doing Jane ?");

function greetUser(obj) {
  const result = map.get(obj);
  console.log(result);
  return;
}

greetUser(userBob);
greetUser(userJane);

// 3) Создать функцию по превращению Map в object или object в Map в зависимости от того что было передано в функцию.
function transform(obj) {
  if (obj.size) {
    return Object.fromEntries(obj.entries());
  } else {
    const mapper = new Map(Object.entries(obj));
    return mapper;
  }
}

console.log(transform(map));
console.log(transform(userBob));
