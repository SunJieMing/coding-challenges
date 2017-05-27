/*
 * Implement three functions called multiply, divide, and modulo.
 * These functions should multiply, divide, or return the remainder of two arguments.
 * Now for the tricky part: you can only use + and - to implement these functions.
 *
 */

const negCheck = (num1, num2) => {
  const arr = [0];
  if (num1 < 0) {
    arr[0] += 1;
    arr.push(0 - num1);
  } else {
    arr.push(num1);
  }
    if (num2 < 0) {
    arr[0] += 1;
    arr.push(0 - num2);
  } else {
    arr.push(num2);
  }
  return arr;
};

const multiply = (num1, num2) => {
  const arr = negCheck(num1, num2);
  let answer = 0;
  for (var i = 0; i < arr[2]; i++) {
    answer += arr[1];
  }
  if (arr[0] % 2 === 1) answer = 0 - answer;
  return answer;
};

const divide = (num1, num2) => {
  const arr = negCheck(num1, num2);
  let remainder = arr[1];
  let answer = 0;
  while(remainder > arr[2]) {
    answer += 1;
    remainder -= arr[2];
  }
  if (arr[0] % 2 === 1) answer = 0 - answer;
  return answer;
};

const modulo = (num1, num2) => {
  const arr = negCheck(num1, num2);
  let remainder = arr[1];
  while(remainder > arr[2]) {
    remainder -= arr[2];
  }
  if (num1 < 0) return (0 - remainder);
  return remainder;
}
