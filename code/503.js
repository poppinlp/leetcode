const nextGreaterElements = (nums) => {
  const result = [];
  nums = nums.concat(nums);
  for (let i = 0; i < nums.length / 2; ++i) {
    let flag = false;
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[j] <= nums[i]) continue;
      result.push(nums[j]);
      flag = true;
      break;
    }
    !flag && result.push(-1);
  }
  return result;
}
