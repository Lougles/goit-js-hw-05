class Car {

  getSpecs(car) {
    console.log(`maxSpeed: ${this.maxSpeed},
    speed: ${this.speed},
    isOn: ${this.isOn},
     distance: ${this.distance},
     price: ${this.price}`);
  }

  constructor({maxSpeed, price}, distance = 0, speed, isOn = false) {
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.distance = distance;
    this.speed = speed;
    this.isOn = isOn;
  }

  get getPrice () { 
    return this.price; 
  }
  set setPrice(value) {
    this.price = value;
  }
  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (value < this.maxSpeed) {
      this.speed = value;
    } else {
      console.log("Вы не можете ехать больше максиамльной скорости");
    }
  }

  decelerate(value) {
    if (value + this.speed > 0) {
      this.speed -= value;
    }
    else {
      console.log("Вы уже стоите на месте");
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      this.distance += hours * this.speed;
    }
    else {
      console.log("Вы не можете ехать на стоячей машине");
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
// console.log(mustang);
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
mustang.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
mustang.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
//
mustang.turnOn();
mustang.accelerate(180);
mustang.drive(4);
mustang.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(120);
mustang.drive(4);
mustang.turnOff();
mustang.getSpecs(mustang);
