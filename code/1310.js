const xorQueries = (arr, queries) => {
  const ret = new Uint16Array(queries.length);
  for (let i = 0; i < queries.length; ++i) {
    let val = 0;
    for (let j = queries[i][0]; j <= queries[i][1]; ++j) {
      val ^= arr[j];
    }
    ret[i] = val;
  }
  return ret;
};

const xorQueries = (arr, queries) => {
  const ret = new Uint32Array(queries.length);
  const map = new Map();
  const sorted = [...queries].sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  let val = left = right = 0;
  for (let i = 0; i < sorted.length; ++i) {
    const [start, end] = sorted[i];
    while (left < start) val ^= arr[left++];
    while (right <= end) val ^= arr[right++];
    while (right > end + 1) val ^= arr[--right];
    map.set(left + '-' + (right - 1), val);
  }
  for (let i = 0; i < queries.length; ++i) {
    ret[i] = map.get(queries[i][0] + '-' + queries[i][1]);
  }
  return ret;
};

const xorQueries = (arr, queries) => {
  const ret = new Uint32Array(queries.length);
  for (let i = 1; i < arr.length; ++i) {
    arr[i] ^= arr[i - 1];
  }
  for (let i = 0; i < queries.length; ++i) {
    ret[i] = arr[queries[i][1]];
    queries[i][0] !== 0 && (ret[i] = arr[queries[i][0] - 1] ^ ret[i]);
  }
  return ret;
};

console.log(xorQueries([1,3,4,8], [[0,1],[1,2],[0,3],[3,3]]))