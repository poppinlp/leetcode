// BFS
const isCousins = (root, x, y) => {
  let curLevelNodes = [root];
  let curLevelValues = { [root.val]: -1 };
  while (true) {
    if (curLevelValues[x] && curLevelValues[y] && curLevelValues[x] !== curLevelValues[y]) return true;
    if (curLevelValues[x] || curLevelValues[y]) return false;
    const nextNodes = [];
    const nextValues = {};
    curLevelNodes.forEach(node => {
      node.left && nextNodes.push(node.left) && (nextValues[node.left.val] = node.val);
      node.right && nextNodes.push(node.right) && (nextValues[node.right.val] = node.val);
    });
    curLevelNodes = nextNodes;
    curLevelValues = nextValues;
  }
  return false;
};

// DFS
const findParentAndDepth = (curNode, value, curDepth = 0, parentValue) => {
  if (!curNode) return;
  if (curNode.val === value) return [curDepth, parentValue];
  return findParentAndDepth(curNode.left, value, curDepth + 1, curNode.val) || findParentAndDepth(curNode.right, value, curDepth + 1, curNode.val);
};
const isCousins = (root, x, y) => {
  const [xDepth, xParent] = findParentAndDepth(root, x);
  const [yDepth, yParent] = findParentAndDepth(root, y);
  return xDepth === yDepth && xParent !== yParent;
};