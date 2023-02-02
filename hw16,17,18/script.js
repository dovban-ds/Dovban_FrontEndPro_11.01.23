// Homework 16
const arr = ["apple", "orange", "grape", "peach", "pineapple", "cherry"];

function removeElement(arr, value) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  } else {
    return console.log("Try another value");
  }
}

removeElement(arr, "peach");

console.log(arr);

// Homework 17
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const key = generateKey(16, characters);

console.log(key);

// Homework 18
// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const anyArray = [5, "string", 4, "next string", true, 1, null, 5, false, 1];

function averageArithmetic(array) {
  const filtered = array.filter((a) => typeof a === "number");
  const newOne = filtered.reduce((acc, curr) => (acc += curr), 0);
  return Math.round(newOne / filtered.length);
}

console.log(averageArithmetic(anyArray));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
// const usersX = prompt("Input your X value");
// const usersY = prompt("Input your Y value");
// const usersSign = prompt("Input your sign (+, -, *, /, %, ^)");

// function doMath(x, y, znak) {
//   switch (znak) {
//     case "+":
//       console.log(`${+x + +y}`);
//       break;
//     case "-":
//       console.log(`${x - y}`);
//       break;
//     case "*":
//       console.log(`${x * y}`);
//       break;
//     case "/":
//       console.log(`${x / y}`);
//       break;
//     case "%":
//       console.log(`${x % y}`);
//       break;
//     case "^":
//       console.log(`${x ** y}`);
//       break;
//     default:
//       console.log("Please, input correct sign from offered list");
//   }
// }
// console.log(doMath(usersX, usersY, usersSign));

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
// const mainArrLength = prompt("Input main array's length");
// const secondaryArrLength = prompt("Input secondary array's length");
// const arraysMainValues = prompt("Input array's values");

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
const usersString = prompt("Your string here");
const usersSymbols = prompt("Your symbols to removing");

function removeLetters(string, symbol) {
  symbol.split("");
  return console.log(string.replaceAll(symbol, ""));
}
// function removeLetters(string, symbol) {
//   symbol.split("");
//   return console.log(string.split(symbol).join(""));
// }

console.log(removeLetters(usersString, usersSymbols));
