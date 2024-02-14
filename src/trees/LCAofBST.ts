import { TreeNode, printTree } from "./util";
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (root === null) {
    return null;
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
}

const root = new TreeNode(2, new TreeNode(1));
lowestCommonAncestor(root, new TreeNode(2), new TreeNode(1));
