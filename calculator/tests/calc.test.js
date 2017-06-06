const calc = require('../src/calc');

describe('calc', () => {
  it('should take in a string, and return the summation of the numbers', () => {
    expect(calc('3 + 3').toEqual(6));
    
  });
});