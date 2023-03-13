// 1) Реализовать функцию-генератор которая отдаст 10 рандомных чисел в диапазоне переданном в аргументах в ней.
function* numbersGenerator(from, to) {
  for (let i = 1; i <= 10; i++) {
    yield (x = Math.random() * (to - from) + from);
  }
}

const result = numbersGenerator(5, 15);

for (let number of result) {
  console.log(+number.toFixed());
}

// 2) Создать свой распорядок дня с помощью async await ( тоесть мы должны "подождать" выполнение асинхронной функции brushTeeth перед тем как приступать к выполнению следующей асинхронной функции)
async function firstMove() {
  const move = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Wake up!");
    }, 1000);
  });
  const result = await move;
  console.log(result);
}
async function secondMove() {
  const move = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Brush teeth");
    }, 500);
  });
  const result = await move;
  console.log(result);
}
async function thirdMove() {
  const move = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Breakfast");
    }, 2000);
  });
  const result = await move;
  console.log(result);
}

(async () => {
  const first = await firstMove();
  const second = await secondMove();
  const third = await thirdMove();
  const move = new Promise((resolve) => {
    setTimeout(() => {
      resolve("End");
    }, 1000);
  });
  const result = await move;
  console.log(result);
})();
