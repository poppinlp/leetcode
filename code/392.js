const isSubsequence = (s, t) => new RegExp(s.split('').join('.*')).test(t);

const isSubsequence = (s, t) => {
  let cur = 0;
  for (const c of t) {
    c === s[cur] && ++cur;
    if (cur === s.length) return true;
  }
  return cur === s.length;
}
