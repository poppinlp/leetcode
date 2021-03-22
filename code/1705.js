const eatenApples = (apples, days) => {
  const haveApple = new Uint8Array(4 * 10 ** 4);
  let sum = 0;
  for (let i = apples.length - 1; i >= 0; --i) {
    for (let j = i + days[i] - 1, c = apples[i]; j >= i; --j) {
      if (c === 0) break;
      if (haveApple[j] === 1) continue;
      haveApple[j] = 1;
      --c;
      ++sum;
    }
  }
  return sum;
};

// TODO min-heap