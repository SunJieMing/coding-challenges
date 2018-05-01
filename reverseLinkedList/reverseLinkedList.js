const reverseLinkedList = (head) => {
  if (head === null || head.next === null) return head;
  let curr = head;
  let prev = null;
  while (curr) {
    let a = curr.next;
    curr.next = prev;
    prev = curr;
    curr = a;
  };
  return prev;
};

// 1 -> 2 -> 3 -> 4 -> 5
// let prev = null;
// while current.next 
// a = current.next
// current.next = prev
// a.next = current
//