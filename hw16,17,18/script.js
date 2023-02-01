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
