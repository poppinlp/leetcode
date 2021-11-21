const singleNonDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
};

const singleNonDuplicate = (nums) => nums.reduce((prev, cur) => prev ^ cur, 0);

const singleNonDuplicate = (nums, left = 0, right = nums.length - 1) => {
  const mid = ((left + right) / 2) >> 0;
  if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];
  return (mid & 1) ^ (nums[mid] === nums[mid - 1]) // isOdd ^ isLeft
    ? singleNonDuplicate(nums, left, mid - 1)
    : singleNonDuplicate(nums, mid + 1, right);
};

const singleNonDuplicate = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = ((left + right) / 2) >> 0;
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];
    (mid & 1) ^ (nums[mid] === nums[mid - 1])
      ? (right = mid - 1)
      : (left = mid + 1);
  }
  return left;
};
