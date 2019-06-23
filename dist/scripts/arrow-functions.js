'use strict';

// Normal function
function add(x, y) {
  return x + y;
}
console.log(add(2, 4));

// Arrow function
var arrow = function arrow(x, y) {
  return x + y;
};
console.log(arrow(32, 15));

// Normal function
var square = function square(x) {
  return x * x;
};
console.log(square(3));

// Arrow function
var arroSquare = function arroSquare(x) {
  return x * x;
};
console.log(arroSquare(32));

// Arrow function
var hello = function hello() {
  return 'hello';
};
console.log(hello());

// Arrow function
var log = function log() {
  return console.log('Logging');
};

// Normal multiline function in ES5
var multiply = function multiply(x, y) {
  var result = x * y;
  return result;
};
console.log(multiply(4, 5));

// Arrow multiline function in ES6
var arrowMultiply = function arrowMultiply(x, y) {
  var result = x * y;
  return result;
};
console.log(arrowMultiply(4, 5));

// Arrow function, wich return object
var getPerson = function getPerson() {
  return { name: 'John' };
};
console.log(getPerson());

// IIFE function
(function () {
  console.log('IIFIE');
})();

// IIFE arrow function
(function () {
  return console.log('IIFIE');
})();

// Normal function
var numbers = [1, 2, 3, 5, 4, 10, 12];

var sum = 0;

numbers.forEach(function (num) {
  sum += num;
});
console.log(sum);

// Arrow function
numbers.forEach(function (num) {
  return num += num;
});
var squared = numbers.map(function (n) {
  return n * n;
});
console.log(sum);
console.log(squared);

// // Object with normal function
// let person = {
//   name: 'Bob',
//   greet: function() {
//     console.log('Hello, my name is '+ this.name);
//     console.log(this);
//   }
// }


// // Normal function
// let person = {
//   name: 'Bob',
//   greet: function() {
//     var that = this;
//     window.setTimeout(function() {
//       console.log("Hello, my name is " + that.name);
//       console.log('"this is" ', this);
//       console.log('"that" is ', that);
//     }, 2000);
//   }
// }

// person.greet();

// Arrow function
var person = {
  name: 'Bob',
  greet: function greet() {
    var _this = this;

    var that = this;
    window.setTimeout(function () {
      console.log("Hello, my name is " + _this.name);
      console.log('"this is" ', _this);
    }, 2000);
  }
};

person.greet();