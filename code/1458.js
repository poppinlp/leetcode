const maxDotProduct = (nums1, nums2) => {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const dp = new Array(len1);

  for (let i = 0, max = Number.MIN_SAFE_INTEGER; i < len1; ++i) {
    dp[i] = new Int32Array(len2);
    nums1[i] * nums2[0] > max && (max = nums1[i] * nums2[0]);
    dp[i][0] = max;
  }
  for (let i = 0, max = Number.MIN_SAFE_INTEGER; i < len2; ++i) {
    nums1[0] * nums2[i] > max && (max = nums1[0] * nums2[i]);
    dp[0][i] = max;
  }

  for (let i = 1; i < len1; ++i) {
    for (let j = 1; j < len2; ++j) {
      let max = Math.max(dp[i - 1][j], dp[i][j - 1]);
      for (let k = 0; k < j; ++k) {
        nums1[i] * nums2[k] > max && (max = nums1[i] * nums2[k]);
      }
      for (let k = 0; k < i; ++k) {
        nums1[k] * nums2[j] > max && (max = nums1[k] * nums2[j]);
      }
      dp[i][j] = max;
    }
  }

  return dp[len1 - 1][len2 - 1];
};

console.log(maxDotProduct(
  [2,1,-2,5], [3,0,-6]
))


function deepCopy(root) {
  const dummy = {};
  for (let node = root, cur = dummy; node !== null; node = node.next, cur = cur.next) {
    cur.next = new Node(node);
    cur.next.randomNext = node.randomNext;
    node.randomNext = cur.next;
  }
  for (let node = root, cur = dummy.next; node !== null; node = node.next, cur = cur.next) {
    const originNext = cur.randomNext;
    cur.randomNext = cur.randomNext.randomNext;
    node.randomNext = originNext;
  }
  return dummy.next;
}
