const commonCharacters = (str1, str2) => {
  return str1.split('').reduce((acc, val) => {
    if (str2.includes(val) && !acc.includes(val)) return acc + val;
    return acc;
  });
};

console.log(commonCharacters('abcdefg', 'xyzabcde'));
