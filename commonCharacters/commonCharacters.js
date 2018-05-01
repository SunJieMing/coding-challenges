/**
 * Write a function that accepts two strings and returns a
 * string containing all of the common characters found in both strings.
 *
 * Example: commonCharacters('abcdefg', 'xyzabcde')
 * Returns: 'abcde'
 *
 */

const commonCharacters = (str, sec) => {
  if (typeof str !== 'string' || typeof sec !== 'string') return null;
  const a = {};
  let ans = '';
  str.split('').forEach((letter) => {
    a[letter] = 1;
  });
  sec.split('').forEach((letter) => {
    if (a[letter] === 1) a[letter] = 2;
  }); 
  Object.keys(a).forEach((letter) => {
    if (a[letter] === 2) ans = ans + letter;
  });
  if (ans === undefined || ans === '') return null;
  return ans;
};

module.exports = commonCharacters;

  // const ans = Object.keys(a).reduce((prev, curr) => {
  //   if (a[curr] === 2) prev + curr;
  // });
