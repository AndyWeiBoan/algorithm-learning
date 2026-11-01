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
  public IList<int> PreorderTraversal(TreeNode root)
  {
    var res = new List<int>();
    if (root == null) return res;
    var stack = new Stack<TreeNode>();
    res.Add(root.val);

    if (root.right != null) stack.Push(root.right);
    if (root.left != null) stack.Push(root.left);

    while (stack.Count > 0)
    {
      var tmp = stack.Pop();
      res.Add(tmp.val);
      if (tmp.right != null) stack.Push(tmp.right);
      if (tmp.left != null) stack.Push(tmp.left);
    }
    return res;
  }
}
// @leet end

// public IList<int> PreorderTraversal(TreeNode root)
// {
//     var res = new List<int>();
//
//     PreTraversal(root, res);
//
//     return res;
// }
//
// public void PreTraversal(TreeNode root, List<int> res)
// {
//     if (root == null) return;
//     res.Add(root.val);
//     PreTraversal(root.left, res);
//     PreTraversal(root.right, res);
// }
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
