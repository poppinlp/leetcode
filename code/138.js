const copyRandomList = (head) => {
  const nodes = [];
  const map = new Map();
  for (let i = 0, cur = head; cur; cur = cur.next, ++i) {
    nodes[i] = new ListNode(cur.val);
    map.set(cur, i);
    i > 0 && (nodes[i - 1].next = nodes[i]);
  }
  for (let i = 0, cur = head; cur; cur = cur.next, ++i) {
    nodes[i].random = cur.random ? nodes[map.get(cur.random)] : null;
  }
  return nodes[0];
};
