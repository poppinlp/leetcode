// traverse + math
const getTotalCounts = len => (1 + len) * len / 2;
const numberOfArithmeticSlices = (nums) => {
  let ret = 0;
  let curLen = 0;

  for (let i = 2, prev = nums[1] - nums[0]; i < nums.length; ++i) {
    const diff = nums[i] - nums[i - 1];
    if (diff === prev) { ++curLen; continue; }
    ret += getTotalCounts(curLen);
    prev = diff;
    curLen = 0;
  }

  return ret + getTotalCounts(curLen);
};

// dp
const numberOfArithmeticSlices = (nums) => {
  let ret = 0;
  for (let i = 2, prev = nums[1] - nums[0], curCount = 0; i < nums.length; ++i) {
    const diff = nums[i] - nums[i - 1];
    diff === prev ? (ret += ++curCount) : (prev = diff, curCount = 0);
  }
  return ret;
};