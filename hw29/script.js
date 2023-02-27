class Hamburger {
  constructor(size, stuff) {
    this.size = size;
    this.stuff = stuff;
    this.toppings = [];
  }

  static small = {
    price: 50,
    calories: 20,
  };
  static big = {
    price: 100,
    calories: 40,
  };
  static cheese = {
    price: 10,
    calories: 20,
  };
  static salad = {
    price: 20,
    calories: 5,
  };
  static potatoe = {
    price: 15,
    calories: 10,
  };
  static sauce = {
    price: 15,
    calories: 0,
  };
  static mayo = {
    price: 20,
    calories: 5,
  };

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculateCalories() {
    const calories = this.toppings.map((elem) => elem.calories);
    const sum =
      this.size.calories +
      this.stuff.calories +
      calories.reduce((acc, item) => acc + item);
    return sum;
  }
  calculatePrice() {
    const price = this.toppings.map((elem) => elem.price);
    const sum =
      this.size.price +
      this.stuff.price +
      price.reduce((acc, item) => (acc += item));
    return sum;
  }
}

const burger = new Hamburger(Hamburger.small, Hamburger.salad);

burger.addTopping(Hamburger.sauce);

burger.addTopping(Hamburger.mayo);

burger.addTopping(Hamburger.sauce);

console.log(`Calories: ${burger.calculateCalories()}`);
console.log(`Price: ${burger.calculatePrice()}`);

burger.addTopping(Hamburger.mayo);
burger.addTopping(Hamburger.mayo);

console.log(`Calories: ${burger.calculateCalories()}`);
console.log(`Price: ${burger.calculatePrice()}`);
