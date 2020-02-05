const removeLeafNodes = (node, target) => {
  node.left && (node.left = removeLeafNodes(node.left, target));
  node.right && (node.right = removeLeafNodes(node.right, target));
  return node.left === node.right && node.val === target ? null : node;
};

const removeLeafNodes = (node, target) => (node.left && (node.left = removeLeafNodes(node.left, target)), node.right && (node.right = removeLeafNodes(node.right, target)), node.left === node.right && node.val === target ? null : node);
