// BFS
const getAncestors = (n, edges) => {
  const indegrees = new Uint16Array(n);
  const inEdges = Array.from({ length: n }, () => new Set());
  const outEdges = Array.from({ length: n }, () => []);
  let curLevel = [];
  for (const [from, to] of edges) {
    ++indegrees[to];
    inEdges[to].add(from);
    outEdges[from].push(to);
  }
  for (let i = 0; i < n; ++i) {
    indegrees[i] === 0 && curLevel.push(i);
  }
  while (curLevel.length) {
    const next = [];
    for (const i of curLevel) {
      for (const out of outEdges[i]) {
        --indegrees[out] === 0 && next.push(out);
        for (const edge of inEdges[i]) {
          inEdges[out].add(edge);
        }
      }
    }
    curLevel = next;
  }
  return inEdges.map(set => Array.from(set).sort((a, b) => a - b));
};

// DFS - bottom top
const dfs = (inEdges, idx, finished) => {
  if (finished[idx]) return;
  if (inEdges[idx].size === 0) return;
  for (const edge of inEdges[idx]) {
    dfs(inEdges, edge, finished);
    inEdges[idx] = new Set([...inEdges[idx], ...inEdges[edge]]);
  }
  finished[idx] = 1;
};
const getAncestors = (n, edges) => {
  const inEdges = Array.from({ length: n }, () => new Set());
  const outdegrees = new Uint16Array(n);
  const finished = new Uint8Array(n);
  for (const [from, to] of edges) {
    inEdges[to].add(from);
    ++outdegrees[from];
  }
  for (let i = 0; i < n; ++i) {
    outdegrees[i] == 0 && dfs(inEdges, i, finished);
  }
  return inEdges.map(set => Array.from(set).sort((a, b) => a - b));
};

// DFS - top bottom
const dfs = (inEdges, outEdges, originValue, curValue, finished) => {
  if (finished[curValue]) return;
  finished[curValue] = 1;
  for (const out of outEdges[curValue]) {
    inEdges[out].add(originValue);
    dfs(inEdges, outEdges, originValue, out, finished);
  }
};
const getAncestors = (n, edges) => {
  const inEdges = Array.from({ length: n }, () => new Set());
  const outEdges = Array.from({ length: n }, () => []);
  for (const [from, to] of edges) {
    inEdges[to].add(from);
    outEdges[from].push(to);
  }
  for (let i = 0; i < n; ++i) {
    dfs(inEdges, outEdges, i, i, new Uint8Array(n));
  }
  return inEdges.map(set => Array.from(set).sort((a, b) => a - b));
};
