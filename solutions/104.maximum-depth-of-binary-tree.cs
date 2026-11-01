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
  public int MaxDepth(TreeNode root)
  {
    var result = Traversal(root, 0);
    return result;
  }

  public int Traversal(
      TreeNode root, int depth)
  {
    if (root == null) return depth;

    var left = Traversal(root.left, depth + 1);
    var right = Traversal(root.right, depth + 1);

    return Math.Max(left, right);
  }
}
// @leet end

// Input
//
// 	│ root =
// 	│ [1,null,2]
//
// Output
//
// 	│ 3
//
// Expected
//
// 	│ 2


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
