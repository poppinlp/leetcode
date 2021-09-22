const isLetter = (c) => (c <= 90 && c >= 65) || (c <= 122 && c >= 97);
const reverseOnlyLetters = (s) => {
  const ret = [];
  const letters = [];
  for (let i = 0; i < s.length; ++i) {
    isLetter(s.charCodeAt(i)) ? letters.push(i) : (ret[i] = s[i]);
  }
  for (let i = 0, last = letters.length - 1; i < letters.length; ++i) {
    ret[letters[last - i]] = s[letters[i]];
  }
  return ret.join('');
};

const isLetter = (c) => (c <= 90 && c >= 65) || (c <= 122 && c >= 97);
const reverseOnlyLetters = (s) => {
  const ret = [];
  for (let left = 0, right = s.length - 1; left <= right;) {
    if (!isLetter(s.charCodeAt(left))) { ret[left] = s[left]; ++left; continue; }
    if (!isLetter(s.charCodeAt(right))) { ret[right] = s[right]; --right; continue; }
    ret[left] = s[right];
    ret[right] = s[left];
    ++left;
    --right;
  }
  return ret.join('');
};
