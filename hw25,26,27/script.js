// Homework 25
class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Apartment {
  residents = [];
  addResident(human) {
    this.residents.push(human);
  }
}

class House {
  flats = [];
  constructor(maxFlats) {
    this.maxFlats = maxFlats;
  }
  checking(apartment) {
    if (this.flats.length < this.maxFlats) {
      this.flats.push(apartment);
    } else {
      console.log("Sorry, all apartments are already sold :(");
    }
  }
}

const firstResident = new Human("Danylo", "male");
const secondResident = new Human("Arthur", "male");
const thirdResident = new Human("Anastasia", "female");
const fourthResident = new Human("Michael", "male");
const fifthResident = new Human("Jacob", "male");
const sixthResident = new Human("Bohdan", "male");

const firstFlat = new Apartment();
const secondFlat = new Apartment();
const thirdFlat = new Apartment();
const fourthFlat = new Apartment();
const fifthFlat = new Apartment();
const sixthFlat = new Apartment();

firstFlat.addResident(firstResident);
secondFlat.addResident(secondResident);
thirdFlat.addResident(thirdResident);
fourthFlat.addResident(fourthResident);
fifthFlat.addResident(fifthResident);
sixthFlat.addResident(sixthResident);

const home = new House(5);
home.checking(firstFlat);
home.checking(secondFlat);
home.checking(thirdFlat);
home.checking(fourthFlat);
home.checking(fifthFlat);
home.checking(sixthFlat);

console.log(home);

// Homework 26
class Driver {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showData() {
    console.log(`Name: ${this.name} \n Age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.owners = [];
  }
  addOwner(ownerData) {
    if (ownerData.age > 18) {
      this.owners.push(ownerData);
    } else {
      console.log(`Unfortunatelly, ${ownerData.name}, your age isn't enough`);
    }
  }
  showInfo() {
    console.log(`${this.brand} \n ${this.model} \n ${this.year}`);
    this.owners.forEach((owner) => owner.showData());
  }
}

const firstDriver = new Driver("Jeremy", 19);
const secondDriver = new Driver("Jessica", 38);
const thirdDriver = new Driver("Orlando", 16);

const firstCar = new Car("Mitsubishi", "Lancer", 2008);
const secondCar = new Car("BMW", "328i", 2014);
const thirdCar = new Car("Toyota", "RAV4", 2020);

firstCar.addOwner(firstDriver);
secondCar.addOwner(secondDriver);
thirdCar.addOwner(thirdDriver);

firstCar.showInfo();
secondCar.showInfo();
thirdCar.showInfo();

// Homework 27
class Student {
  constructor(name, surname, birth) {
    this.name = name;
    this.surname = surname;
    this.birth = birth;
    this.marks = [];
    this.attendance = new Array(25);
  }
  grades(grades) {
    this.marks.push(grades);
  }
  getInfo() {
    const age = 2023 - this.birth;
    const sum = this.marks.reduce((acc, item) => (acc += item));
    const average = sum / this.marks.length;
    return average;
  }

  present() {
    let index = this.attendance.findIndex((item) => item === undefined);
    if (index !== -1) {
      this.attendance[index] = true;
    }
  }
  absent() {
    let index = this.attendance.findIndex((item) => item === undefined);
    if (index !== -1) {
      this.attendance[index] = false;
    }
  }
  attend() {
    const lessons = this.attendance.filter((item) => item !== undefined);
    const totalLessons = lessons.length;
    const success = lessons.filter((item) => item === true);
    const amount = success.length;
    const result = amount / totalLessons;
    return result;
  }
  summary() {
    if (this.getInfo() > 90 && this.attend() > 0.9) {
      console.log("Well done!");
    } else if (this.getInfo() < 90 && this.attend() < 0.9) {
      console.log("Bastard");
    } else if (this.getInfo() < 90 || this.attend() < 0.9) {
      console.log("Good job, but it could be better next time...");
    }
  }
}

const student1 = new Student("Franc", "Muligh", 2003);

student1.present();
student1.present();
student1.present();

student1.grades(100);
student1.grades(100);
student1.grades(100);

console.log(student1);
console.log(student1.summary());

const student2 = new Student("Mike", "Weezley", 2000);

student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();

student2.grades(100);
student2.grades(100);
student2.grades(100);

console.log(student2);
console.log(student2.summary());

const student3 = new Student("Ricardo", "Adams", 2006);

student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();

student3.grades(80);

console.log(student3);
console.log(student3.summary());
