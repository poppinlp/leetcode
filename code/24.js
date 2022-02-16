const swapPairs = (head) => {
  const ret = head && head.next ? head.next : head;
  for (let prev, end, cur = head; cur;) {
    if (!prev) { prev = cur; cur = cur.next; continue; }
    const next = cur.next;
    cur.next = prev;
    prev.next = next;
    end && (end.next = cur);
    end = prev;
    cur = next;
    prev = null;
  }
  return ret;
};