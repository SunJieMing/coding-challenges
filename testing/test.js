const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 9e3ebd20a77ef7801b11e6a1d2b040d745f339d2
