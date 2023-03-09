const tableTime = new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log("Wake up"));
  }, 1000);
})
  .then((previousResult) => {
    setTimeout(() => {
      previousResult = "Making the bed";
      console.log(previousResult);
    }, 2000);
  })
  .then((previousResult) => {
    setTimeout(() => {
      previousResult = "Brush teeth";
      console.log(previousResult);
    }, 3000);
  })
  .then((previousResult) => {
    setTimeout(() => {
      previousResult = "Breakfast";
      console.log(previousResult);
    }, 4000);
  });
