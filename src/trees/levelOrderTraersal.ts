import { TreeNode } from "./util";
function levelOrder(root: TreeNode | null): number[][] {
  let arr: number[][] = [];
  let queue: (TreeNode | null)[] = [root];
  while (queue.length) {
    let len = queue.length;
    let subArr: number[] = [];
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      if (cur) {
        subArr.push(cur.val);
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
      }
    }
    if (subArr.length) arr.push(subArr);
  }
  console.log(arr);
  return arr;
}
const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);

levelOrder(root);
