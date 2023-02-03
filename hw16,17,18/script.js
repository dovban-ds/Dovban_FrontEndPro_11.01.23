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
const usersX = prompt("Input your X value");
const usersY = prompt("Input your Y value");
const usersSign = prompt("Input your sign (+, -, *, /, %, ^)");

function doMath(x, y, znak) {
  switch (znak) {
    case "+":
      console.log(`${+x + +y}`);
      break;
    case "-":
      console.log(`${x - y}`);
      break;
    case "*":
      console.log(`${x * y}`);
      break;
    case "/":
      console.log(`${x / y}`);
      break;
    case "%":
      console.log(`${x % y}`);
      break;
    case "^":
      console.log(`${x ** y}`);
      break;
    default:
      console.log("Please, input correct sign from offered list");
  }
}
console.log(doMath(usersX, usersY, usersSign));

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
const arrLength = Number(prompt("Input array's length"));
const secArrLength = Number(prompt("Input inner array's length"));
const empty = [];

function usersArray(array, secArr) {
  for (let i = 0; i < array; i++) {
    const realEmpty = [];
    for (let j = 0; j < secArr; j++) {
      const info = prompt(`Input element number ${j}`);
      realEmpty.push(info);
    }
    empty.push(realEmpty);
  }
  return empty;
}

console.log(usersArray(arrLength, secArrLength));

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const userString = prompt("Input your text");
const userSymbol = prompt("Letters to remove");

function deleteLetters(str, letters) {
  let arr = str.split("");
  for (let i = 0; i < letters.length; i++) {
    arr = arr.filter((element) => {
      return element !== letters[i];
    });
  }
  return arr.join("");
}
console.log(deleteLetters(userString, userSymbol));
