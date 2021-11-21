const removeDuplicates = (nums) => {
  let cur = 1;
  for (let i = 2; i < nums.length; ++i) {
    (nums[i] > nums[cur] || nums[cur] !== nums[cur - 1]) && (nums[++cur] = nums[i]);
  }
  return cur + 1;
};

const removeDuplicates = (nums) => {
  let cur = 0;
  for (const n of nums) {
    (cur < 2 || n > nums[cur - 2]) && (nums[cur++] = n);
  }
  return cur;
};

const removeDuplicates = (nums) => nums.reduce((cur, n) => ((cur < 2 || n > nums[cur - 2]) && (nums[cur++] = n), cur), 0);