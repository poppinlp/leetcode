const maximumUnits = (boxTypes, truckSize) => {
  let ret = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);
  for (let idx = 0; ; ) {
    if (idx >= boxTypes.length) break;
    const [count, unit] = boxTypes[idx];
    if (count === 0) { ++idx; continue; }
    if (truckSize <= count) { ret += truckSize * unit; break; }
    truckSize -= count;
    ret += count * unit;
    ++idx;
  }
  return ret;
};

const maximumUnits = (boxTypes, truckSize) => {
  const bucket = new Uint16Array(1001);
  let ret = 0;
  let max = 0;
  for (let i = 0; i < boxTypes.length; ++i) {
    bucket[boxTypes[i][1]] += boxTypes[i][0];
    boxTypes[i][1] > max && (max = boxTypes[i][1]);
  }
  for (let idx = max; ; ) {
    if (idx < 0) break;
    const count = bucket[idx];
    if (count === 0) { --idx; continue; }
    if (truckSize <= count) { ret += truckSize * idx; break; }
    truckSize -= count;
    ret += count * idx;
    --idx;
  }
  return ret;
};
