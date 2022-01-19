const getTotalValue = (node, val = 0) => {
  if (!node) return 0;
  return val + node.val + getTotalValue(node.left, val) + getTotalValue(node.right, val);
};
const findTilt = (node) => {
  if (!node) return 0;
  return Math.abs(getTotalValue(node.left) - getTotalValue(node.right)) + findTilt(node.left) + findTilt(node.right);
};