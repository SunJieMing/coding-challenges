/*
 * Write a function that removes all duplicate values from an array.
 * ['a', 'a', 'b', 'c', 'c'] -> ['a', 'b', 'c']
 * [1, 1, 2, 2, 3, 3] -> [1, 2, 3]
 * Write unit tests to test the output of this function.
 * Run `npm init` to create a package.json file and then run `npm i --save jest`.
 * You then need to modify the `test` script inside of `package.json` to say `jest` on the value side of the colon.
 */

const removeDuplicates = (arr) => {
  if (!arr) return [];
  const uniqueValues = {};
  const uniqueArray = [];
  arr.forEach((item, i) => {
    uniqueValues[item] = typeof arr[i];
  });
  Object.keys(uniqueValues).forEach(key => {
    if (uniqueValues[key] === 'number') {
      uniqueArray.push(parseFloat(key));
    }
    if (uniqueValues[key] === 'string') {
      uniqueArray.push(key);
    }
    if (uniqueValues[key] === 'boolean') {
      uniqueArray.push(key === 'true');
    }
  });
  return uniqueArray;
};

module.exports = removeDuplicates;
