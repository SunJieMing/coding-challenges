/*
 * Implement a function to check if a binary tree is a binary search tree.
 * Assume that each node of the tree has an integer as its value.
 * In order for a binary tree to be qualified as a BST it must store all
 * values in sorted order.
 *
 */

const validateBST = (node) => {
  let left = false;
  let right = false;
  if (node.left) {
    left = ((node.left.value < node.value) && validateBST(node.left));
  } else {
    left = true;
  }
  if (node.right) {
    right = ((node.right.value > node.value) && validateBST(node.right));
  } else {
    right = true;
  }
  return (left && right);
};