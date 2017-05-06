const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
  it('should return fizzBuzz when divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
    expect(fizzBuzz(30)).toBe('fizzbuzz');
    expect(fizzBuzz(45)).toBe('fizzbuzz');
  });
  it('should return fizz when divisible by 3', () => {
    expect(fizzBuzz(9)).toBe('fizz');
    expect(fizzBuzz(18)).toBe('fizz');
    expect(fizzBuzz(27)).toBe('fizz');
  });
  it('should return buzz when divisible by 5', () => {
    expect(fizzBuzz(20)).toBe('buzz');
    expect(fizzBuzz(40)).toBe('buzz');
    expect(fizzBuzz(80)).toBe('buzz');
  });
  it('should return the number when not divisible', () => {
    expect(fizzBuzz(22)).toBe(22);
    expect(fizzBuzz(23)).toBe(23);
    expect(fizzBuzz(26)).toBe(26);
  })
});