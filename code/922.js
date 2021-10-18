const sortArrayByParityII = (nums) => {
  for (let i = 0; i < nums.length; ++i) {
    if ((i & 1) === (nums[i] & 1)) continue;
    for (let j = i + 1; j < nums.length; ++j) {

    }
  }
  return nums;
};
