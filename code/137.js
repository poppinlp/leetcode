const singleNumber = (nums) => {
  const set = new Set();
  let allSum = 0, curSum = 0;
  for (const val of nums) {
    if (!set.has(val)) {
      allSum += val;
      set.add(val);
    }
    curSum += val;
  }
  return (allSum * 3 - curSum) / 2;
};


const singleNumber = (nums) => {
  let sum = 0;
  for (const val of nums) {
    sum += val;
  }
  for (const val of nums) {
    sum -= val / 3;
  }
  return sum / 2;
};
