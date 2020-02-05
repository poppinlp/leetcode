// union find
const makeConnected = (n, connections) => {
  if (connections.length < n - 1) return -1;
  const DEFAULT = n;
  const connected = new Uint16Array(n).fill(DEFAULT);
  let point = 0;
  let set = 0;
  for (let i = 0; i < connections.length; ++i) {
    const a = connections[i][0];
    const b = connections[i][1];
    const va = connected[a];
    const vb = connected[b];
    if (va === DEFAULT && vb === DEFAULT) {
      connected[a] = a;
      connected[b] = a;
      point += 2;
      ++set;
      continue;
    }
    if (va !== DEFAULT && vb !== DEFAULT) {
      let na = va, nb = vb;
      while (na !== connected[na]) na = connected[na];
      while (nb !== connected[nb]) nb = connected[nb];
      if (na !== nb) { connected[nb] = na; --set; }
      continue;
    }
    va === DEFAULT ? (connected[a] = vb) : (connected[b] = va);
    ++point;
  }
  return n - point + set - 1;
};

const find = (target, union) => {
  while (target !== union[target]) target = union[target];
  return target;
};
const makeConnected = (n, connections) => {
  if (connections.length < n - 1) return -1;
  const connected = new Uint16Array(n);
  let count = 1;
  for (let i = 0; i < n; ++i) connected[i] = i;
  for (const [a, b] of connections) {
    const oa = find(a, connected);
    const ob = find(b, connected);
    if (oa !== ob) { connected[ob] = oa; ++count; }
  }
  return n - count;
};

// DFS
const makeConnected = (n, connections) => {
  if (connections.length < n - 1) return -1;
  const graph = new Map();
  const visited = new Uint8Array(n);
  for (const [a, b] of connections) {
    !graph.has(a) && graph.set(a, []);
    !graph.has(b) && graph.set(b, []);
    graph.get(a).push(b);
    graph.get(b).push(a);
  }
  let count = 0;
  for (let i = 0; i < n; ++i) count += helper(i);
  return count - 1;

  function helper(cur) {
    if (visited[cur]) return 0;
    visited[cur] = 1;
    if (graph.has(cur)) {
      for (const val of graph.get(cur)) helper(val);
    }
    return 1;
  }
};

// BFS
const makeConnected = (n, connections) => {
  if (connections.length < n - 1) return -1;
  const graph = new Map();
  const visited = new Uint8Array(n);
  for (const [a, b] of connections) {
    !graph.has(a) && graph.set(a, []);
    !graph.has(b) && graph.set(b, []);
    graph.get(a).push(b);
    graph.get(b).push(a);
  }
  let count = 0;
  for (let i = 0; i < n; ++i) count += helper(i);
  return count - 1;

  function helper(cur) {
    if (visited[cur]) return 0;
    const queue = [cur];
    for (let idx = 0; idx < queue.length; ++idx) {
      const val = queue[idx];
      visited[val] = 1;
      if (graph.has(val)) {
        for (const next of graph.get(val)) {
          visited[next] === 0 && queue.push(next);
        }
      }
    }
    return 1;
  }
};
