const sortColors = (nums) => nums.sort();

const sortColors = (nums, left = 0, right = nums.length - 1) => {
  if (right - left < 1) return;
  let l = left, r = right;
  while (l <= r) {
    if (nums[l] < nums[left]) { ++l; continue; }
    if (nums[r] >= nums[left]) { --r; continue; }
    [nums[l], nums[r]] = [nums[r], nums[l]];
  }
  sortColors(nums, left, l - 1);
  sortColors(nums, l + 1, right);
};

const sortValue = (nums, pivot, value, right = nums.length - 1) => {
  while (pivot <= right) {
    if (nums[pivot] === value) { ++pivot; continue; }
    if (nums[right] !== value) { --right; continue; }
    [nums[pivot], nums[right]] = [nums[right], nums[pivot]];
  }
  return pivot;
};
const sortColors = (nums, pivot = 0) => {
  pivot = sortValue(nums, pivot, 0);
  sortValue(nums, pivot, 1);
  return nums;
};

