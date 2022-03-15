// // Time Limit Exceeded
// const recursion = (idx, values, curMax) => {
//   if (idx === 10001) return curMax;
//   if (values[idx] === 0) return recursion(idx + 1, values, curMax);
//   const valueLeft = values[idx - 1];
//   const valueRight = values[idx + 1];
//   values[idx - 1] = 0;
//   values[idx + 1] = 0;
//   const max1 = recursion(idx + 1, values, curMax + values[idx]);
//   values[idx - 1] = valueLeft;
//   values[idx + 1] = valueRight;
//   const max2 = recursion(idx + 1, values, curMax);
//   return Math.max(max1, max2);
// };
// const deleteAndEarn = (nums) => {
//   const values = new Uint16Array(10001)
//   for (const num of nums) {
//     values[num] += num;
//   }
//   return recursion(1, values, 0);
// };


const getEarn = (values, idx) => values[idx] - values[idx - 1] - values[idx + 1];
const deleteAndEarn = (nums) => {
  const values = new Uint16Array(10002)
  const uniq = [];
  for (const num of nums) {
    values[num] === 0 && uniq.push(num);
    values[num] += num;
  }
  uniq.sort((a, b) => getEarn(values, b) - getEarn(values, a));
  let max = 0;
  for (const idx of uniq) {
    max += values[idx];
    values[idx - 1] = 0;
    values[idx + 1] = 0;
  }
  return max;
};
