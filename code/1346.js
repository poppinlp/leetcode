const checkIfExist = arr => {
  const neg = new Uint8Array(1000);
  const pos = new Uint8Array(1000);
  for (const val of arr) {
    const arr = val > 0 ? pos : neg;
    const v2 = Math.abs(val);
    if (arr[v2 << 1] === 1 || arr[v2 / 2]) return true;
    arr[v2] = 1;
  }
  return false;
};

const checkIfExist = arr => {
  const set = new Set();
  for (const val of arr) {
    if (set.has(val << 1) || set.has(val / 2)) return true;
    set.add(val);
  }
  return false;
};

console.log(checkIfExist([-10,12,-20,-8,15]))