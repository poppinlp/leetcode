const findNumbers = nums => {
  let ret = 0;
  for (let i = 0; i < nums.length; ++i) {
    const val = nums[i];
    ((val > 9 && val < 100) || (val > 999 && val < 10000)) && ++ret;
  }
  return ret;
};

const findNumbers = nums => {
  let ret = 0;
  for (let i = 0; i < nums.length; ++i) {
    (nums[i].toString().length & 1) === 0 && ++ret;
  }
  return ret;
};

const findNumbers = nums => {
  let ret = 0;
  for (let i = 0; i < nums.length; ++i) {
    let len = 0;
    for (let val = nums[i]; val > 0; ++len) {
      val = val / 10 >> 0;
    }
    (len & 1) === 0 && ++ret;
  }
  return ret;
};