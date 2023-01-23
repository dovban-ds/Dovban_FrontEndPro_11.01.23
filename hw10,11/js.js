// Homework 10
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let figures = "";
for (let i = 10; i <= 20; i++) {
  figures += i === 20 ? i : i + ", ";
}
console.log(figures.trim());

// Вивести квадрати чисел від 10 до 20.
let squareRes = "";
for (let i = 10; i <= 20; i++) {
  squareRes += " ".repeat(2) + i ** 2;
}
console.log(squareRes.trim());

// Вивести таблицю множення на 7.
let sumSeven = "";
for (let i = 1; i <= 10; i++) {
  const result = i * 7;
  sumSeven += " ".repeat(3) + result;
}
console.log(sumSeven.trim());

// Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
let sumRes;
for (let i = 1; i <= 15; i++) {
  sumRes = sum += i;
}
console.log(sumRes);

// Знайти добуток усіх цілих чисел від 15 до 35.
let sumMult = 1;
let multRes;
for (let i = 15; i <= 35; i++) {
  multRes = sumMult *= i;
}
console.log(multRes);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sumAvvrg = 0;
for (let i = 1; i <= 501; i++) {
  i === 501 ? sumAvvrg / 500 : (sumAvvrg += i);
}
console.log(sumAvvrg / 500);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sumEven = 0;
let sumPairNumb;
for (let i = 30; i <= 80; i++) {
  if (i % 2 !== 0) continue;
  sumPairNumb = sumEven += i;
}
console.log(sumPairNumb);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let divRes = "";
for (let i = 100; i <= 200; i++) {
  if (i % 3 !== 0) continue;
  divRes += " ".repeat(3) + i;
}
console.log(divRes.trim());

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let naturalNumber = 100;
let pairedReses = "";
for (let i = 1; i <= 100; i++) {
  if (naturalNumber % i !== 0) continue;
  const result = i;
  pairedReses += " ".repeat(3) + result;
}
console.log(pairedReses.trim());

// Визначити кількість його парних дільників.
let naturalNextNumber = 100;
let pairNaturalNumber = 0;
let finRes = " ";
for (let i = 1; i <= 100; i++) {
  if (naturalNextNumber % i !== 0) continue;
  if (i % 2 == 0) finRes += " ".repeat(3) + i;
}
console.log(finRes.trim());

// Знайти суму його парних дільників.
let naturalNumberSecond = 100;
let pairNaturalNumberSecond = 0;
let sumParRes = "";
for (let i = 1; i <= 100; i++) {
  if (naturalNumberSecond % i !== 0) continue;
  if (i % 2 == 0) sumParRes = pairNaturalNumberSecond += i;
}
console.log(sumParRes);

// Надрукувати повну таблицю множення від 1 до 10.
let multTables = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const result = i * j + "";
    multTables += " ".repeat(5 - result.length) + result;
  }
  multTables += "\n";
}
console.log(multTables);

// Homework 11
// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let someFigures = "";
for (let i = 20; i <= 30; i += 0.5) {
  const result = String(i);
  someFigures += " ".repeat(2) + result;
}
console.log(someFigures.trim());

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let dollar = 27;
let sumDol = " ";
for (let i = 10; i <= 100; i += 10) {
  let result = dollar * i + "";
  sumDol += " ".repeat(3) + result;
}
console.log(sumDol.trim());

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let usersFigure = +prompt("Your number here");
let figuresSum = " ";
let supRes;
for (let i = 1; i <= 100; i++) {
  const result = i;
  if (usersFigure > i ** 2) {
    supRes = (figuresSum += " ".repeat(3) + result).trim();
  }
}
console.log(supRes.trim());

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
const usersNextFigure = prompt("Enter a positive number");
let isPrime = true;
if (usersNextFigure == 1) {
  console.log("1 is neither prime nor composite number.");
} else if (usersNextFigure > 1) {
  for (let i = 2; i < usersNextFigure; i++) {
    if (usersNextFigure % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${usersNextFigure} is a prime number`);
  } else {
    console.log(`${usersNextFigure} is a not prime number`);
  }
} else {
  console.log("Your figure isn't prime. For a pity... Try a new one");
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let someRandomFigure = prompt("Enter your figure here");

while (someRandomFigure % 3 == 0) {
  someRandomFigure /= 3;
}
someRandomFigure == 1
  ? console.log("U can get this figure")
  : console.log("U can't get this figure");
