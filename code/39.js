const combinationSum = (candidates, target) => {
  const ret = [];
  rec();
  return ret;

  function rec(idx = 0, sum = 0, nums = []) {
    if (sum > target) return;
    if (sum === target) { ret.push([...nums]); return; }
    for (let i = idx; i < candidates.length; ++i) {
      nums.push(candidates[i]);
      rec(i, sum + candidates[i], nums);
      nums.pop();
    }
  };
};
