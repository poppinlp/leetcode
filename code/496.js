const nextGreaterElement = (nums1, nums2) => {
  const map = {};
  for (let i = 0; i < nums2.length; ++i) {
    let greater = -1;
    for (let j = i + 1; j < nums2.length; ++j) {
      if (nums2[j] > nums2[i]) {
        greater = nums2[j];
        break;
      }
    }
    map[nums2[i]] = greater;
  }
  return nums1.map(num => map[num]);
};

const nextGreaterElement = (nums1, nums2) => {
  const stack = [];
  const map = {};
  for (let i = nums2.length - 1; i >= 0; --i) {
    while (stack.length && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }
    map[nums2[i]] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums2[i]);
  }
  return nums1.map(num => map[num]);
};

const nextGreaterElement = (nums1, nums2) => {
  const stack = new Uint16Array(nums2.length);
  const map = {};
  for (let top = -1, i = nums2.length - 1; i >= 0; --i) {
    while (top >= 0 && stack[top] <= nums2[i]) --top;
    map[nums2[i]] = top >= 0 ? stack[top] : -1;
    stack[++top] = nums2[i];
  }
  return nums1.map(num => map[num]);
};