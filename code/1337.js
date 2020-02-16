const kWeakestRows = (mat, k) => {
  const m = mat.length;
  const n = mat[0].length;
  const ret = [];
  for (let i = 0; i < m; ++i) {
    let cur = 0;
    for (let j = 0; j < n; ++j, ++cur) {
      if (mat[i][j] === 0) break;
    }
    ret.push([cur, i]);
  }
  return ret
    .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    .slice(0, k)
    .map(item => item[1]);
};

const kWeakestRows = (mat, k) => {
  const m = mat.length;
  const n = mat[0].length;
  const rows = [];
  const ret = new Uint8Array(k);

  for (let i = 0; i < m; ++i) {
    rows.push([search(mat[i], 0, n), i]);
  }
  rows.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  for (let i = 0; i < k; ++i) {
    ret[i] = rows[i][1];
  }
  return ret;

  function search(arr, left, right) {
    if (left === right) return left;
    const mid = Math.floor((left + right) / 2);
    return arr[mid] === 0 ? search(arr, left, mid) : search(arr, mid + 1, right);
  }
};

const kWeakestRows = (mat, k) => {
  const m = mat.length;
  const n = mat[0].length;
  const ret = new Uint8Array(k);
  const visited = new Uint8Array(m);
  let idx = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (visited[j] === 0 && mat[j][i] === 0) {
        ret[idx] = j;
        visited[j] = 1;
        if (++idx === k) return ret;
      }
    }
  }
  for (let i = 0; i < m; ++i) {
    if (visited[i] === 0) {
      ret[idx] = i;
      if (++idx === k) return ret;
    }
  }
};
