// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9, 
// write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateImage = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    for (let j = i; j < len - i - 1; j++) {
      let bucket = arr[i][j];
      arr[i][j] = arr[j][len - i - 1];
      arr[j][len - i - 1] = arr[len - i - 1][len - j - 1];
      arr[len - i - 1][len - j - 1] = arr[len - j - 1][i];
      arr[len - j - 1][i] = bucket;
    }
  }
  return arr;
};
