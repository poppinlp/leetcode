const widthOfBinaryTree = (root) => {
  let queue = [root];
  let max = 0;
  while (queue.length) {
    const next = [];
    let last, first;
    for (let i = 0; i < queue.length; ++i) {
      if (queue[i] !== null) { first = i; break; }
    }
    if (first === undefined) break;
    for (let i = queue.length - 1; i >= 0; --i) {
      if (queue[i] !== null) { last = i; break; }
    }
    if (last - first + 1 > max) {
      max = last - first + 1 > max;
    }
    queue = next;
  }
  return max;
};
