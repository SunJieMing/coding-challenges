const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
  it('should return \'fizz\' if num is divisible by 3 and not 5', () => {
    const result = fizzBuzz(3);
    const result2 = fizzBuzz(9);
    expect(result).toBe('fizz');
    expect(result2).toBe('fizz');
  });

  it('should return \'buzz\' if num is divisible by 5 and not 3', () => {
    const result = fizzBuzz(5);
    const result2 = fizzBuzz(20);
    expect(result).toBe('buzz');
    expect(result2).toBe('buzz');
  });

  it('should return \'fizzbuzz\' if num is divisible by both 3 and 5', () => {
    const result = fizzBuzz(15);
    const result2 = fizzBuzz(30);
    expect(result).toBe('fizzbuzz');
    expect(result2).toBe('fizzbuzz');
  });

  it('should return num if num is not divisible both 3 or 5', () => {
    const result = fizzBuzz(4);
    const result2 = fizzBuzz(7);
    expect(result).toBe(4);
    expect(result2).toBe(7);
  });
});
