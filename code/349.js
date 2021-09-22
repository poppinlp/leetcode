const intersection = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set();
  for (const num of nums2) {
    set1.has(num) && set2.add(num);
  }
  return Array.from(set2);
};

const intersection = (nums1, nums2) => {
  const set = new Uint8Array(1001);
  const ret = [];
  for (const num of nums1) {
    set[num] = 1;
  }
  for (const num of nums2) {
    set[num] && ret.push(num) && --set[num];
  }
  return ret;
};
