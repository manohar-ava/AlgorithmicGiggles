class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let dummy: ListNode | null = new ListNode();
  let res: ListNode | null = dummy;
  let carry: number = 0;
  while (l1 || l2 || carry) {
    const sum: number = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
    carry = Math.floor(sum / 10);
    res.next = new ListNode(sum % 10);
    res = res.next;
  }
  return dummy.next;
}

function Printll(head) {
  let cur = head;
  while (cur != null) {
    console.log(cur.val);
    cur = cur.next;
  }
}
let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
let l2 = new ListNode(9, new ListNode(9));

addTwoNumbers(l1, l2);
