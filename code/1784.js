const checkOnesSegment = (s) => s.includes('0') ? s.indexOf('0') > s.lastIndexOf('1') : true;

const checkOnesSegment = (s) => {
  let metZero = false;
  for (let i = 1; i < s.length; ++i) {
    if (s[i] === '1' && metZero) return false;
    s[i] === '0' && (metZero = true);
  }
  return true;
};

const checkOnesSegment = (s) => !s.includes('01')