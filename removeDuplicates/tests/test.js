const removeDuplicates = require('../removeDuplicates');

describe('removeDuplicates', () => {
  it('should remove duplicates in a given array', () => {
    expect(removeDuplicates([1, 1, 2, 3])).toEqual([1, 2, 3]);
    expect(removeDuplicates(['a', 'a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(removeDuplicates(['a', 'a', 'b', 'c', 'c'])).toEqual(['a', 'b', 'c']);
  });
  it('shouldn\'t remove non-duplicates in a given array', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  });
});