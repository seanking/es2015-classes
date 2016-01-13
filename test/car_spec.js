'use strict';

const assert = require('assert');
const Car = require('../src/cars').Car;
const FastCar = require('../src/cars').FastCar;

describe('Car', () => {
  it('should have four cyliners', () => {
    // When
    const car = new Car();

    // Then
    assert.equal(car.cylinders, 4);
  });

  it('should increase the speed', () => {
    // Given
    const car = new Car();

    // When
    car.increaseSpeed();

    // Then
    assert.equal(car.speed, 1);
  });

  it('should decrease the speed', () => {
    // Given
    const car = new Car();
    car.speed = 10;

    // When
    car.decreaseSpeed();

    // Then
    assert.equal(car.speed, 9);
  });

  it('should press horn', () => {
    // When
    const sound = Car.pressHorn();

    // Then
    assert.equal(sound, 'beep');
  });
});

describe('FastCar', () => {
  it('should have six cyliners', () => {
    // When
    const fastCar = new FastCar();

    // Then
    assert.equal(fastCar.cylinders, 6);
  });

  it('should increase the speed', () => {
    // Given
    const fastCar = new FastCar();

    // When
    fastCar.increaseSpeed();

    // Then
    assert.equal(fastCar.speed, 3);
  });
});
