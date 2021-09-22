const intersect = (nums1, nums2) => {
  const set = new Uint16Array(1001);
  const ret = [];
  for (const num of nums1) {
    ++set[num];
  }
  for (const num of nums2) {
    set[num] && ret.push(num) && --set[num];
  }
  return ret;
};
