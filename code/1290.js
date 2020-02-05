const getDecimalValue = head => {
  let val = 0;
  while (head) {
    val = (val << 1) | head.val;
    head = head.next;
  }
  return val;
};