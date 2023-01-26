// Homework 12
const usersArray = [1, 16, 59, 3, 2, 28];
console.log(usersArray);

function compareUsersData(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
console.log(usersArray.sort(compareUsersData));

usersArray.splice(1, 3);
console.log(usersArray);

// Homework 13
// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
const readyArray = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

function positiveNumb(a) {
  if (a > 0) return 1;
  if (a < 0) return 0;
}

const readyPositiveArray = readyArray.filter(positiveNumb);
console.log(readyPositiveArray.length);
console.log(readyPositiveArray.reduce((sum, current) => sum + current, 0));

// Знайти мінімальний елемент масиву та його порядковий номер.
const minValue = Math.min(...readyArray);
console.log(minValue);
console.log(readyArray.indexOf(minValue));

// Знайти максимальний елемент масиву та його порядковий номер.
const maxValue = Math.max(...readyArray);
console.log(maxValue);
console.log(readyArray.indexOf(maxValue));

// Визначити кількість негативних елементів.
function negativeNumb(a) {
  if (a > 0) return 0;
  if (a < 0) return 1;
}

const readyNegativeArray = readyArray.filter(negativeNumb);
console.log(readyNegativeArray.length);

// Знайти кількість непарних позитивних елементів.
function unpaired(a) {
  if (a % 2 !== 0) return 1;
}

const readyUnpairedPositiveArray = readyPositiveArray.filter(unpaired);
console.log(readyUnpairedPositiveArray.length);

// Знайти кількість парних позитивних елементів.
function paired(a) {
  if (a % 2 == 0) return 1;
}

const readyPairedPositiveArray = readyPositiveArray.filter(paired);
console.log(readyPairedPositiveArray.length);

// Знайти суму парних позитивних елементів.
console.log(
  readyPairedPositiveArray.reduce((sum, current) => sum + current, 0)
);

// Знайти суму непарних позитивних елементів.
console.log(
  readyUnpairedPositiveArray.reduce((sum, current) => sum + current, 0)
);

// Знайти добуток позитивних елементів.
console.log(readyPositiveArray.reduce((a, b) => a * b));

// Знайти найбільший серед елементів масиву, остальні обнулити.
console.log(maxValue);

const newRadyArray = readyArray.map((onlyValue) => {
  if (onlyValue == maxValue) return maxValue;
  else {
    return 0;
  }
});
console.log(newRadyArray);
