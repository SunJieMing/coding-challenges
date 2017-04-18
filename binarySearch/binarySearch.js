/*
 * Given a sorted array, find the index of the specified element
 * using binary search.
 *
 * */

/**
 *  * const index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
 *  * console.log(index); // 1
**/

const binarySearch = (nums, target) {
  const mid = Math.floor(nums.length / 2);
  const max = nums.length - 1;
  if (nums[mid] === target) return mid;
  if (nums[mid] > target && nums.length > 1) return (mid - binarySearch(nums.splice(0, mid), target));
  if (nums[mid] < target && nums.length > 1) return (mid + binarySearch(nums.splice(mid, max), target));
  return -1;
};
