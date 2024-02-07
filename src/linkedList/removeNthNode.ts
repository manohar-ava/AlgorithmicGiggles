class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let len: number = 0;
  let c: ListNode | null = head;
  while (c != null) {
    c = c.next;
    len++;
  }
  let idx = len - n;
  let rLen = 0;
  let cur = head;
  let prev = null;
  while (cur != null) {
    rLen++;
    if (rLen == idx && prev != null) {
      prev.next = cur.next;
      break;
    } else if (rLen == idx && prev == null) {
      return cur.next;
    }
    prev = cur;
    cur = cur.next;
  }
  return head;
}
