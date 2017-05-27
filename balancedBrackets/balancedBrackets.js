/*
 * write a function that accepts a string and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedBrackets('(');  // false
 *   balancedBrackets('()'); // true
 *   balancedBrackets(')(');  // false
 *   balancedBrackets('(())');  // true
 *
 * Step 2:
 *   make the solution work for all types of brackets
 *
 * Example:
 *  balancedBrackets('[](){}'); // true
 *  balancedBrackets('[({})]');   // true
 *  balancedBrackets('[(]{)}'); // false
 *
 * Step 3:
 * ignore other characters
 * balancedBrackets(' const obj  = { x: someFunction() }'); // true
 * balancedBrackets(' const foo = () => { console.log('hi');'); // false
 *
 */
/*
balancedBrackets takes in a string
iterates through each item
  if matches (, look for the other side. or inner parentheses
  Use a stack? (store order?)

*/

const balancedBrackets = (str) => {
  let line = str.split('');
  let stack = [];
  let ans = true;
  const open = {'(': ')', '{': '}', '[': ']'};
  const close = {')': true, '}': true, ']': true};
  line.forEach((item) => {
    if (open[item]) {
      stack.push(item);
    } else if (close[item]) {
      if (open[stack.pop()] !== item) return false;
    }
  });
  return stack.length === 0;
};