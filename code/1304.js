const sumZero = n => {
  const ret = new Int16Array(n);
  for (let i = 1; i <= Math.floor(n / 2); ++i) {
    ret[i - 1] = i;
    ret[n - i] = -i;
  }
  return ret;
};

const sumZero = n => {
  const ret = new Int16Array(n);
  for (let i = 0; i < n; ++i) {
    ret[i] = i * 2 - n + 1;
  }
  return ret;
};

const sumZero = n => {
  const ret = new Int32Array(n);
  for (let i = 1; i < n; ++i) {
    ret[i] = i;
  }
  ret[0] = -((1 + n) * n / 2 - n);
  return ret;
};