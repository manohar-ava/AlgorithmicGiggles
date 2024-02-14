import { TreeNode } from "./util";
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const t1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const t2 = new TreeNode(1, new TreeNode(2));

console.log(isSameTree(t1, t2));
