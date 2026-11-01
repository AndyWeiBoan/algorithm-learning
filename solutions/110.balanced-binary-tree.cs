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
  public bool IsBalanced(TreeNode root)
  {
    var res = GetDepth(root);

    return res.balanced;
  }

  (int depth, bool balanced) GetDepth(TreeNode root)
  {

    if (root == null) return (0, true);

    var left = GetDepth(root.left);
    if (left.balanced == false) return (1 + left.depth, false);

    var right = GetDepth(root.right);
    if (right.balanced == false) return (1 + right.depth, false);

    var max = Math.Max(1 + left.depth, 1 + right.depth);
    var min = Math.Min(1 + left.depth, 1 + right.depth);

    return (max, (max - min) <= 1);
  }
}
// @leet end


public class TreeNode
{
  public int val;
  public TreeNode left;
  public TreeNode right;
  public TreeNode(
      int val = 0,
      TreeNode left = null,
      TreeNode right = null)
  {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
