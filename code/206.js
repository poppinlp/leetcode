const reverseList = (head) => {
  let prev = null;
  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

const reverseList = (cur, prev = null) => {
  if (!cur) return prev;
  const next = cur.next;
  cur.next = prev;
  return reverseList(next, cur);
};
