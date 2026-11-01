// @leet start
public class Solution
{
    public int Rob(int[] nums)
    {
        var pre = nums[0];
        var res = pre;

        if (nums.Length > 1)
            res = Math.Max(pre, nums[1]);

        for (int i = 2; i < nums.Length; i++)
        {
            var tmp = res;
            res = Math.Max(pre + nums[i], res);
            pre = tmp;
        }
        return res;
    }
    // {
    //     var dp = new int[nums.Length];
    //
    //     dp[0] = nums[0];
    //
    //     if (nums.Length > 1)
    //     {
    //         dp[1] = Math.Max(dp[0], nums[1]);
    //     }
    //
    //     for (int i = 2; i < nums.Length; i++)
    //     {
    //         dp[i] = Math.Max(
    //                 dp[i - 2] + nums[i],
    //                 dp[i - 1]);
    //     }
    //     return dp[^1];
    // }
}
// @leet end
