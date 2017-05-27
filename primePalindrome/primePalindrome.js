/*
 * Write a function that returns the largest prime palindrome less than 1000.
 * A palindrome is a number that reads the same forwards and backwards.
 * Exaple: 636, 12321, etc.
 */
// implement sieve from 0-1000
// const palindrome = []
// forEach, check to see if number is palindromic
  //const box = []
  //while key > 0
    // const x = key % 10;
    // box.push(x);
  //

export default const palindromePrime = (max) => {
  let primed;
  for (let i = max; i >= 0; i--) {
    primed = true;
    for (let j = 0; j < Math.sqrt(max); j++) {
      if (i % j === 0) {
        primed = false;
        break;
      }
    }
    if (primed) {
      if (i.toString() === i.toString().split('').reverse().join('')) return i;
    }
  }
  return "none found in range";
};