/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

const selectionSort = (arr) => {
  const len = arr.length;
  for(let i = 0; i < len; i++) {
    let minAt = i;
    for(let j = i + 1; j < len; j++) {
      if(arr[j] < arr[minAt]) minAt = j;
    }
 
    if(minAt !== i) {
      arr[i] += arr[minAt];
      arr[minAt] = arr[i] - arr[minAt];
      arr[i] -= arr[minAt]
    }
  }
  return arr;
};

function selectionSort(arr) {

}