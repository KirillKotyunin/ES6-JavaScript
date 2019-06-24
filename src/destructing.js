// let scores = [1, 4, [5, 6]];

// let [low, mid, [high, higher]] = scores;

// console.log(low, mid, high, higher);

function computeScore([low, mid]) {
  console.log(low, mid);
}

// computeScore([3, 4]);

function getScores() {
  return [1, 3, 4];
}

let scores = getScores();
console.log(scores);

let [low, mid, high] = getScores();
console.log(low, mid, high);

let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
console.log('No is ', yes);
console.log('Yes is ', no);

let user = {
  firstName: 'John',
  lastName: 'Doe',
  social: {
    facebook: 'johndoe',
    twitter: 'jdoe'
  }
};

let {firstName: first, lastName: last, social: {facebook: fb}, age = 25} = user;

console.log(first, last, fb, age);

function post(url, {data: {firstName, lastName}, cache}) {
  console.log(firstName, lastName, cache);
}

let result = post('api/users', {data: user, cache: false});

function getUserInfo() {
  return {
    firstname: 'John',
    lastname: 'Doe',
    social: {
      facebook: 'johndoe',
      twitter: 'jdoe'
    }
  };
}

let {firstname, lastname, social: {twitter}} = getUserInfo();


console.log(fistname, lastname, twitter);