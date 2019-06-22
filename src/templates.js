function welcome(name) {
	console.log(`Hello ${name}`.toUpperCase());
}

welcome('Kirill');

function createEmail(to, from, subject, message) {
	console.log(`
		To: ${to}
		From: ${from}
		Subject: ${subject}
		Message: ${message}
	`);
}

createEmail('john@gmail.com', 'jane@gmail.com', 'Hello', 'How are you?');

function add(x, y) {
	console.log(`${x} + ${y} = ${x + y}`);
}

add(2,10); // 2 + 10 = 12

add('3', '15'); // '3' + '15' = '315'

function numbers(x, y) {
	console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

numbers('3', '15'); // converst strings to numbers and return 3 + 15 = 18

let name = "Kirill";
console.log(upperName`Hello ${name}`);

function upperName(literals, value) {
	return literals[0] + value.toUpperCase();
}