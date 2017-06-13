const areComplementary = (a, b) => {
  if (a === '{' && b === '}') return true;
  if (a === '[' && b === ']') return true;
  if (a === '(' && b === ')') return true;
  return false;
};

const balancedBrackets = (str) => {
  const characters = str.split('');
  const brackets = [];
  let isBalanced = true;
  let insideString = false;
  characters.forEach((character) => {
    if ((character === '\'' || character === '"') && !insideString) return insideString = true;
    if ((character === '\'' || character === '"') && insideString) return insideString = false;
    if (insideString) return;
    if (character === '{' || character === '[' || character === '(') {
      brackets.push(character);
    }
    if (character === '}' || character === ']' || character === ')') {
      if (areComplementary(brackets[brackets.length - 1], character)) return brackets.pop();
      isBalanced = false;
    }
  });
  if (brackets.length > 0) return false;
  return isBalanced;
};

console.log(balancedBrackets('[](){}'));
console.log(balancedBrackets('[({})]'));
console.log(balancedBrackets('[(]{)}'));
console.log(balancedBrackets('const obj  = { x: someFunction() }'));
console.log(balancedBrackets('const foo = () => { console.log(\'hi\');'));
console.log(balancedBrackets('const foo = () => { console.log(\'(\');}'));
