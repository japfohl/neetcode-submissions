class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
      const seen = new Map<number, boolean>();
      for (const num of nums) {
        if (num in seen) {
          return true;
        }
        seen[num] = true;
      }
      return false;
    }
}
