const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};

const searchInsert = (nums, target, left = 0, right = nums.length) => {
  if (left === right) return left;
  const mid = Math.floor((right + left) / 2);
  if (nums[mid] === target) return mid;
  return nums[mid] > target
    ? searchInsert(nums, target, left, mid)
    : searchInsert(nums, target, mid + 1, right);
};
