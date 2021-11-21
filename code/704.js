const search = (nums, target, left = 0, right = nums.length - 1) => {
  if (left > right) return -1;
  const mid = ((left + right) / 2) >> 0;
  if (nums[mid] === target) return mid;
  return nums[mid] < target ? search(nums, target, mid + 1, right) : search(nums, target, left, mid - 1);
};

const search = (nums, target) => {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = ((left + right) / 2) >> 0;
    if (nums[mid] === target) return mid;
    nums[mid] < target ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;
};