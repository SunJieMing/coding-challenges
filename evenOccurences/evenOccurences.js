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
  // Your code here.
  let arr2 = []
  for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
    let k = 0;
    for (let j = arr.length - 1; j >= 0; j--) {
    	if (arr[j] === arr[i]) k++;
    }
    if(k%2===0) return(arr[i]);
  }
//   console.log('null');
  return(null);
};  
