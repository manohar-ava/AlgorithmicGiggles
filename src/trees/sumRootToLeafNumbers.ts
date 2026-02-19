class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

const root2 = new TreeNode(
  4,
  new TreeNode(9, new TreeNode(5), new TreeNode(1)),
  new TreeNode(0),
);

function sumNumbers(root: TreeNode | null): number {
  const result: string[] = [];

  function rec(node: TreeNode, value: string = "") {
    if (node.left === null && node.right === null) {
      result.push(`${value}${node.val}`);
    }
    if (node.right) {
      rec(node.right, `${value}${node.val}`);
    }
    if (node.left) {
      rec(node.left, `${value}${node.val}`);
    }
  }
  if (root) rec(root);
  return result.map((x) => parseInt(x)).reduce((a, v) => a + v);
}

console.log(sumNumbers(root1));
console.log(sumNumbers(root2));
