const shuffle = (nums, n) => {
  const ret = new Uint16Array(2 * n);
  for (let i = 0, j = n; j < 2 * n; ++j, ++i) {
    ret[i * 2] = nums[i];
    ret[i * 2 + 1] = nums[j];
  }
  return ret;
};

const shuffle = (nums, n) => {
  for (let i = 0, j = nums.length / 2; j < nums.length; ++j, ++i) {
    nums[i * 2] = nums[i];
    nums[i * 2 + 1] = nums[j];
  }
  return nums;
};
