const minimalKSum = (nums, k) => {
  const set = new Set(nums);
  let sum = (1 + k) * k / 2;
  let more = 0;
  nums = Array.from(set)
  for (const n of nums) {
    n <= k && (++more, sum -= n);
  }
  while (more > 0) {
    !set.has(++k) && (sum += k, --more);
  }
  return sum;
};
