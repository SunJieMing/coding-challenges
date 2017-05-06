/*
 * Find the greatest contiguous sum of numbers in an array of numbers.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([4, -1, 5]); // => 8
 * example 3: sumArray([10, -11, 11]); // 11
 */

const sumArray = (arr) => {
  let ans = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    ans = Math.max(0, ans + arr[i]);
    sum = Math.max(sum, ans);
  }

  return sum;
};
