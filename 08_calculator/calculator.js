const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  let ans = 0;
  let i = 0;
	while (i < array.length) {
    ans += array[i];
    i++;
  }
  return ans;
};

const multiply = function(...args) {
  let ans = 1;
  for (let i = 0; i< args.length; i++) {
    ans *= args[i];
  }
  return ans;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(number) {
	let ans = 1;
  for (let i = number; i > 0; i--) {
    ans = ans * i;
  }
  return ans;
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
