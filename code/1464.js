const maxProduct = nums => {
  let m1 = 0, m2 = 0;
  for (const val of nums) {
    m2 = Math.max(m2, Math.min(m1, val));
    m1 = Math.max(m1, val);
  }
  return (m1 - 1) * (m2 - 1);
};

const maxProduct = nums => {
  let max = 0;
  for (let i = 0, j = nums.length - 1; i < j;) {
    max = Math.max(max, (nums[i] - 1) * (nums[j] - 1));
    nums[i] < nums[j] ? ++i : --j;
  }
  return max;
};

const maxProduct = (nums, max = nums.reduce((prev, val) => [
  Math.max(prev[1], Math.min(prev[0], val)),
  Math.max(prev[0], val)
], [0, 0])) => (max[0] - 1) * (max[1] - 1);
