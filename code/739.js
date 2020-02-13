const dailyTemperatures = list => {
  const ret = new Uint16Array(list.length);
  const stack = [];
  for (let i = 0; i < list.length; ++i) {
    while (stack.length && list[stack[stack.length - 1]] < list[i]) {
      const top = stack.pop();
      ret[top] = i - top;
    }
    stack.push(i);
  }
  return ret;
};
