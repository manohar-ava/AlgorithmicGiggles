import { TreeNode, printTree } from "./util";
function rightSideView(root: TreeNode | null): number[] {
  const arr: number[] = [];
  const set: Set<number> = new Set();
  function rc(root: TreeNode | null, n: number) {
    if (root == null) return false;
    n++;
    if (!set.has(n)) {
      set.add(n);
      arr.push(root.val);
    }
    rc(root.right, n);
    rc(root.left, n);
  }
  rc(root, 0);
  return arr;
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(5, null, new TreeNode(6))),
  new TreeNode(3),
);

console.log(rightSideView(root));
