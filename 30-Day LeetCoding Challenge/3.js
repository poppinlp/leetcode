const maxSubArray = nums => {
  let max = nums[0];
  for (let i = 0; i < nums.length; ++i) {
    let cur = 0;
    for (let j = i; i < nums.length; ++j) {
      cur += nums[j];
      cur > max && (max = cur);
    }
  }
  return max;
};

const maxSubArray = nums => {
  let max = cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur += nums[i];
    nums[i] > cur && (cur = nums[i]);
    cur > max && (max = cur);
  }
  return max;
};

const maxSubArray = nums => {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i - 1] > 0 && (nums[i] += nums[i - 1]);
    nums[i] > max && (max = nums[i]);
  }
  return max;
};
