const isPossibleDivide = (nums, k) => {
  if (nums.length % k !== 0) return false;
  const map = new Map();
  nums.sort((a, b) => a - b);
  for (const val of nums) {
    map.set(val, map.has(val) ? map.get(val) + 1 : 1);
  }
  for (let i = 0; i < nums.length; ++i) {
    const start = nums[i];
    const count = map.get(start);
    if (count === 0) continue;
    for (let i = 1; i < k; ++i) {
      const c = map.get(start + i)
      if (c === undefined || c < count) return false;
      map.set(start + i, c - count);
    }
    map.set(start, 0);
  }
  return true;
};

const isPossibleDivide = (nums, k) => {
  if (nums.length % k !== 0) return false;
  const map = new Map();
  for (const val of nums) {
    map.set(val, map.has(val) ? map.get(val) + 1 : 1);
  }
  for (let start of nums) {
    if (map.get(start) === 0) continue;
    while (map.get(--start) > 0);
    ++start;
    const count = map.get(start);
    for (let i = 1; i < k; ++i) {
      const c = map.get(start + i)
      if (c === undefined || c < count) return false;
      map.set(start + i, c - count);
    }
    map.set(start, 0);
  }
  return true;
};