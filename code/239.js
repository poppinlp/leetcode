/*
const maxSlidingWindow = (nums, k) => {
  const len = nums.length - k + 1;
  const ret = new Int16Array(len);
  for (let i = 0; i < len; ++i) {
    let max = nums[i];
    for (let j = 1; j < k; ++j) {
      nums[i + j] > max && (max = nums[i + j]);
    }
    ret[i] = max;
  }
  return ret;
};
*/

/*
const maxSlidingWindow = (nums, k) => {
  const limit = k - 1;
  const stack = [];
  const ret = new Int16Array(nums.length - limit);
  for (let i = 0, bottom = 0, top = -1; i < nums.length; ++i) {
    while (top >= bottom && stack[top] < nums[i]) --top;
    stack[++top] = nums[i];
    if (i >= limit) {
      ret[i - limit] = stack[bottom];
      nums[i - limit] === stack[bottom] && ++bottom;
    }
  }
  return ret;
};
*/

const maxSlidingWindow = (nums, k) => {
};

console.log(maxSlidingWindow([9,10,9,-7,-4,-8,2,-6], 5))
