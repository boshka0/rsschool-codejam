module.exports = function breadthFirstRecursive(tree = {}, queue = null, acc = []) {
  if (tree === null || !tree.value) return [];
  let newQueue = queue;
  if (!newQueue) {
    newQueue = [tree];
    acc.push(newQueue.map(val => val.value));
  }
  if (newQueue.length === 0) return acc;
  newQueue = [].concat(...newQueue.map(curr => [curr.left, curr.right].filter(item => item)));
  if (newQueue.length) acc.push(newQueue.map(item => item.value));
  return breadthFirstRecursive(tree, newQueue, acc);
};
