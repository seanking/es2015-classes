'use strict';

class Car {
  constructor(cylinders) {
    this.cylinders = typeof cylinders !== 'undefined' ? cylinders : 4;
    this.speed = 0;
  }

  increaseSpeed() {
    this.speed += 1;
  }

  decreaseSpeed() {
    this.speed -= 1;
  }
}

class FastCar extends Car {
  constructor() {
    super(6);
  }

  increaseSpeed() {
    this.speed += 3;
  }
}

module.exports.Car = Car;
module.exports.FastCar = FastCar;
