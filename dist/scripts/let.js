"use strict";

// // Example with var variable
// if(true) {
// 	var version = "ES5";
// }

// console.log(version);

// // Example with let variable
// if(true) {
// 	let standart = "ES6";
// }

// console.log(standart); // error, not found let variable

var buttons = document.querySelectorAll("button");

var _loop = function _loop(i) {
	button = buttons[i];

	button.innerText = i;
	button.onclick = function (e) {
		console.log(i);
	};
};

for (var i = 0; i < buttons.length; i++) {
	var button;

	_loop(i);
}