// solution 1
const truncateSentence = (s, k) => s.split(' ').slice(0, k).join(' ');

// solution 2
const truncateSentence = (s, k) => {
  let spaceCount = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === ' ' && ++spaceCount === k) return s.slice(0, i);
  }
  return s;
};