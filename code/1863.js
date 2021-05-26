const subsetXORSum = (nums, value = 0, idx = 0) => {
  if (idx === nums.length) return value;
  return subsetXORSum(nums, value, idx + 1) + subsetXORSum(nums, value ^ nums[idx], idx + 1);
};

const subsetXORSum = (nums) => {
  let sum = 0;
  for (const num of nums) {
    sum |= num;
  }
  return sum * Math.pow(2, nums.length - 1);
};

const subsetXORSum = (nums) => Math.pow(2, nums.length - 1) * nums.reduce((prev, cur) => prev | cur, 0);