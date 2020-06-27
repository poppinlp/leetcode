const singleNumber = (nums) => {
  const set = new Set();
  for (const val of nums) {
    set.has(val) ? set.delete(val) : set.add(val);
  }
  for (const val of set.values()) {
    return val;
  }
};

const singleNumber = (nums) => {
  let ret = 0;
  for (const n of nums) ret ^= n;
  return ret;
};

const singleNumber = (nums) => nums.reduce((prev, cur) => prev ^ cur, 0);
