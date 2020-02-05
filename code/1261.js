class FindElements {
  constructor(root) {
    this.set = new Set();
    this.dfs(root, 0);
  }
  dfs(node, val) {
    this.set.add(val);
    node.left && this.dfs(node.left, val * 2 + 1);
    node.right && this.dfs(node.right, val * 2 + 2);
  }
  find(target) {
    return this.set.has(target);
  }
}
