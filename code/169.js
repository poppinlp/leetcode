const majorityElement = (nums, mid = nums.length >> 1) => nums.sort()[mid];

const majorityElement = (nums, half = nums.length >> 1) => {
  const freq = {};
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > half) return num;
  }
};

const majorityElement = (nums) => {
  let count = 0;
  let ret;
  for (const num of nums) {
    if (count === 0) ret = num;
    count += num === ret ? 1 : -1;
  }
  return ret;
};
