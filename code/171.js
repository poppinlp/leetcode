const titleToNumber = s => {
  let ret = 0;
  for (let i = 0; i < s.length; ++i) {
    ret = ret * 26 + s.charCodeAt(i) - 64;
  }
  return ret;
};