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
  public IList<IList<int>> LevelOrder(TreeNode root)
  {
    var res = new List<IList<int>>();
    if (root == null) return res;
    var queue = new Queue<TreeNode>();
    queue.Enqueue(root);

    while (queue.Count > 0)
    {
      var count = queue.Count;

      var layer = new List<int>();

      for (int i = 0; i < count; i++)
      {
        var tmp = queue.Dequeue();
        layer.Add(tmp.val);
        if (tmp.left != null) queue.Enqueue(tmp.left);
        if (tmp.right != null) queue.Enqueue(tmp.right);
      }

      res.Add(layer);
    }
    return res;
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
