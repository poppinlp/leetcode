// using map
const frequencySort = (nums) => {
  const freq = {};
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return nums.sort((a, b) => freq[a] === freq[b] ? b - a : freq[a] - freq[b]);
};

// using fixed-length array
const frequencySort = (nums) => {
  const freq = new Uint8Array(201);
  const OFFSET = 100;
  for (const num of nums) {
    ++freq[num + OFFSET];
  }
  return nums.sort((a, b, a2 = a + OFFSET, b2 = b + OFFSET) => freq[a2] === freq[b2] ? b - a : freq[a2] - freq[b2]);
};
