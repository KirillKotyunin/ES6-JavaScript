// Normal function
function add(x, y) {
  return x + y;
}
console.log(add(2,4));

// Arrow function
let arrow = (x, y) => x + y;
console.log(arrow(32,15));

// Normal function
let square = function(x) {
  return x*x;
}
console.log(square(3));

// Arrow function
let arroSquare = x => x * x;
console.log(arroSquare(32));

// Arrow function
let hello = () => 'hello';
console.log(hello());

// Arrow function
let log = () => console.log('Logging');

// Normal multiline function in ES5
let multiply = function(x, y) {
  let result = x * y;
  return result;
}
console.log(multiply(4, 5));

// Arrow multiline function in ES6
let arrowMultiply = (x, y) => {
  let result = x * y;
  return result;
}
console.log(arrowMultiply(4, 5));

// Arrow function, wich return object
let getPerson = () => ({ name: 'John' })
console.log(getPerson());

// IIFE function
(function() {
  console.log('IIFIE');
})();

// IIFE arrow function
(() => console.log('IIFIE'))();

// Normal function
let numbers = [1, 2, 3, 5, 4, 10, 12];

let sum = 0;

numbers.forEach(function(num) {
  sum += num;
});
console.log(sum);

// Arrow function
numbers.forEach(num => num += num);
let squared = numbers.map(n => n * n);
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
let person = {
  name: 'Bob',
  greet: function() {
    var that = this;
    window.setTimeout(() => {
      console.log("Hello, my name is " + this.name);
      console.log('"this is" ', this);
    }, 2000);
  }
}

person.greet();