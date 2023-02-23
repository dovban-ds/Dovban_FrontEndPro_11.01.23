// Создать функцию которая будет принимать миллисекунды и вернет true или false в зависимости от того сегодня ли то число которое было передано
const userInfo = +prompt("Input your value");

function time(milisec) {
  const actualDay = new Date();
  const userData = new Date(milisec);

  if (userData.getDate() === actualDay.getDate()) {
    return true;
  } else {
    return false;
  }
}

console.log(time(userInfo));

// Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды
const userData = +prompt("Input your value");

function date(milisec) {
  const actualDay = new Date(milisec);
  if (actualDay.getMonth() + 1 > 9) {
    return console.log(
      `${actualDay.getDate()}.${
        actualDay.getMonth() + 1
      }.${actualDay.getFullYear()} ${actualDay.getHours()}:${actualDay.getMinutes()}`
    );
  } else {
    return console.log(
      `${actualDay.getDate()}.0${
        actualDay.getMonth() + 1
      }.${actualDay.getFullYear()} ${actualDay.getHours()}:${actualDay.getMinutes()}`
    );
  }
}

date(userData);

// Создать функцию которая принимает миллисекунды и вернет количество времени которое прошло или должно пройти с текущего момента.
const userFigures = +prompt("Input your value");

function milisec(milisec) {
  const actualDate = new Date();
  const userActualDate = new Date(milisec);
  if (actualDate.getTime() > userActualDate.getTime()) {
    return console.log(
      `${
        actualDate.getTime() - userActualDate.getTime()
      } milliseconds have passed from ${userActualDate}`
    );
  } else if (actualDate.getTime() < userActualDate.getTime()) {
    return console.log(
      `${
        userActualDate.getTime() - actualDate.getTime()
      } milliseconds remains to ${userActualDate}`
    );
  } else {
    return console.log("BINGO!");
  }
}

milisec(userFigures);
