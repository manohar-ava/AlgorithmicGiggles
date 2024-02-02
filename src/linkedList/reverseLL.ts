class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let cur: ListNode | null = head;
  let prev: ListNode | null = null;
  while (cur != null) {
    const next: ListNode | null = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

const head = new ListNode(1, new ListNode(2, new ListNode(3)));

console.log(reverseList(head));
