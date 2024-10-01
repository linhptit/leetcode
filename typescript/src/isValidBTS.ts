class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
 }

function isValidBTS(root: TreeNode | null): boolean {
  return isValidBTSHelper(root, null, null);
}

function isValidBTSHelper(root: TreeNode | null, min: number | null, max: number | null): boolean {
  if (root === null) return true;
  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;
  return isValidBTSHelper(root.left, min, root.val) && isValidBTSHelper(root.right, root.val, max);
}
