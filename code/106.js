const buildTree = (inorder, postorder) => {
  let cur = postorder.length - 1;
  return helper(0, inorder.length - 1);

  function helper(left, right) {
    if (cur < 0 || left > right) return null;
    const node = new TreeNode(postorder[cur]);
    const idx = inorder.indexOf(postorder[cur]);
    node.right = idx === right ? null : (--cur, helper(idx + 1, right));
    node.left = idx === left ? null : (--cur, helper(left, idx - 1));
    return node;
  }
};