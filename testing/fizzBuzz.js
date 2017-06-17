/*
 * Create the function fizzBuzz that takes a single integer as an argument.
 * Return 'fizz' if num is divisible by 3 with no remainder.
 * Return 'buzz' if num is divisible by 5 with no remainder.
 * Return 'fizzbuzz' if num is divisible by both 3 and 5 with no remainder.
 * If the number is not divisible by either 3 or 5 then return the number given as the argument.
 * Before you write your function write tests inside of test.js to test this function.
 * The function is already being exported and imported for you.
 * Run your unit tests with the command `npm test` from inside of this folder.
 */
"use strict";

<<<<<<< HEAD
const fizzBuzz = (num) => {
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
// =======
// const fizzBuzz = (num = 0) => {
//   const divisibleBy5 = num % 5 === 0;
//   const divisibleBy3 = num % 3 === 0;
//   if (divisibleBy3 && divisibleBy5) return 'fizzbuzz';
//   if (divisibleBy3) return 'fizz';
//   if (divisibleBy5) return 'buzz';
// >>>>>>> 9e3ebd20a77ef7801b11e6a1d2b040d745f339d2
};

module.exports = fizzBuzz;
