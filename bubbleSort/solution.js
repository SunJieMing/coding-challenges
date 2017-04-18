const nums = [10, 30, 5, 1, 99, 4, 9104, 32, 0, -4, 23, 0.45];

const bubbleSort = (arr) => {
  let swappedValue;
  do {
    swappedValue = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swappedValue = true;
      }
    }
  } while (swappedValue);
  return arr;
}

const sortedArray = bubbleSort(nums);
console.log(sortedArray);
