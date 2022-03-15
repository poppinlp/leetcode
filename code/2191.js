// base
const getRealValue = (mapping, value) => +(('' + value).split('').map(v => mapping[v]).join(''));
const sortJumbled = (mapping, nums) => nums.sort((a, b) => getRealValue(mapping, a) - getRealValue(mapping, b));

// optimized with cache
const getRealValue = (mapping, value) => +(('' + value).split('').map(v => mapping[v]).join(''));
const sortJumbled = (mapping, nums) => {
  const cache = {};
  for (const num of nums) {
    cache[num] = getRealValue(mapping, num);
  }
  return nums.sort((a, b) => cache[a] - cache[b]);
};

// optimized with better mapping function
const getRealValue = (mapping, value) => {
  if (value === 0) return mapping[0];
  let realValue = 0;
  let carry = 1;
  while (value > 0) {
    const digit = value % 10;
    realValue += mapping[digit] * carry;
    carry *= 10;
    value = (value / 10) >> 0;
  }
  return realValue;
};
const sortJumbled = (mapping, nums) => {
  const cache = {};
  for (const num of nums) {
    cache[num] = getRealValue(mapping, num);
  }
  return nums.sort((a, b) => cache[a] - cache[b]);
};
