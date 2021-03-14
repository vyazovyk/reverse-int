module.exports = function reverse (n) {
  let x = String(Math.abs(n)).split('').reverse().join('');
  return Number(x);
}


// Given: number, your task is to implement function that reverse digits of this number.

// For example:

// reverse(123); // 321
// reverse(233); // 332
// reverse(535); // 535
// reverse(95034); // 43059
// Write your code in `src/index.js. All test cases are designed as “error-free”, so don't worry about handling any errors.