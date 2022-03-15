const countDivisible = (nums, k) => {
  if (nums.length < 2) return 0;
  let ret = 0;
  for (let i = 0; i < nums.length - 1; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      nums[i] * nums[j] % k === 0 && ++ret;
    }
  }
  return ret;
};
const countPairs = (nums, k) => {
  const same = {};
  let ret = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (!same[nums[i]]) same[nums[i]] = [];
    same[nums[i]].push(i);
  }
  for (const key of Object.keys(same)) {
    ret += countDivisible(same[key], k);
  }
  return ret;
};
