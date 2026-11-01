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
  public int MaxAncestorDiff(TreeNode root)
  {
    return diff(root).res;
  }

  public (int min, int max, int res) diff(TreeNode root)
  {
    if (root == null) return (int.MaxValue, int.MinValue, int.MinValue);

    var left = diff(root.left);
    var right = diff(root.right);

    var min = Math.Min(Math.Min(root.val, left.min), right.min);
    var max = Math.Max(Math.Max(root.val, left.max), right.max);

    var left_res = root.left == null ? int.MinValue :
      Math.Max(Math.Abs(root.val - left.min), Math.Abs(root.val - left.max));

    var right_res = root.right == null ? int.MinValue :
      Math.Max(Math.Abs(root.val - right.min), Math.Abs(root.val - right.max));

    var res = Math.Max(left_res, right_res);
    res = Math.Max(res, left.res);
    res = Math.Max(res, right.res);

    return (min, max, res);
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
