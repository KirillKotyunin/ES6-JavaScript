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

for(let i=0; i < buttons.length; i++) {
	var button = buttons[i];
	button.innerText = i;
	button.onclick = function(e) {
		console.log(i);
	}
}