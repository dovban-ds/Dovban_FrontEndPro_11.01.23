// Homework 12
const usersArray = [1, 16, 59, 3, 2, 28];
console.log(usersArray);

function compareUsersData(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
console.log(usersArray.sort(compareUsersData));

usersArray.splice(1, 3);
console.log(usersArray);
