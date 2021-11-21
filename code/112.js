const hasPathSum = (node, target) => {
  if (!node) return false;
  if (!node.left && !node.right) return target === node.val;
  return (
    hasPathSum(node.left, target - node.val) ||
    hasPathSum(node.right, target - node.val)
  );
};

const hasPathSum = (node, target) => !!node && (!node.left && !node.right ? target === node.val : hasPathSum(node.left, target - node.val) || hasPathSum(node.right, target - node.val));
