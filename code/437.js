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

// from save path to counting
const pathSum = (root, targetSum) => {
  let result = 0;
  root && dfs(root, targetSum, []);
  return result;

  function dfs(node, target, curPath) {
    curPath.push(node.val);
    if (!node.left && !node.right) {
      node.val === target && ++result;
    } else {
      node.left && dfs(node.left, target - node.val, curPath);
      node.right && dfs(node.right, target - node.val, curPath);
    }
    curPath.pop();
  }
};

// from leaf to every node
const pathSum = (root, targetSum) => {
  let result = 0;
  root && dfs(root, targetSum, []);
  return result;

  function dfs(node, target, curPath) {
    curPath.push(node.val);
    if (!node.left && !node.right) {
      node.val === target && ++result;
    } else {
      node.left && dfs(node.left, target - node.val, curPath);
      node.right && dfs(node.right, target - node.val, curPath);
    }
    curPath.pop();
  }
};
