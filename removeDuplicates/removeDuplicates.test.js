const removeDuplicates = require('./removeDuplicates');

describe('removeDuplicates', () => {
  it('should not mutate the input array', () => {
    const input = [1, 1, 2, 2, 3, 3];
    removeDuplicates(input);
    expect(input).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('should remove duplicate numbers', () => {
    const input = [1, 1, 2, 2, 3, 3];
    const output = removeDuplicates(input);
    expect(output).toEqual([1, 2, 3]);
  });

  it('should remove duplicate strings', () => {
    const input = ['a', 'a', 'b', 'b', 'c', 'c'];
    const output = removeDuplicates(input);
    expect(output).toEqual(['a', 'b', 'c']);
  });

  it('should remove duplicate bools', () => {
    const input = [true, true, false, false];
    const output = removeDuplicates(input);
    expect(output).toEqual([true, false]);
  });

  it('should return an array', () => {
    const input = [1, 1, 2, 2, 3, 3];
    const output = removeDuplicates(input);
    expect(Array.isArray(output)).toBe(true);
  });

  it('should return an empty array if no argument passed in', () => {
    const output = removeDuplicates();
    expect(output).toEqual([]);
  });
});
