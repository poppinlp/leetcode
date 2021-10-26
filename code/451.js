const frequencySort = (s) => {
  const freq = {};
  let result = '';
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  Object.keys(freq).sort((a, b) => freq[b] - freq[a]).forEach(char => {
    result += char.repeat(freq[char]);
  });
  return result;
};

const frequencySort = (s) => {
  const freq = {};
  let result = '';
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  Object.keys(freq).sort((a, b) => freq[b] - freq[a]).forEach(char => {
    result += char.repeat(freq[char]);
  });
  return result;
};