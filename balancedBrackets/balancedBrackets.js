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
