const addTwoNumbers = (l1, l2) => {
  const dummy = {};
  for (let cur = dummy, carry = 0; l1 || l2 || carry; l1 = l1?.next, l2 = l2?.next, cur = cur.next) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    const node = new ListNode(sum % 10);
    cur.next = node;
    carry = sum > 9 ? 1 : 0;
  }
  return dummy.next;
};
