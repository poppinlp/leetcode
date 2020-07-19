const addBinary = (a, b) => {
  let ret = '';
  let carry = 0;
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; --i, --j) {
    const cur = +(i >= 0 && a[i]) + +(j >= 0 && b[j]) + carry;
    ret = cur % 2 + ret;
    carry = +(cur > 1);
  }
  return carry === 0 ? ret : 1 + ret;
};
