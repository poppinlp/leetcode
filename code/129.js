const sumNumbers = root => {
  let sum = 0;
  root && dfs(root, 0);
  return sum;

  function dfs(node, cur) {
    cur = cur * 10 + node.val;
    if (!node.left && !node.right) { sum += cur; return; }
    node.left && dfs(node.left, cur);
    node.right && dfs(node.right, cur);
  }
};

const sumNumbers = (node, cur = 0) => {
  if (!node) return cur;
  cur = cur * 10 + node.val;
  if (!node.left && !node.right) return cur;
  return (node.left ? sumNumbers(node.left, cur) : 0) + (node.right ? sumNumbers(node.right, cur) : 0);
};
