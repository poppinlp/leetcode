const buildArray = (target, n) => {
  const ret = [];
  for (let i = 0, j = 1; i < target.length; ++i, ++j) {
    ret.push('Push');
    target[i] !== j && ret.push('Pop') && --i;
  }
  return ret;
};
