// Homework 6.1
const firstRandomString = prompt("First string here");
const secondRandomString = prompt("Second string here");
const thirdRandomString = prompt("Third string here");

alert(firstRandomString + secondRandomString + thirdRandomString);
// or like this
// alert(`${firstRandomString} + ${secondRandomString} + ${thirdRandomString}`);

// Homework 6.2
const fifthFiguredNumber = 12345 + "";

alert(
  `${fifthFiguredNumber[0]} ${fifthFiguredNumber[1]} ${fifthFiguredNumber[2]} ${fifthFiguredNumber[3]} ${fifthFiguredNumber[4]}`
);

// Homework 7
const usersOperator = prompt(
  "What operator u gonna use? (add, sub, mult, div)"
);
let usersFirstFigure;
let usersSecondFigure;

if (
  usersOperator === "add" ||
  usersOperator === "sub" ||
  usersOperator === "mult" ||
  usersOperator === "div"
) {
  usersFirstFigure = +prompt("Your first figure for mathematical expression");
  usersSecondFigure = +prompt("Your second figure for mathematical expression");
} else {
  alert("Use only offered values - add, sub, mult, div");
}
if (usersOperator === "add") {
  alert(
    `${usersFirstFigure} + ${usersSecondFigure} = ${
      usersFirstFigure + usersSecondFigure
    }`
  );
} else if (usersOperator === "sub") {
  alert(
    `${usersFirstFigure} - ${usersSecondFigure} = ${
      usersFirstFigure - usersSecondFigure
    }`
  );
} else if (usersOperator === "mult") {
  alert(
    `${usersFirstFigure} * ${usersSecondFigure} = ${
      usersFirstFigure * usersSecondFigure
    }`
  );
} else if (usersOperator === "div") {
  alert(
    `${usersFirstFigure} / ${usersSecondFigure} = ${
      usersFirstFigure / usersSecondFigure
    }`
  );
}
// i was trying to add a checking on the NaN (or variable === Number) but it doesnt work for some reason
// show me how to do it here if it possible.

// Homework 8
const usersAge = prompt("Enter your age");
const usersCity = prompt("Enter the city you live in");
const usersSport = prompt("Enter your favourite kind of sport");

if (usersAge === "" || usersCity === "" || usersSport === "") {
  alert("Please, fill every field");
} else if (usersAge === null) {
  alert("Regretfully, u dont want to share your age with us :(");
} else if (usersCity === null) {
  alert("Regretfully, u dont want to share your home city with us :(");
} else if (usersSport === null) {
  alert("Regretfully, u dont want to share your hobbies with us :(");
} else if (usersCity === "Kyiv" && usersSport === "football") {
  alert(
    `You are ${usersAge}. You are living in the capital of Ukraine. Cool! You want to be like a Lionel Messi?`
  );
} else if (usersCity === "Kyiv" && usersSport === "basketball") {
  alert(
    `You are ${usersAge}. You are living in the capital of Ukraine. Cool! You want to be like a Shaquille O'Neal?`
  );
} else if (usersCity === "Kyiv" && usersSport === "tennis") {
  alert(
    `You are ${usersAge}. You are living in the capital of Ukraine. Cool! You want to be like a Stefanos Tsitsipas?`
  );
} else if (usersCity === "Kyiv") {
  alert(
    `You are ${usersAge}. You are living in the capital of Ukraine. Your favourite sport is ${usersSport}`
  );
} else if (usersCity === "London" && usersSport === "football") {
  alert(
    `You are ${usersAge}. You are living in the capital of UK. Cool! You want to be like a Lionel Messi?`
  );
} else if (usersCity === "London" && usersSport === "basketball") {
  alert(
    `You are ${usersAge}. You are living in the capital of UK. Cool! You want to be like a Shaquille O'Neal?`
  );
} else if (usersCity === "London" && usersSport === "tennis") {
  alert(
    `You are ${usersAge}. You are living in the capital of UK. Cool! You want to be like a Stefanos Tsitsipas?`
  );
} else if (usersCity === "London") {
  alert(
    `You are ${usersAge}. You are living in the capital of UK. Your favourite sport is ${usersSport}`
  );
} else if (usersCity === "Washington" && usersSport === "football") {
  alert(
    `You are ${usersAge}. You are living in the capital of the USA. Cool! You want to be like a Lionel Messi?`
  );
} else if (usersCity === "Washington" && usersSport === "basketball") {
  alert(
    `You are ${usersAge}. You are living in the capital of the USA. Cool! You want to be like a Shaquille O'Neal?`
  );
} else if (usersCity === "Washington" && usersSport === "tennis") {
  alert(
    `You are ${usersAge}. You are living in the capital of the USA. Cool! You want to be like a Stefanos Tsitsipas?`
  );
} else if (usersCity === "Washington") {
  alert(
    `You are ${usersAge}. You are living in the capital of the USA. Your favourite sport is ${usersSport}`
  );
} else if (usersSport === "football") {
  alert(
    `You are ${usersAge}. You are living in ${usersCity}. Cool! You want to be like a Lionel Messi?`
  );
} else if (usersSport === "basketball") {
  alert(
    `You are ${usersAge}. You are living in ${usersCity}. Cool! You want to be like a Shaquille O'Neal?`
  );
} else if (usersSport === "tennis") {
  alert(
    `You are ${usersAge}. You are living in ${usersCity}. Cool! You want to be like a Stefanos Tsitsipas?`
  );
} else {
  alert(
    `You are ${usersAge}. You are living in ${usersCity}. Your favourite sport is ${usersSport}`
  );
}

// Homework 9
let numOrStr = prompt("input number or string");

switch (numOrStr && numOrStr.trim() && String(+numOrStr)) {
  case null:
    alert("You have cancelled");
    break;
  case "":
    alert("Empty String");
    break;
  case "NaN":
    alert("number is Ba_NaN");
    break;
  default:
    alert("OK!");
}
