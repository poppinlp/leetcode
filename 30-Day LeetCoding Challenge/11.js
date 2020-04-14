const diameterOfBinaryTree = root => {
  const cache = new Map();
  let max = 0;
  dfs(root);
  return max;

  function dfs(node) {
    if (!node) return 0;
    if (cache.has(node)) return cache.get(node);
    const r = dfs(node.right);
    const l = dfs(node.left);
    if (max < r + l) max = r + l;
    cache.set(node, Math.max(r, l) + 1);
    return Math.max(r, l) + 1;
  }
};
