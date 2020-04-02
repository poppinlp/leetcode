const next = n => {
  let ret = 0;
  while (n !== 0) {
    ret += (n % 10) ** 2;
    n = (n / 10) >> 0;
  }
  return ret;
}

const isHappy = (n) => {
  const history = new Set([n]);
  while (n !== 1) {
    n = next(n);
    if (history.has(n)) return false
    history.add(n);
  }
  return true;
}

const isHappy = n => {
  let slow = n;
  let fast = next(n);

  while (slow !== fast) {
    slow = next(slow);
    fast = next(next(fast));
  }
  return slow === 1;
}

const isHappy = n => {
  while (n !== 1 && n !== 4) n = next(n);
  return n === 1;
}
