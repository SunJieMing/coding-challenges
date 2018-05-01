/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */
const quickSort = (nums) => {
  arr = arr.slice();
  if (nums.length < 2) return nums;
  const lessThanPivot = [];
  const gr8rThanPivot = [];
  const middleIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(middleIndex, 1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot[0]) {
      lessThanPivot.push(arr[i]);
    } else {
      gr8rThanPivot.push(arr[i]);
    }
  }

  return [].concat(quickSort(lessThanPivot), pivot, quickSort(gr8rThanPivot));
};
