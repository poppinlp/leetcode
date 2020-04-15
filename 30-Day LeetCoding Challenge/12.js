const lastStoneWeight = stones => {
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    const x = stones.pop();
    const y = stones.pop();
    if (x === y) continue;
    const d = Math.abs(x - y);
    let idx = stones.length;
    while (idx > 0) {
      if (stones[idx - 1] <= d) break;
      stones[idx] = stones[idx - 1];
      --idx;
    }
    stones[idx] = d;
  }
  return stones.length === 1 ? stones[0] : 0;
};

const lastStoneWeight = stones => {
  const buckets = new Uint8Array(1001);
  let t = 0;
  for (const val of stones) ++buckets[val];
  for (let i = 1000; i > 0; --i) {
    if (!buckets[i]) continue;
    if (!t) { buckets[i] % 2 && (t = i); continue; }
    const d = Math.abs(t - i);
    t = d >= i ? d : (++buckets[d], 0);
    --buckets[i++];
  }
  return t;
};
