const minElements = (nums, limit, goal) => {
  let diff = goal;
  for (let i = 0; i < nums.length; ++i) {
    diff -= nums[i];
  }
  return Math.ceil(Math.abs(diff) / limit);
};

const minElements = (nums, limit, goal) => Math.ceil(Math.abs(nums.reduce((prev, cur) => prev - cur, goal) / limit));