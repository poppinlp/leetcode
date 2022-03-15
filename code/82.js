// extra space
const deleteDuplicates = head => {
  const count = {};
  const dummy = { next: head };
  for (let cur = head; cur; cur = cur.next) {
    count[cur.val] = (count[cur.val] || 0) + 1;
  }
  for (let cur = dummy; cur.next;) {
    count[cur.next.val] > 1 ? (cur.next = cur.next.next) : (cur = cur.next);
  }
  return dummy.next;
};

// no extra space
const deleteDuplicates = head => {
  const dummy = { next: head };
  let prev = dummy;
  let cur = head;
  let next = head?.next;
  while (next) {
    if (cur.val !== next.val) {
      prev = cur;
      cur = next;
      next = next.next;
    } else {
      const val = cur.val;
      while (next && next.val === val) {
        next = next.next;
      }
      cur = next;
      next = next?.next;
      prev.next = cur;
    }
  }
  return dummy.next;
};
