const removeDuplicates = (nums) => {
  let cur = 0;
  for (const n of nums) {
    n > nums[cur] && (nums[++cur] = n);
  }
  return cur + 1;
};