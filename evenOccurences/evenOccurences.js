/*
 *  * Find the first item that occurs an even number of times in an array.
 *   * Remember to handle multiple even-occurance items and return the first one.
 *    * Return null if there are no even-occurance items.
 *    */

/*
 *  * example usage:
 *   * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 *    * console.log(onlyEven); //  4
 *    */

const evenOccurence = (arr) => {
  for ( i = 0; i < arr.length; i++){
    for ( j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
};

const onlyEven = evenOccurence([1, 3, 3, 5 ]);
console.log(onlyEven);
