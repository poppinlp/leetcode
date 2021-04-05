// solution 1
const isIdealPermutation = (A) => {
  let max = A[0];
  for (let i = 1; i < A.length - 1; ++i) {
    if (A[i + 1] < max) return false;
    A[i] > max && (max = A[i]);
  }
  return true;
};

// solution 2
const isIdealPermutation = (A) => {
  for (let i = 0; i < A.length; ++i) {
    const tmp = A[i] - i;
    if (tmp > 1 || tmp < -1) return false;
  }
  return true;
};