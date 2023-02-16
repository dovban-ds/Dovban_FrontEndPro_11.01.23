// Создать функцию которая будет принимать имя пользователя и время через которое он хочет чтоб его поприветствовали. Время пользователь хочет вводить строкой в разном формате например '10 minutes' , '20 seconds', '1 hour', '2 hours'

const userName = prompt("Enter your name");
const timeToGreeting = prompt("Input time to say hello");

function sayHi(name, time) {
  if (time.includes("second" || "seconds")) {
    result = time.replace(/[second seconds]/g, "");
    setTimeout(() => {
      console.log(`Hello, dear ${name}!`);
    }, result * 1000);
  } else if (time.includes("minute" || "minutes")) {
    result = time.replace(/[minute minutes]/g, "");
    setTimeout(() => {
      console.log(`Hello, dear ${name}!`);
    }, result * 1000 * 60);
  } else {
    result = time.replace(/[hour hours]/g, "");
    setTimeout(() => {
      console.log(`Hello, dear ${name}!`);
    }, result * 1000 * 60 * 60);
  }
}

console.log(sayHi(userName, timeToGreeting));

// Создать функцию которая будет или сериализировать или десериализировать объект в зависимости от того в какой форме он был передан

function cheking(myObj) {
  // try {
  //   return JSON.parse(myObj);
  // } catch {
  //   return JSON.stringify(myObj);
  // } another version
  return typeof myObj === "string" ? JSON.parse(myObj) : JSON.stringify(myObj);
}

// Создать функцию которая вернет true или false в зависимости от того что в нее передать JSON строку или обычную строку

function check(stringa) {
  try {
    JSON.parse(stringa);
    return true;
  } catch {
    return false;
  }
}
