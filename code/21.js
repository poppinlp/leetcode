// traverse
const mergeTwoLists = (l1, l2) => {
  const dummy = { next: null };
  let cur = dummy;
	while (l1 && l2) {
		l1.val < l2.val ? (cur.next = l1, l1 = l1.next) : (cur.next = l2, l2 = l2.next);
		cur = cur.next;
	}
	cur.next = l1 || l2;
	return dummy.next;
};

// recursive
const mergeTwoLists = (l1, l2) => {
	if (!l1) return l2;
	if (!l2) return l1;
	const cur = l1.val < l2.val ? l1 : l2;
	if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
	}
	return cur;
};

// 1 line
const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  return l1.val < l2.val
    ? ((l1.next = mergeTwoLists(l1.next, l2)), l1)
    : ((l2.next = mergeTwoLists(l1, l2.next)), l2);
};

const mergeTwoLists = (l1, l2, both = l1 && l2) => both ? (l1.val < l2.val ? ((l1.next = mergeTwoLists(l1.next, l2)), l1) : ((l2.next = mergeTwoLists(l1, l2.next)), l2)) : l1 || l2;
