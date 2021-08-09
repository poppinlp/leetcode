const relativeSortArray = (arr1, arr2) => {
  const buckets = new Uint16Array(1001);
  const ret = new Uint16Array(arr1.length);
  let idx = 0;
  for (let i = 0; i < arr1.length; ++i) {
    ++buckets[arr1[i]];
  }
  for (let i = 0; i < arr2.length; ++i) {
    while (buckets[arr2[i]]) { ret[idx++] = arr2[i]; --buckets[arr2[i]]; }
  }
  for (let i = 0; i < buckets.length; ++i) {
    while (buckets[i]--) { ret[idx++] = i; }
  }
  return ret;
};