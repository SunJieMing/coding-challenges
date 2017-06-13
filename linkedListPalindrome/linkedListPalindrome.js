/*
 * Implement a function to check if a linked list is a palindrome.
 */

const linkedListPalindrome = (node) => {
  const arr = [];
  let cur = node.head;
  while (cur.next) {
    arr.push(cur.value);
    cur = cur.next;
  }
  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) return false;
  }
  return true;
};