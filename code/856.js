const scoreOfParentheses = (s) => {
  const LEFT = '(';
  const stack = [];
  for (let top = -1, i = 0; i < s.length; ++i) {
    if (s[i] === LEFT) { stack[++top] = s[i]; continue; }
    let val = 1;
    stack[top] !== LEFT && (val = stack[top--] << 1);
    --top;
    while (top >= 0 && stack[top] !== LEFT) val += stack[top--];
    stack[++top] = val;
  }
  return stack[0];
};
