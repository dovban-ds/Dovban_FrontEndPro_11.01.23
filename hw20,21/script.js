// Homework 20
function pow(figure, rank) {
  // (5, 2)
  // (5, 1)
  if (rank == 1) {
    return figure;
  } else {
    return figure * pow(figure, rank - 1);
    // 5 ** 2 = 25
    // 25 * 5 = 125
  }
}

console.log(pow(5, 3));

// Homework 21
let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
  },
};

ladder.up().up().down().showStep();
