const nums = [10, 30, 5, 1, 99, 4, 9104, 32, 0, -4, 23, 0.45];

const bubbleSort = (arr) => {
  let swappedValue;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const sortedArray = bubbleSort(nums);
console.log(sortedArray);
