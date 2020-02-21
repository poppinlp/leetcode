const maxJumps = (arr, d) => {
  const LEN = arr.length;
  const sortedHeights = arr.map((val, idx) => [val, idx]).sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  const steps = new Uint16Array(LEN);
  let ret = 0;
  for (const [height, cur] of sortedHeights) {
    let max = 0;
    for (let i = cur + 1; i <= cur + d && i < LEN && arr[i] < height; ++i) {
      steps[i] > max && (max = steps[i]);
    }
    for (let i = cur - 1; i >= cur - d && i >= 0 && arr[i] < height; --i) {
      steps[i] > max && (max = steps[i]);
    }
    steps[cur] = max + 1;
    steps[cur] > ret && (ret = steps[cur]);
  }
  return ret;
};

const maxJumps = (arr, d) => {
  const cache = new Uint16Array(arr.length);
  return Math.max(...arr.map((v, i) => helper(i)));

  function helper(cur) {
    if (cache[cur] === 0) {
      let max = 0;
      for (let i = cur + 1; i <= cur + d && i < arr.length && arr[i] < arr[cur]; ++i) {
        max = Math.max(helper(i), max);
      }
      for (let i = cur - 1; i >= cur - d && i >= 0 && arr[i] < arr[cur]; --i) {
        max = Math.max(helper(i), max);
      }
      cache[cur] = 1 + max;
    }
    return cache[cur];
  }
};

class SegmentTree {
  constructor(len) {
    this.data = new Array(len * 4);
    this.build(0, 0, len - 1);
  }
  build(cur, left, right) {
    if (left === right) { this.data[cur] = [left, right, 0]; return; }
    const mid = Math.floor((left + right) / 2);
    this.data[cur] = [left, right, 0];
    this.build(cur * 2 + 1, left, mid),
    this.build(cur * 2 + 2, mid + 1, right)
  }
  query(left, right, cur = 0) {
    const node = this.data[cur];
    if (node[0] === left && node[1] === right) return node[2];
    const mid = Math.floor((node[0] + node[1]) / 2);
    if (left > mid) return this.query(left, right, cur * 2 + 2);
    if (right <= mid) return this.query(left, right, cur * 2 + 1);
    return Math.max(
      this.query(left, mid, cur * 2 + 1),
      this.query(mid + 1, right, cur * 2 + 2),
    );
  }
  update(idx, value, cur = 0) {
    const node = this.data[cur];
    if (node[0] === node[1] && node[0] === idx) { node[2] = value; return; }
    const mid = Math.floor((node[0] + node[1]) / 2);
    this.update(idx, value, idx > mid ? cur * 2 + 2 : cur * 2 + 1);
    value > node[2] && (node[2] = value);
  }
}
const maxJumps = (arr, d) => {
  const LEN = arr.length;
  const tree = new SegmentTree(LEN);
  const sortedHeights = arr.map((val, idx) => [val, idx]).sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  const leftTops = new Int16Array(LEN);
  const rightTops = new Int16Array(LEN);

  for (let i = 0, j = LEN - 1, lstack = [], ltop = -1, rstack = [], rtop = -1; i < LEN; ++i, --j) {
    while (ltop >= 0 && arr[lstack[ltop]] < arr[i]) { lstack.pop(); --ltop; }
    leftTops[i] = ltop === -1 ? -1 : lstack[ltop];
    lstack[++ltop] = i;
    while (rtop >= 0 && arr[rstack[rtop]] < arr[j]) { rstack.pop(); --rtop; }
    rightTops[j] = rtop === -1 ? LEN: rstack[rtop];
    rstack[++rtop] = j;
  }

  for (const item of sortedHeights) {
    const idx = item[1];
    tree.update(idx, 1 + tree.query(
      Math.max(leftTops[idx] + 1, idx - d),
      Math.min(rightTops[idx] - 1, idx + d)
    ));
  }

  return tree.query(0, LEN - 1);
};

const maxJumps = (arr, d) => {
  const LEN = arr.length;
  const cache = new Uint16Array(LEN);
  const map = Array.from({ length: LEN }, () => []);

  for (let left = 0, right = LEN - 1, ltop = -1, rtop = -1, lstack = new Uint16Array(LEN), rstack = new Uint16Array(LEN); left < LEN; ++left, --right) {
    ltop = upStack(lstack, ltop, left);
    rtop = upStack(rstack, rtop, right);
  }
  return Math.max(...arr.map((v, i) => helper(i)));

  function upStack(stack, top, i) {
    while (top >= 0 && arr[stack[top]] < arr[i]) {
      const idx = stack[top--];
      Math.abs(idx - i) <= d && map[i].push(idx);
    }
    stack[++top] = i;
    return top;
  }

  function helper(cur) {
    cache[cur] === 0 && (
      cache[cur] = 1 + (map[cur].length && Math.max(...map[cur].map(helper)))
    );
    return cache[cur];
  }
};

const maxJumps = (arr, d) => {
  arr.push(10 ** 5 + 1);
  const LEN = arr.length;
  const dp = new Uint16Array(LEN).fill(1);
  for (let i = 1, top = 0, stack = new Uint16Array(LEN); i < LEN; ++i) {
    while (top >= 0 && arr[stack[top]] < arr[i]) {
      let prevNoneSame = top;
      const height = arr[stack[top]];
      while (arr[stack[prevNoneSame]] === height) --prevNoneSame;
      while (arr[stack[top]] === height) {
        const idx = stack[top--];
        i - idx <= d && dp[idx] + 1 > dp[i] && (dp[i] = dp[idx] + 1);
        prevNoneSame >= 0 && idx - stack[prevNoneSame] <= d && dp[idx] + 1 > dp[stack[prevNoneSame]] && (dp[stack[prevNoneSame]] = dp[idx] + 1);
      }
    }
    stack[++top] = i;
  }
  dp[LEN - 1] = 0;
  return Math.max(...dp);
};
