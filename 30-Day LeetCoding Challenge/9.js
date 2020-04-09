const decode = s => {
  const stack = [];
  for (const c of s) {
    c === '#' ? stack.pop() : stack.push(c);
  }
  return stack.join('');
};
const backspaceCompare = (s1, s2) => decode(s1) === decode(s2);

const backspaceCompare = (s1, s2) => {
  let p1 = s1.length - 1;
  let p2 = s2.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    for (let bs = 0; s1[p1] === '#' || bs > 0; --p1) {
      s1[p1] === '#' ? ++bs : --bs;
    }
    for (let bs = 0; s2[p2] === '#' || bs > 0; --p2) {
      s2[p2] === '#' ? ++bs : --bs;
    }
    if (s1[p1--] !== s2[p2--]) return false;
  }
  return true;
}