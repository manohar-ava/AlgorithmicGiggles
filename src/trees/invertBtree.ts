
import { TreeNode, printTree } from "./util";
function invertTree(root: TreeNode | null): TreeNode | null {
  function rc(root) {
    if (root === null) return;
    const temp = root.right;
    root.right = root.left;
    root.left = temp;
    rc(root.left);
    rc(root.right);
  }
  rc(root);
  console.log(root);
  return root;
}
let root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
printTree(root);
invertTree(root);
printTree(root);
