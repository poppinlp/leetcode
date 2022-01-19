const wordPattern = (pattern, s) => {
  const words = s.split(' ');
  const p2w = {};
  const w2p = {};
  let idx = 0;
  if (words.length !== pattern.length) return false;
  for (const w of words) {
    const p = pattern[idx++];
    if ((p2w[p] && p2w[p] !== w) || (w2p[w] && w2p[w] !== p)) return false;
    p2w[p] = w;
    w2p[w] = p;
  }
  return true;
};