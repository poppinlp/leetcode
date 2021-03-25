// solution 1
const SWAP = (a, b) => b - a;
const advantageCount = (a, B) => {
  const LEN = a.length;
  const ret = new Uint32Array(LEN);
  const b = [...B];
  const map = {};
  b.sort(SWAP);
  a.sort(SWAP);
  for (let i = 0, left = 0, right = LEN - 1; i < LEN; ++i) {
    const value = a[left] > b[i] ? a[left++] : a[right--];
    map[b[i]] ? map[b[i]].push(value) : (map[b[i]] = [value]);
  }
  for (let i = 0; i < B.length; ++i) {
    ret[i] = map[B[i]].pop();
  }
  return ret;
};

// solution 2
const advantageCount = (a, B) => {
  const LEN = a.length;
  const b = B.map((val, idx) => [val, idx]);
  const ret = new Uint32Array(LEN);
  a.sort((a, b) => b - a);
  b.sort((a, b) => b[0] - a[0]);
  for (let i = 0, left = 0, right = LEN - 1; i < LEN; ++i) {
    const value = a[left] > b[i][0] ? a[left++] : a[right--];
    ret[b[i][1]] = value;
  }
  return ret;
};

// solution 3
const advantageCount = (a, B) => {
  const LEN = a.length;
  const b = B.map((val, idx) => idx);
  const ret = new Uint32Array(LEN);
  a.sort((a, b) => b - a);
  b.sort((i, j) => B[j] - B[i]);
  for (let i = 0, left = 0, right = LEN - 1; i < LEN; ++i) {
    const value = a[left] > B[b[i]] ? a[left++] : a[right--];
    ret[b[i]] = value;
  }
  return ret;
};