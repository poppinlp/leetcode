// with extra space
const rotateRight = (head, k) => {
  if (!head || !head.next || !k) return head;
  const list = [];
  let len = 0;
  for (let cur = head; cur; cur = cur.next) {
    list[len++] = cur;
  }
  const newHead = len - (k % len);
  if (newHead === len) return head;
  list[len - 1].next = head;
  list[newHead - 1].next = null;
  return list[newHead];
};

// without extra space
const rotateRight = (head, k) => {
  if (!head || !head.next || !k) return head;
  let newTail = head;
  let tail = head;
  let len = 1;
  while (tail.next) {
    tail = tail.next;
    ++len;
  }
  tail.next = head;
  for (let i = 1; i < len - (k % len); ++i) {
    newTail = newTail.next;
  }
  const ret = newTail.next;
  newTail.next = null;
  return ret;
};
