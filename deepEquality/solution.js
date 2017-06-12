/**
  * Write a function that, given two arrays, returns whether or not the two
  * are deeply equivalent--meaning the contents of the two arrays is the
  * same.  Assume there will be no objects.
  *
  * Examples:
  *
  * deepEquals([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); // true
  * deepEquals([1, 2, 3, 4, 5],[1, 3, 4, 5, 6]); // false
  */

const deepEquals = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

console.log(deepEquals([1, [1, 2, 3, [1, 2, 3]], 2, 3, 4, 5, [6]], [1, [1, 2, 3, [1, 2, 3]], 2, 3, 4, 5, [6]]));
