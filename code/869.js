// solution 1
const set = new Set();
for (let cur = 1; cur < 10 ** 9; cur <<= 1) {
  set.add(String(cur));
}

const validate = (left, cur = "") => {
  if (left.length === 1) return set.has(cur + left[0]);
  for (let i = 0; i < left.length; ++i) {
    const next = left.slice(0, i) + left.slice(i + 1);
    if (validate(next, cur + left[i])) return true;
  }
  return false;
};

const reorderedPowerOf2 = (n) => validate(String(n));

// solution 2
const set = new Set();

const permute = (left, cur = "") => {
  if (left.length === 1) {
    set.add(Number(cur + left[0]));
    return;
  }
  for (let i = 0; i < left.length; ++i) {
    if (left[i] === "0" && cur.length === 0) continue;
    const next = left.slice(0, i) + left.slice(i + 1);
    permute(next, cur + left[i]);
  }
};

for (let cur = 1; cur < 10 ** 9; cur <<= 1) {
  permute(String(cur));
}

const reorderedPowerOf2 = (n) => set.has(n);

// solution 3
const set = new Set();

const serialize = str => {
  const count = new Uint8Array(10);
  const BASE = 48;
  for (let i = 0; i < str.length; ++i) {
    ++count[str.charCodeAt(i) - BASE];
  }
  return count.join(':');
};

for (let cur = 1; cur < 10 ** 9; cur <<= 1) {
  set.add(serialize(String(cur)));
}

const reorderedPowerOf2 = (n) => set.has(serialize(String(n)));

// solution 4
const set = new Set();

const serialize = num => {
  let val = 0;
  while (num >= 1) {
    val += 1 << num % 10;
    num /= 10;
  }
  return val;
};

for (let cur = 1; cur < 10 ** 9; cur <<= 1) {
  set.add(serialize(cur));
}

const reorderedPowerOf2 = (n) => set.has(serialize(n));
