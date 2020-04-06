const moveZeroes = nums => {
  let idx = 0;
  for (let i = 0; i < nums.length; ++i) {
    nums[i] !== 0 && (nums[idx++] = nums[i]);
  }
  while (idx < nums.length) nums[idx++] = 0;
};

const moveZeroes = nums => {
  for (let i = 0, zero = 0; i < nums.length; ++i) {
    if (nums[zero] === 0 && nums[i] !== 0) {
      nums[zero] = nums[i];
      nums[i] = 0;
    }
    nums[zero] !== 0 && ++zero;
  }
};
