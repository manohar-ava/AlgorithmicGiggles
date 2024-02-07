import { TreeNode } from "./util";
export function maxDepth(root: TreeNode | null): number {
  let max: number = 0;
  function rc(root: TreeNode | null, n: number) {
    if (root === null) {
      max = Math.max(max, n);
      return;
    }
    n++;
    rc(root.left, n);
    rc(root.right, n);
  }
  rc(root, 0);
  return max;
}

let root = new TreeNode(
  2,
  new TreeNode(1, new TreeNode(5, new TreeNode(7))),
  new TreeNode(3),
);
console.log(maxDepth(root));
