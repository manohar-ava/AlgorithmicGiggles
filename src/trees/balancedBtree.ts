import { TreeNode, printTree } from "./util";
import { maxDepth } from "./maxDepth";
function isBalanced(root: TreeNode | null): boolean {
  let isBalanced: boolean = true;
  function rc(root) {
    if (root === null) {
      return;
    }
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    if (Math.abs(leftMax - rightMax) > 1) {
      isBalanced = false;
      return;
    }
    rc(root.left);
    rc(root.right);
  }
  rc(root);
  return isBalanced;
}
const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
printTree(root);
isBalanced(root);
