let staticLanguages = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

let languages = [staticLanguages, 'C#', 'Python', dynamicLanguages]; //result: [['C', 'C++', 'Java'], 'C#', 'Python', ['JavaScript', 'PHP', 'Ruby']]
languages = [...staticLanguages, 'C#', 'Python', ...dynamicLanguages]; //result: ["C", "C++", "Java", "C#", "Python", "JavaScript", "PHP", "Ruby"]
console.log(languages);

function add(x, y, z) {
	console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(...numbers);