const countElements = (arr) => {
  const counts = new Uint8Array(1001);
  let ret = 0;
  for (const val of arr) counts[val] = 1;
  for (const val of arr) counts[val + 1] && ++ret;
  return ret;
};

const countElements = (arr) => {
  const counts = new Uint16Array(1001);
  const MAGIC = 2000;
  let ret = 0;
  for (const val of arr) {
    if (counts[val - 1] && counts[val - 1] !== MAGIC) {
      ret += counts[val - 1];
      counts[val - 1] = MAGIC;
    }
    counts[val + 1] ? (++ret, (counts[val] = MAGIC)) : ++counts[val];
  }
  return ret;
};

const countElements = (arr) => {
  const counts = new Uint16Array(1001);
  let ret = 0;
  for (const val of arr) {
    counts[val - 1] && !counts[val] && (ret += counts[val - 1]);
    counts[val + 1] && ++ret;
    ++counts[val];
  }
  return ret;
};
