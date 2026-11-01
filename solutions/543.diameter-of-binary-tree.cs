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
  public int DiameterOfBinaryTree(TreeNode root)
  {

    var res = GetHeight(root);

    return res.max;
  }

  public (int height, int max) GetHeight(TreeNode root)
  {
    if (root == null) return (0, 0);

    var left = GetHeight(root.left);
    var right = GetHeight(root.right);
    var max = Math.Max(left.max, right.max);
    var left_h = left.height;
    var right_h = right.height;

    max = Math.Max(max, left_h + right_h);
    return (1 + Math.Max(left_h, right_h), max);
  }
}
// @leet end


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
