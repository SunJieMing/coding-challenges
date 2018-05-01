/* eslint-disable no-undef */
const commonCharacters = require('../commonCharacters');

describe('commonCharacters', () => {
  it('should return null when strings have neither in common', () => {
    expect(commonCharacters('abc', 'def')).toEqual(null);
    expect(commonCharacters('111', 'def')).toEqual(null);
  });

  it('should return null when passed anything but a string', () => {
    expect(commonCharacters(12345, ['d'])).toEqual(null);
    expect(commonCharacters('abc', 123)).toEqual(null);
    expect(commonCharacters('abc', {})).toEqual(null);
  });

  it('should return common letters between both strings', () => {
    expect(commonCharacters('abc', 'dabc')).toEqual('abc');
    expect(commonCharacters('abcdefg', 'xyzabcde')).toEqual('abcde');
  });
});
