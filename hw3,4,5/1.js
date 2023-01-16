// Homework 3

let firstFigure = prompt("First figure:");
let secondFigure = prompt("Second figure:");

alert(`${firstFigure} + ${secondFigure} = ${+firstFigure + +secondFigure}`);
alert(`${firstFigure} - ${secondFigure} = ${firstFigure - secondFigure}`);
alert(`${firstFigure} / ${secondFigure} = ${firstFigure / secondFigure}`);
alert(`${firstFigure} * ${secondFigure} = ${firstFigure * secondFigure}`);

// Homework 4

let hoursFigure = prompt("Amount of hours:");
let figureResult = hoursFigure * 3600;

alert(figureResult);

// Homework 5

let nextFirstFigure = prompt("First figure:");
let nextSecondFigure = prompt("Second figure:");
let thirdFigure = prompt("Third figure:");

alert(
  `${nextFirstFigure} + ${nextSecondFigure} + ${thirdFigure} / 3 = ${
    (+nextFirstFigure + +nextSecondFigure + +thirdFigure) / 3
  }`
);
