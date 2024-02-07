class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode | null): void {
  let fp: ListNode | null = head;
  let sp: ListNode | null = head;
  while (fp != null) {
    fp = fp?.next?.next;
    sp = sp.next;
  }
  let prev = null;
  while (sp != null) {
    const next = sp.next;
    sp.next = prev;
    prev = sp;
    sp = next;
  }
  let cur = head;
  while (prev != null) {
    const next = cur.next;
    const pNext = prev.next;
    cur.next = prev;
    prev.next = next;
    cur = prev.next;
    prev = pNext;
  }
  cur.next = null;
}
function Printll(head) {
  let cur = head;
  while (cur != null) {
    console.log(cur.val);
    cur = cur.next;
  }
}
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);

reorderList(head);
