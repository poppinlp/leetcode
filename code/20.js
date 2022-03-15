const map = { "(": ")", "[": "]", "{": "}" };
const isValid = (s) => {
  if (s.length & 1) return false;
  const stack = [];
  for (const char of s) {
    if (!map[char] && map[stack.pop()] !== char) return false;
    map[char] && stack.push(char);
  }
  return stack.length === 0;
};
