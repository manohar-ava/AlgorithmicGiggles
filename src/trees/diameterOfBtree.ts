import { TreeNode } from "./util";
import { maxDepth } from "./maxDepth";
function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxSum = 0;
  function rc(root) {
    if (root === null) {
      return;
    }
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    maxSum = Math.max(maxSum, leftMax + rightMax);
    rc(root.left);
    rc(root.right);
  }
  rc(root);
  return maxSum;
}

