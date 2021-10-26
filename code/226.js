const invertTree = (root) => {
  if (!root) return null;
  let cur = [root];
  while (cur.length) {
    const next = [];
    for (const node of cur) {
      node.left && next.push(node.left);
      node.right && next.push(node.right);
      [node.left, node.right] = [node.right, node.left];
    }
    cur = next;
  }
  return root;
};

const invertTree = (node) => {
  if (!node) return null;
  [node.left, node.right] = [node.right, node.left];
  invertTree(node.left);
  invertTree(node.right);
  return node;
};

const invertTree = (node) => node ? ([node.left, node.right] = [invertTree(node.right), invertTree(node.left)], node) : null;