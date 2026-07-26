class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Map<number, boolean>();
        for (const num of nums) {
            if (seen.has(num)) return true;
            seen.set(num, true);
        } 
        return false;
    }
}
