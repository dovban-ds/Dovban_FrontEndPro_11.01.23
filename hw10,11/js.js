// Homework 10
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
// let figures = "";
// for (let i = 10; i <= 20; i++) {
//   //   figures += i + ", ";
//   figures += i === 20 ? i : i + ", ";
//   alert(figures.trim());
// }

// Вивести квадрати чисел від 10 до 20.
// for (let i = 10; i <= 20; i++) {
//   alert(i ** 2);
// }

// Вивести таблицю множення на 7.
// let sumSeven = "";
// for (let i = 1; i <= 10; i++) {
//   const result = i * 7;
//   sumSeven += " ".repeat(3) + result;
//   alert(sumSeven.trim());
// }

// Знайти суму всіх цілих чисел від 1 до 15.
// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//   alert((sum += i));
// }

// Знайти добуток усіх цілих чисел від 15 до 35.
// let sumMult = 1;
// for (let i = 15; i <= 35; i++) {
//   alert((sumMult *= i));
// }

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// let sumAvvrg = 0;
// for (let i = 1; i <= 501; i++) {
//   i === 501 ? alert(sumAvvrg / 500) : alert((sumAvvrg += i));
// } // it looks very shitty i am not sure :D

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
// let sumEven = 0;
// for (let i = 30; i <= 80; i++) {
//   if (i % 2 !== 0) continue;
//   alert((sumEven += i));
// }

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// for (let i = 100; i <= 200; i++) {
//   if (i % 3 !== 0) continue;
//   alert(i);
// }

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// let naturalNumber = 100;
// for (let i = 1; i <= 100; i++) {
//   if (naturalNumber % i !== 0) continue;
//   alert(i);
// }

// Визначити кількість його парних дільників.
// let naturalNextNumber = 100;
// let pairNaturalNumber = 0;
// for (let i = 1; i <= 100; i++) {
//   if (naturalNextNumber % i !== 0) continue;
//   if (i % 2 == 0) alert(pairNaturalNumber + i);
// }

// Знайти суму його парних дільників.
// let naturalNumberSecond = 100;
// let pairNaturalNumberSecond = 0;
// for (let i = 1; i <= 100; i++) {
//   if (naturalNumberSecond % i !== 0) continue;
//   if (i % 2 == 0) alert((pairNaturalNumberSecond += i));
// }

// Надрукувати повну таблицю множення від 1 до 10.
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     const result = i * j;
//     alert(`${i} * ${j} = ${result}`);
//   }
// }

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
  // if (i == 100) console.log(sumDol.trim());
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
  alert("1 is neither prime nor composite number.");
} else if (usersNextFigure > 1) {
  for (let i = 2; i < usersNextFigure; i++) {
    if (usersNextFigure % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    alert(`${usersNextFigure} is a prime number`);
  } else {
    alert(`${usersNextFigure} is a not prime number`);
  }
} else {
  alert("Your figure isn't prime. For a pity... Try a new one");
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let someRandomFigure = prompt("Enter your figure here");

while (someRandomFigure % 3 == 0) {
  someRandomFigure /= 3;
}
someRandomFigure == 1
  ? alert("U can get this figure")
  : alert("U can't get this figure");
