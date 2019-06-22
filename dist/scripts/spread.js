'use strict';

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

var languages = [staticLanguages, 'C#', 'Python', dynamicLanguages]; //result: [['C', 'C++', 'Java'], 'C#', 'Python', ['JavaScript', 'PHP', 'Ruby']]
languages = [].concat(staticLanguages, ['C#', 'Python'], dynamicLanguages); //result: ["C", "C++", "Java", "C#", "Python", "JavaScript", "PHP", "Ruby"]
console.log(languages);

function add(x, y, z) {
	console.log(x + y + z);
}

var numbers = [1, 2, 3];

add.apply(undefined, numbers);