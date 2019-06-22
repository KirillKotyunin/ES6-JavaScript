'use strict';

// function greet (greeting, name) {
// 	console.log(`${greeting}  ${name}`);
// }

// greet('Hi', 'Kirill'); // Hi Kirill
// greet('Hi'); // Hi undefined
// greet(undefined, 'Kirill'); // undefined Kirill
// greet(); // undefined undefined

function greet() {
	var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "friend";

	console.log(greeting + ' ' + name);
}

greet('Hi', 'Kirill'); // Hi Kirill
greet('Hi'); // Hi friend
greet(undefined, 'Kirill'); // Hello Kirill
greet(); // Hello friend

function sum(...values) {
	console.log(values instanceof Array);

	let sum = 0;
	values.forEach(function(value) {
		sum += value;
	});

	console.log(sum);
}

function sum(...values) {
	console.log(values.reduce(function(prevValue, currentValue){
		return prevValue + currentValue;
	}));
}

sum(2,3,4,5)