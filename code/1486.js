const xorOperation = (n, start) => {
  let ret = start;
  for (let i = 1; i < n; ++i) {
    ret ^= start + 2 * i;
  }
  return ret;
};
