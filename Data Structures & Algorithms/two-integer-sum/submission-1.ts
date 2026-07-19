class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const diffs = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (diffs.has(diff)) {
                return [diffs.get(diff), i];
            }
            diffs.set(nums[i], i);
        }
    }
}
