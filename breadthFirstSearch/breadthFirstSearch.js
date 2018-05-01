/*
 * Write a function that accepts a tree data structure and a value to search for.
 * Search for the value using a breadth-first search algorithm.
 * Example:
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`
 */

const breadthFirstSearch = (tree, term) => {
  const queue = Object.keys(tree).map(item => return tree[item]);
  let value;
  while (queue.length) {
    value = queue.shift();
    if (value === term) return true;
    if (typeof value !== 'number') {
      let sub = Object.keys(value);
      let subarr = sub.map(key => sub[key]);
      queue.concat(subarr);
    }
  }
  return false;
};

// const breadthFirstSearch = (obj) => {
//   const deeperArr = [];
//   Object.keys(obj).forEach((key) => {
//     if (Object.keys(obj[key]) !== [])
//     {
//       deeperArr.push
//     } 
//   });
// }
