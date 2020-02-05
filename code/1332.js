const removePalindromeSub = s => {
  if (s.length === 0) return 0;
  for (let left = 0, right = s.length - 1; left < right; ++left, --right) {
    if (s[left] !== s[right]) return 2;
  }
  return 1;
};

const removePalindromeSub = s => s.length === 0 ? 0 : s.split('').reverse().join('') === s ? 1 : 2;
