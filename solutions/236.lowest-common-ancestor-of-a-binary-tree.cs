// @leet start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution
{
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q)
    {
        if (root == null || root == p || root == q) return root;

        var left = LowestCommonAncestor(root.left, p, q);
        var right = LowestCommonAncestor(root.right, p, q);

        if (left != null && right != null) return root;
        return left ?? right;
    }
}
// @leet end

public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int x) { val = x; }
}
//  Wrong Answer | 19/33 testcases passed
//
// Input
//
// 	│ root =
// 	│ [1,2,3]
//
// 	│ p =
// 	│ 3
//
// 	│ q =
// 	│ 2
//
// Output
//
// 	│ 2
//
// Expected
//
// 	│ 1
//

