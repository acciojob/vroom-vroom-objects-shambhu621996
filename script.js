// Complete the js code
// 1. Car Constructor Function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car's prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// 2. SportsCar Constructor Function (inherits from Car)
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to initialize make and model
  Car.call(this, make, model);
  
  // Add topSpeed specific to SportsCar
  this.topSpeed = topSpeed;
}

// Inherit from Car's prototype
SportsCar.prototype = Object.create(Car.prototype);

// Reset the constructor property (important step)
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
