const pathSum = (root, targetSum) => {
  const result = [];
  root && dfs(root, targetSum, []);
  return result;

  function dfs(node, target, curPath) {
    curPath.push(node.val);
    if (!node.left && !node.right) {
      node.val === target && result.push([...curPath]);
    } else {
      node.left && dfs(node.left, target - node.val, curPath);
      node.right && dfs(node.right, target - node.val, curPath);
    }
    curPath.pop();
  }
};
