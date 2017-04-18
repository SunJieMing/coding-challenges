/**
 * Reference https://en.wikipedia.org/wiki/Merge_sort for more detail about how this sorting algorithm works.
 * Sort an array of integers using the merge sort algorithm.
 * First divide the list into its smallest unit (arrays with a single item in them)
 * Then compare each element with the adjacent list and combine them in the proper order.
 * Repeat until the entire array is sorted.
 * [1, 6, 3, 2, 4, 7] -> [1, 2, 3, 4, 6, 7]
 * [1, 6, 3][2, 4, 7]
 * [1][6, 3][2][4, 7]
 * [1][6][3][2][4][7]
 * [1, 3][6][2][4][7]
 * [1, 3][6][2, 4][7]
 * [1, 3, 6][2, 4][7]
 * [1, 3, 6][2, 4, 7]
 * [1, 2, 3, 4, 6, 7]
 */

const mergeSort = (arr) => {
  function merge(back, forw) {
    const ansr = [];
    while(back.length && forw.length) {
      if (back[0] <= forw[0]) ansr.push(back.shift());
      else ansr.push(forw.shift());
    }
    while (back.length) ansr.push(back.shift());
    while (forw.length) ansr.push(forw.shift());
    return ansr;
  };
  if (arr.length < 2) return arr;
  const midl = Math.floor(arr.length / 2);
  const back = arr.slice(0, midl);
  const forw = arr.slice(midl, arr.length);
  return merge(mergeSort(back), mergeSort(forw));
};