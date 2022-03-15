const handlers = {
  '.': () => {},
  '..': (stack) => stack.length && stack.pop(),
};
const simplifyPath = (path) => {
  const SLASH = '/';
  const parts = path.split(SLASH);
  const stack = [];
  for (const part of parts) {
    part && (handlers[part] ? handlers[part](stack) : stack.push(part));
  }
  return SLASH + stack.join(SLASH);
};


const simplifyPath = (path) => '/' + path.split('/').filter(p => p !== '' && p !== '.').reduce((prev, cur) => (cur === '..' ? prev.pop() : prev.push(cur), prev), []).join('/');
