const pseudoPalindromicPaths = root => {
  let freq = 0, ret = 0;
  helper(root);
  return ret;

  function helper(node) {
    freq ^= 1 << node.val;
    if (!node.left && !node.right) {
      (freq === 0 || (freq & freq - 1) === 0) && ++ret;
    } else {
      node.left && helper(node.left);
      node.right && helper(node.right);
    }
    freq ^= 1 << node.val;
  }
};

const pseudoPalindromicPaths = (node, freq = 0) => {
  freq ^= 1 << node.val;
  return !node.left && !node.right
    ? +!(freq & (freq - 1))
    : (node.left && pseudoPalindromicPaths(node.left, freq)) + (node.right && pseudoPalindromicPaths(node.right, freq));
};
