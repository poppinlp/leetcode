const serialize = (start, end) => start === end ? `${start}` : `${start}->${end}`;
const summaryRanges = (nums) => {
  const ret = [];
  if (!nums.length) return ret;
  let prev = nums[0], start = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === prev + 1) { prev = nums[i]; continue; }
    ret.push(serialize(start, prev));
    start = nums[i];
    prev = nums[i];
  }
  ret.push(serialize(start, prev));
  return ret;
};
