const sumOfLeftLeaves = (node, isLeft = false) => {
  if (!node) return 0;
  if (!node.left && !node.right) return isLeft ? node.val : 0;
  return sumOfLeftLeaves(node.left, true) + sumOfLeftLeaves(node.right, false);
};

const sumOfLeftLeaves = (root) => {
  let queue = [null, root];
  let sum = 0;
  while (queue.length) {
    const next = [];
    for (let i = 0; i < queue.length; ++i) {
      const node = queue[i];
      if (!node) continue;
      !node.left && !node.right
        ? (i & 1) === 0 && (sum += node.val)
        : next.push(node.left, node.right);
    }
    queue = next;
  }
  return sum;
};