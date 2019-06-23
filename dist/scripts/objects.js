'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

// // ES5 standart (props)
// let person = {
//   firstName: firstName,
//   lastName: lastName,
//   email: email,
//   sayHi: function() {
//     console.log(`Hi my name is ${this.firstName} ${this.lastName}`)
//   }
// }
// person.sayHi();

// ES6 standart (props)
var person = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  sayHi: function sayHi() {
    console.log('Hi my name is ' + this.firstName + ' ' + this.lastName);
  },

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(value) {
    this.firstName = value;
  }
};

// // ES5 standart (get, set)
// Object.defineProperty(person, 'fullName', {
//   get: function() {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set: function(value) {
//     this.firstName = value;
//   }
// })

console.log(person);
person.sayHi();

// // ES5 standart
// function createCar(property, value) {
//   var car = {};
//   car[property]=value;
//   return car;
// }

// ES6 standart
function createCar(property, value) {
  var car = {};
  return car = _defineProperty({}, property.toUpperCase(), value);
}

console.log(createCar('vin', 1));