// based on pop
const validateStackSequences = (pushed, popped) => {
  const stack = [];
  for (let p0 = -1, p1 = 0, p2 = 0; p2 < popped.length; ++p2) {
    if (p0 >= 0 && stack[p0] === popped[p2]) { --p0; continue; }
    while (pushed[p1] !== popped[p2]) {
      stack[++p0] = pushed[p1];
      if (++p1 >= pushed.length) return false;
    }
    ++p1;
  }
  return true;
};

// based on push
const validateStackSequences = (pushed, popped) => {
  const stack = [];
  let p2 = 0;
  for (let p0 = -1, p1 = 0; p1 < pushed.length; ++p1) {
    if (pushed[p1] !== popped[p2]) { stack[++p0] = pushed[p1]; continue; }
    ++p2;
    while (p0 >= 0 && stack[p0] === popped[p2]) { --p0; ++p2; }
  }
  return p2 === popped.length;
};
