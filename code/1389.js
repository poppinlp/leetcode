const createTargetArray = (nums, index) => {
  const ret = [];
  for (let i = 0; i < index.length; ++i) {
    ret.splice(index[i], 0, nums[i]);
  }
  return ret;
};

const createTargetArray = (nums, index) => index.reduce((prev, cur, idx) => (prev.splice(cur, 0, nums[idx]), prev), []);
