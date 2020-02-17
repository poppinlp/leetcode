const maxProduct = root => {
  let sum = max = 0;
  sum = helper(root);
  helper(root);
  return max % (10 ** 9 + 7);

  function helper(node) {
    const subSum = node.val + (node.left ? helper(node.left) : 0) + (node.right ? helper(node.right) : 0);
    sum && subSum * (sum - subSum) > max && (max = subSum * (sum - subSum));
    return subSum;
  }
};

const maxProduct = root => {
  const subSums = new Uint32Array(50000);
  let max = idx = 0;
  const sum = helper(root);
  for (let i = 0; i < idx; ++i) {
    const val = subSums[i];
    val * (sum - val) > max && (max = val * (sum - val));
  }
  return max % (10 ** 9 + 7);

  function helper(node) {
    const subSum = node.val + (node.left ? helper(node.left) : 0) + (node.right ? helper(node.right) : 0);
    subSums[idx++] = subSum;
    return subSum;
  }
};