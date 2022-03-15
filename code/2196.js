const createBinaryTree = (descriptions) => {
  const headSet = new Set();
  const map = {};
  for (const [parent, child, isLeft] of descriptions) {
    !map[parent] && (map[parent] = new TreeNode(parent));
    !map[child] && (map[child] = new TreeNode(child));
    map[parent][isLeft ? "left" : "right"] = map[child];
    headSet.add(parent);
  }
  for (const desc of descriptions) {
    headSet.delete(desc[1]);
  }
  return map[Array.from(headSet)[0]];
};
