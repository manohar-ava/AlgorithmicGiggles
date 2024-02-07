class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let dummy: ListNode = new ListNode();
  let res = dummy;
  while (list1 || list2) {
    if (list1 === null) {
      res.next = list2;
      break;
    }
    if (list2 === null) {
      res.next = list1;
      break;
    }
    if (list1.val < list2.val) {
      res.next = new ListNode(list1.val);
      res = res.next;
      list1 = list1.next;
    } else {
      res.next = new ListNode(list2.val);
      res = res.next;
      list2 = list2.next;
    }
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

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log(Printll(mergeTwoLists(l1, l2)));
