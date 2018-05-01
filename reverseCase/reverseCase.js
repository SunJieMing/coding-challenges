/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (str) => {
  const chars str.split('');
  chars.forEach((letter, i) => {
    if (letter.toUpperCase() === letter)  chars[i] = letter.toLowerCase();
    else {
      chars[i] = letter.toUpperCase();
    }
    return chars.join('');
  });
} 