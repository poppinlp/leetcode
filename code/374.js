const guessNumber = (right) => {
  let left = 1;
  while (true) {
    const mid = ((left + right) / 2) << 0;
    const result = guess(mid);
    if (result === 0) return mid;
    result === 1 ? left = mid + 1 : right = mid - 1;
  }
};

const guessNumber = (right, left = 1) => {
  const mid = ((left + right) / 2) << 0;
  switch(guess(mid)) {
    case 0:
      return mid;
    case -1:
      return guessNumber(mid - 1, left);
    case 1:
      return guessNumber(right, mid + 1);
  }
};

const next = {
  0: (mid, left, right) => mid,
  "-1": (mid, left, right) => guessNumber(mid - 1, left),
  1: (mid, left, right) => guessNumber(right, mid + 1),
};
const guessNumber = (right, left = 1, mid = ((left + right) / 2) << 0) => next[guess(mid)](mid, left, right);