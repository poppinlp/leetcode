const arrayPairSum = (nums) => {
  let sum = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};

const arrayPairSum = (nums) => {
  const LIMIT = 10 ** 4;
  const buckets = new Uint16Array(LIMIT * 2 + 1);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    ++buckets[nums[i] + LIMIT];
  }
  for (let i = 0, j = true; i < buckets.length;) {
    if (buckets[i] === 0) {
      ++i;
      continue;
    }
    j && (sum += i - LIMIT);
    j = !j;
    --buckets[i];
 }
  return sum;
};
