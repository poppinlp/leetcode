// map
const mostFrequent = (nums, key) => {
  const freq = {};
  let ret = 0;
  for (let i = 0, max = 0; i < nums.length - 1; ++i) {
    if (nums[i] !== key) continue;
    const target = nums[i + 1];
    freq[target] = (freq[target] || 0) + 1;
    if (freq[target] > max) {
      max = freq[target];
      ret = target;
    }
  }
  return ret;
};

// array
const mostFrequent = (nums, key) => {
  const freq = new Uint16Array(1001);
  let ret = 0;
  for (let i = 0, max = 0; i < nums.length - 1; ++i) {
    const target = nums[i + 1];
    nums[i] === key && ++freq[target] > max && ((max = freq[target]), (ret = target));
  }
  return ret;
};
