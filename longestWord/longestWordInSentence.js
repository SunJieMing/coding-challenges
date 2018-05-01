/*
 * Given a string that is a sentence find the longest word.
 * Example:
 * 'I love JavaScript' -> 'JavaScript'`
 */

const longestWord = (str) => {
  let word = '';
  str.split(' ').forEach((key) => {
    if (key.length > word.length) {
      word = key;
    }
  });
  return word;
}
