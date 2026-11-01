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
  public IList<int> InorderTraversal(TreeNode root)
  {
    var res = new List<int>();
    var stack = new Stack<TreeNode>();

    var current = root;
    while (current != null)
    {
      stack.Push(current);
      current = current.left;
    }

    while (stack.Count > 0)
    {
      var tmp = stack.Pop();

      res.Add(tmp.val);

      if (tmp.right != null)
      {
        current = tmp.right;
        while (current != null)
        {
          stack.Push(current);
          current = current.left;
        }
      }
    }
    return res;
  }
  // public IList<int> InorderTraversal(TreeNode root)
  // {
  //   var res = new List<int>();
  //
  //   InorderTraversal(root, res);
  //
  //   return res;
  // }
  //
  // public void InorderTraversal(TreeNode root, List<int> res)
  // {
  //   if (root == null) return;
  //
  //   InorderTraversal(root.left, res);
  //   res.Add(root.val);
  //   InorderTraversal(root.right, res);
  // }

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
