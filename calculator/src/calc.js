/* Symbols =>
 * '(' ')' parentheses
 * '**'    exponent
 * '*'     multiply
 * '/'     divide
 * '+'     add
 * '-'     subtract
 * '-45'   negative number
 * input must have spaces between each char
 * EG '( 33 + 3 )' or '3 - 3'
 * ( ( ( -2 ) ** 3  ) )
 */

const calc = (str) => {
  let arr = str.split(' ');
  // let PEMDAS = 0;
  while (arr.length > 1) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === '*') {
        let ans = parseFloat(arr[i - 1]) * parseFloat(arr[i + 1]);
        arr.splice(i - 1, 3, ans);
      }
      if (arr[i] === '/') {
        let ans = parseFloat(arr[i - 1]) / parseFloat(arr[i + 1]);
        arr.splice(i - 1, 3, ans);
      }
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === '+') {
        let ans = parseFloat(arr[i - 1]) + parseFloat(arr[i + 1]);
        arr.splice(i - 1, 3, ans);
      }
      if (arr[i] === '-') {
        let ans = parseFloat(arr[i - 1]) - parseFloat(arr[i + 1]);
        arr.splice(i - 1, 3, ans);
      }
    }
  }
  return arr[0];
};

// parentheses finder
const para = (arr) => {
  const index = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      index.push([i, arr[i]]);
    }
    if (arr[i] === ')') {
      index.push([i, arr[i]]);
    }
  }
  while (index > 0) {
    for (var i = 0; i < index.length; i++) {
      if (index[i])
    }
  }
};

module.exports calc;
