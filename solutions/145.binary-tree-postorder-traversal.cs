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
  public IList<int> PostorderTraversal(TreeNode root)
  {
    var res = new List<int>();

    PostTraversal(root, res);
    return res;

  }

  public void PostTraversal(TreeNode root, List<int> res)
  {
    if (root == null) return;

    PostTraversal(root.left, res);
    PostTraversal(root.right, res);
    res.Add(root.val);
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
