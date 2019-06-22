'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function welcome(name) {
	console.log(('Hello ' + name).toUpperCase());
}

welcome('Kirill');

function createEmail(to, from, subject, message) {
	console.log('\n\t\tTo: ' + to + '\n\t\tFrom: ' + from + '\n\t\tSubject: ' + subject + '\n\t\tMessage: ' + message + '\n\t');
}

createEmail('john@gmail.com', 'jane@gmail.com', 'Hello', 'How are you?');

function add(x, y) {
	console.log(x + ' + ' + y + ' = ' + (x + y));
}

add(2, 10); // 2 + 10 = 12

add('3', '15'); // '3' + '15' = '315'

function numbers(x, y) {
	console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}

numbers('3', '15'); // converst strings to numbers and return 3 + 15 = 18

var name = "Kirill";
console.log(upperName(_templateObject, name));

function upperName(literals, value) {
	return literals[0] + value.toUpperCase();
}