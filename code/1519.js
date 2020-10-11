const countSubTrees = (n, edges, labels) => {
  const graph = Array.from({ length: n }, () => new Int16Array(n));
  const ret = new Int16Array(n);
  for (const edge of edges) {
    edge[0] < edge[1] ? (graph[edge[0]][edge[1]] = 1) : (graph[edge[1]][edge[0]] = 1);
  }
  for (let i = n - 1; i >= 0; --i) {
    for (let j = 0; j < n; ++j) {
      ret[i] += ret[graph[i][j]];
    }
    ++ret[i];
  }
  return ret;
};