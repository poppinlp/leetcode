const runningSum = nums => {
  const LEN = nums.length;
  const ret = new Int32Array(LEN);
  ret[0] = nums[0];
  for (let i = 1; i < LEN; ++i) {
    ret[i] = ret[i - 1] + nums[i];
  }
  return ret;
};

const runningSum = nums => {
  for (let i = 1; i < nums.length; ++i) {
    nums[i] += nums[i - 1];
  }
  return nums;
};
