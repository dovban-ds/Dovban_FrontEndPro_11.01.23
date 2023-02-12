// Створити ланцюжок прототипів машина => певна марка машини.
// У підсумкового інстансу повинні бути функції машини типу їхати і гальмувати з прототипу так і функції пов'язані з маркою машини типу вертикального відкриття дверей Lamborghini.

function Car(model) {
  this.model = model;
}

const features = {
  accelerate: function () {
    console.log("accelerating");
  },
  breake: function () {
    console.log("breaking");
  },
  park: function () {
    console.log("parking");
  },
};

Car.prototype = features;

const bmw = new Car("BMW");
const lamborghini = new Car("Lamborghini");
const mitsubishi = new Car("Mitsubishi");
const toyota = new Car("Toyota");

const bmwFeature = function () {
  console.log("Turn signals");
};
const lamboFeature = function () {
  console.log("Butterfly doors");
};
const mitsFeature = function () {
  console.log("Rally-sprint");
};
const toyotaFeature = function () {
  console.log("JDM culture");
};

bmw.specTurn = bmwFeature;
lamborghini.specDoors = lamboFeature;
mitsubishi.specRally = mitsFeature;
toyota.specCulture = toyotaFeature;

console.log(bmw);
console.log(mitsubishi);
console.log(toyota);
console.log(lamborghini);
