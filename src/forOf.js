let browsers = ['Chrome', 'Safari', 'Edge', 'Opera'];

// Loop for...in
for(let browser in browsers) {
  console.log(browser);
}

for(let index in browsers) {
  console.log(browsers[index]);
}

console.log(browsers);

// Loop for...of
for(let browser of browsers) {
  console.log(browser);
}