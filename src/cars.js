'use strict';

class Car {
  constructor() {
    this.speed = 0;
  }

  increaseSpeed(speed) {
    this.speed += speed;
  }

  stop() {
    this.speed = 0;
  }
}

module.exports = Car;
