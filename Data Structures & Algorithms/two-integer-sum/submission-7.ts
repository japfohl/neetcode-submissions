class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];
            if (seen.has(difference)) {
                return [seen.get(difference), i];
            }
            seen.set(nums[i], i);
        }
    }
}
