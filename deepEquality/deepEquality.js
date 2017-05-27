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
  let ans = true;
  if (arr1.length !== arr2.length && Array.isArray(arr1) && Array.isArray(arr2)) return false;
  arr1.forEach((item, i) => {
    if (item !== arr2[i]) ans = false;
  });
  return ans;
};
