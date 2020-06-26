const maxArea = (h, w, horizontalCuts, verticalCuts) => {
  const MOD = 10 ** 9 + 7;
  const hrange = new Uint8Array(h + 1);
  const wrange = new Uint8Array(w + 1);

  hrange[h] = 1;
  for (const val of horizontalCuts) {
    hrange[val] = 1;
  }
  wrange[w] = 1;
  for (const val of verticalCuts) {
    wrange[val] = 1;
  }

  const hset = new Set();
  for (let prev = 0, i = 1; i < h + 1; ++i) {
    if (hrange[i] !== 0) {
        hset.add(hrange[i] - prev);
        prev = hrange[i];
    }
  }

  const heights = Array.from(hset);
  let max = 0;
  for (let prev = 0, i = 1; i < w + 1; ++i) {
    if (wrange[i] === 0) continue;
    const width = wrange[i] - prev;
    for (const height of heights) {
      max = Math.max(width * height % MOD, max);
    }
    prev = wrange[i];
  }
  return max;
};

console.log(maxArea(
  5,4,[1,2,4],[1,3]
))
