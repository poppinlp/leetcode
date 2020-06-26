const decompressRLElist = nums => {
  const ret = [];
  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; ++j) {
      ret.push(nums[i + 1]);
    }
  }
  return ret;
};