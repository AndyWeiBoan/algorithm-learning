// @leet start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution
{
  public bool IsValidBST(TreeNode root)
  {
    return IsValid(root, long.MinValue, long.MaxValue); ;
  }

  public bool IsValid(TreeNode root, long min, long max)
  {
    if (root == null) return true;

    var left = IsValid(root.left, min, root.val);

    if (left == false) return false;

    if (root.val <= min || root.val >= max) return false;

    var right = IsValid(root.right, root.val, max);
    if (right == false) return false;
    return true;
  }

}
// @leet end
//

public class TreeNode
{
  public int val;
  public TreeNode left;
  public TreeNode right;
  public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
  {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
