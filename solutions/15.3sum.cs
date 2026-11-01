// @leet start
public class Solution
{
    public IList<IList<int>> ThreeSum(int[] nums)
    {
        Array.Sort(nums);
        var res = new List<IList<int>>();

        for (int i = 0; i < nums.Length - 2; i++)
        {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            var j = i + 1;
            var k = nums.Length - 1;

            while (j < k)
            {
                var head = nums[i];
                var left = nums[j];
                var right = nums[k];

                var val = head + left + right;

                if (val == 0)
                {
                    res.Add(new List<int> { head, left, right });
                    while (j < k && left == nums[j + 1]) j++;
                    while (j < k && right == nums[k - 1]) k--;
                    j++;
                    k--;
                }
                else if (val > 0)
                {
                    k--;
                }
                else
                {
                    j++;
                }
            }
        }
        return res;
    }
}
// @leet end
