const findMin = (nums) => {
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] < nums[i - 1]) return nums[i];
  }
  return nums[0];
};

const findMin = (nums, left = 0, right = nums.length - 1) => {
  if (left === right) return nums[left];
  const mid = (right + left) >> 1;
  return nums[mid] > nums[right] ? findMin(nums, mid + 1, right) : findMin(nums, left, mid);
};
