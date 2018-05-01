/* Implement an algorithm to determine if a string has all unique characters. 
 * What if you cannot use additional data structures?
 */

const isUnique = (str) => {
  const key = {};
  str.split('').forEach((letter) => {
    if (key[letter]) return false;
    key[letter] = true;
  });
  return true;
};

const isUniquer = (str) => {
  const lower = str.toLowerCase();
  return /(\S).*?\1/.test(lower);
};

module.exports = {
  isUnique,
  isUniquer
};