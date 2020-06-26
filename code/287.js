const findDuplicate = (nums) => {
  for (let i = 0; i < nums.length; ++i) {
    const idx = nums.indexOf(nums[i]);
    if (idx !== -1 && idx !== i) return nums[i];
  }
};

const findDuplicate = (nums) => {
  nums.sort();
  for (let i = 0; i < nums.length - 1; ++i) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }
};

const findDuplicate = (nums) => {
  let slow = 0, fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
