// function greet (greeting, name) {
// 	console.log(`${greeting}  ${name}`);
// }

// greet('Hi', 'Kirill'); // Hi Kirill
// greet('Hi'); // Hi undefined
// greet(undefined, 'Kirill'); // undefined Kirill
// greet(); // undefined undefined

function greet(greeting='Hello', name="friend") {
	console.log(`${greeting} ${name}`);
}

greet('Hi', 'Kirill'); // Hi Kirill
greet('Hi'); // Hi friend
greet(undefined, 'Kirill'); // Hello Kirill
greet(); // Hello friend
