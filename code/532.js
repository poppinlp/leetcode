const findPairs = (nums, k) => {
  const map = {};
  const visited = new Set();
  let ret = 0;
  for (num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  for (num of nums) {
    if (k === 0) {
      check(num, num, 1) && ++ret;
    } else {
      check(num, num + k) && ++ret;
      check(num, num - k) && ++ret;
    }
  }
  return ret;

  function check(n, t, count = 0) {
    const k1 = `${n}-${t}`;
    if (visited.has(k1) || map[t] === undefined || map[t] <= count) return false;
    visited.add(k1);
    visited.add(`${t}-${n}`);
    return true;
  }
};
