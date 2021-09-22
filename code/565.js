// loop
const arrayNesting = (nums) => {
  const visited = new Uint8Array(nums.length);
  let max = 0;
  for (const num of nums) {
    let cur = num;
    let len = 0;
    while (!visited[cur]) {
      visited[cur] = 1;
      ++len;
      cur = nums[cur];
    }
    max = Math.max(max, len);
  }
  return max;
};

// recursion
const findPath = (nums, visited, cur, len = 0) => {
  if (visited[cur]) return len;
  visited[cur] = 1;
  return findPath(nums, visited, nums[cur], len + 1);
};

const arrayNesting = (nums) => {
  const visited = new Uint8Array(nums.length);
  let max = 0;
  for (const num of nums) {
    max = Math.max(max, findPath(nums, visited, num));
  }
  return max;
};

// 1 line
const findPath = (nums, visited, cur, len = 0) => visited[cur] ? len : (visited[cur] = 1, findPath(nums, visited, nums[cur], len + 1));
const arrayNesting = (nums, visited = new Uint8Array(nums.length)) => nums.reduce((max, num) => Math.max(max, findPath(nums, visited, num)), 0);
