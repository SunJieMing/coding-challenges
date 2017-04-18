/*
 * Bubble sort is the most basic sorting algorithm.
 * It compares the first element of an array with the second element.
 * If the first element is greater than the second element then it swaps them.
 * Then it compares the second and third elements and swaps them if the second is larger.
 * Then it compares the third and fourth elements and does the same.
 * This continues and the the larger elements begin to "bubble" towards the end.
 * The loop then restarts and repeats this process until it makes a clean pass
 * without performing any swaps.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * What's the time complexity of your algorithm?  Are there ways you can improve it?
 * Definitely O(n^2), improvements include using a better sorting method, like cocktail sort, where you start from the front, moving bigger stuff up, and then at the end, moving smaller stuff down.
*/

/*
 * Example:
 * bubbleSort([2, 1, 3]); // returns [1, 2, 3]
 *
*/

const bubbleSort = (arr) => {
  let changed = true;
  while(changed){
    let count = 0;
    arr.forEach((number, i) => {
      if (arr[i + 1] === undefined) arr[i] = arr[i];
      if (arr[i] > arr[i + 1]) {
        arr[i + 1] += arr[i];
        arr[i] = arr[i + 1] - arr[i];
        arr[i + 1] -= arr[i];
        count++;
      }
    });
    if (count === 0) changed = false;
  }
  return arr;
};

// const bubbleSort = (arr) => {
//   let changed = true;
//   while(changed){
//     let count = 0;
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i + 1] === undefined) arr[i] = arr[i];
//       if (arr[i] > arr[i + 1]) {
//         arr[i + 1] += arr[i];
//         arr[i] = arr[i + 1] - arr[i];
//         arr[i + 1] -= arr[i];
//         count++;
//       }
//     }
//     if (count === 0) changed = false;
//   }
//   return arr;
// };
