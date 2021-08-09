const heightChecker = (heights) => {
  const sorted = [...heights].sort((a, b) => a - b);
  let ret = 0;
  for (let i = 0; i < heights.length; ++i) {
    heights[i] !== sorted[i] && ++ret;
  }
  return ret;
};

const heightChecker = (heights, sorted = [...heights].sort((a, b) => a - b)) =>
  heights.reduce(
    (prev, cur, idx) => (cur === sorted[idx] ? prev : prev + 1),
    0
  );

const heightChecker = (heights) => {
  const sorted = new Uint8Array(101);
  let ret = 0;
  for (let i = 0; i < heights.length; ++i) {
    ++sorted[heights[i]];
  }
  for (let i = 0, j = 1; i < heights.length; ++j) {
    while (sorted[j]--) heights[i++] !== j && ++ret;
  }
  return ret;
};