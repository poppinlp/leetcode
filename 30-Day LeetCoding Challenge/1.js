const singleNumber = nums => {
  const arr = [];
  for (const n of nums) {
    const idx = arr.indexOf(n);
    idx === -1 ? arr.push(n) : arr.splice(idx, 1);
  }
  return arr.pop();
};

const singleNumber = nums => {
  const set = new Set();
  for (const n of nums) {
    set.has(n) ? set.delete(n) : set.add(n);
  }
  for (const x of set.keys()) return x;
};

const singleNumber = nums => {
  let ret = 0;
  for (const n of nums) ret ^= n;
  return ret;
};

const singleNumber = nums => nums.reduce((prev, cur) => prev ^ cur, 0);