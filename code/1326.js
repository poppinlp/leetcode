const minTaps = (n, ranges) => {
  const calRanges = ranges.map((range, idx) => [idx - range < 0 ? 0 : idx - range, idx + range > n ? n : idx + range]).sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
  let count = 1;
  let left = nleft = calRanges[0][0];
  let right = nright = calRanges[0][1];
  for (const range of calRanges) {
    if (range[0] === range[1] || range[0] === left || range[0] === nleft) continue;
    if (range[0] <= right) {
      nleft = range[0];
      if (range[1] > nright) { nright = range[1]; }
      continue;
    }
    if (nright < range[0]) return -1;
    left = nleft;
    right = nright;
    nleft = range[0];
    nright = range[1];
    ++count;
  }
  if (right < n && nright < n) return -1;
  return right === n ? count : count + 1;
};


const minTaps = (n, ranges) => {
  const LEN = ranges.length;
  const calRanges = new Uint16Array(LEN);
  for (let i = 0; i < LEN; ++i) {
    const left = i - ranges[i] > 0 ? i - ranges[i] : 0;
    const right = i + ranges[i] < n ? i + ranges[i] : n;
    right > calRanges[left] && (calRanges[left] = right);
  }
  let count = 1;
  let cur = next = calRanges[0];
  for (let i = 1; i < LEN; ++i) {
    if (i > next) return -1;
    if (i > cur) { cur = next; ++count; }
    calRanges[i] > next && (next = calRanges[i]);
  }
  return count;
};


const minTaps = (n, ranges) => {
  for (let i = 0; i < ranges.length; ++i) {
    const left = i - ranges[i] > 0 ? i - ranges[i] : 0;
    const right = i + ranges[i] < n ? i + ranges[i] : n;
    right > ranges[left] && (ranges[left] = right);
  }
  let count = 1;
  let cur = next = ranges[0];
  for (let i = 1; i < ranges.length; ++i) {
    if (i > next) return -1;
    if (i > cur) { cur = next; ++count; }
    ranges[i] > next && (next = ranges[i]);
  }
  return count;
};