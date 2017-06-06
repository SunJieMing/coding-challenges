/*
 * Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
 * Google "directed graph" and look under images for visual examples.
 */

const routeBetweenNodes = (startNode, endNode) => {
  const roadMap = {};
  const queue = [startNode];

  const toPath = (node) => {
    if (roadMap[node.value]) {
      return;
    } else {
      roadMap[node.value] = true;
      node.to.forEach(item => queue.push(item));
    }
  };

  while (queue.length) {
    if (roadMap[endNode.value]) return true;
    toPath(queue.shift());
  }
  return false;
};