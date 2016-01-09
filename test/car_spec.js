'use strict';

const assert = require('assert');
const Car = require('../src/cars');

describe('Car', () => {
  it('should increase speed', () => {
    // Given
    const car = new Car();

    // When
    car.increaseSpeed(10);

    // Then
    assert.equal(car.speed, 10);
  });

  it('should stop car', () => {
    // Given
    const car = new Car();
    car.speed = 10;

    // When
    car.stop();

    // Then
    assert.equal(car.speed, 0);
  });
});
