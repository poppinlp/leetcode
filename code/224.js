const calculate = (s) => {
  const stack = [];
  let cur = '';
  s = s.split('').reverse().join('');
  s = `)${s}(`;

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === ' ') continue;
    if (s[i] === ')') { stack.push(s[i]); continue; }
    if (s[i] === '+' || s[i] === '-') { cur !== '' && stack.push(+cur); stack.push(s[i]); cur = ''; continue; }
    if (s[i] === '(') {
      if (cur !== '') {
        stack.push(+cur);
        cur = '';
      }
      while (true) {
        const n1 = stack.pop();
        const op = stack.pop();
        if (op === ')') {
          stack.push(n1);
          break;
        }
        const n2 = stack.pop();
        stack.push(op === '+' ? n1 + n2 : n1 - n2);
      }
      continue;
    }
    cur = s[i] + cur;
  }

  return stack.pop();
};

console.log(calculate("(1+(4+5+2)-3)+(6+8)"))