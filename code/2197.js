const cache = {};
const gcd = (num1, num2) => {
  const key = `${num1}-${num2}`;
  if (cache[key]) return cache[key];
  while(num1 != num2){
    if(num1 > num2){
      num1 = num1 - num2;
    }else{
      num2 = num2 - num1;
    }
  }
  cache[key] = num2;
  return num2;
}
const lcm = (n1, n2) => {
  const t = gcd(n1, n2);
  return (n1 * n2) / t;
}
const replaceNonCoprimes = (nums) => {
  let min = 0;
  while (true) {
    let flag = true;
    const next = [];
    for (let i = min; i < nums.length - 1; ++i) {
      if (gcd(nums[i], nums[i + 1]) <= 1) {
        next.push(nums[i]);
        continue;
      }
      next.push(lcm(nums[i], nums[i + 1]));
      ++i;
      min = Math.min(i === 0 ? 0 : i - 1, min);
      flag = false;
    }
    if (flag) break;
    next.push(nums.pop());
    nums = next;
  }
  return nums;
};

console.log(replaceNonCoprimes([6,4,3,2,7,6,2]))
