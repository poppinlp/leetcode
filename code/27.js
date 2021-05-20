const removeElement = (nums, val) => {
  let cur = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === val) continue;
    nums[cur++] = nums[i];
  }
  return cur;
};