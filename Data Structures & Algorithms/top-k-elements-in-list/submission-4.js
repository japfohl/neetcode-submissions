class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // frequency map
        const counts = {};
        for (const num of nums) {
            counts[num] = (counts[num] ?? 0) + 1;
        }

        // bucket the counts
        const buckets = new Array(nums.length + 1);
        for (const [num, count] of Object.entries(counts)) {
            if (buckets[count]) {
                buckets[count].push(num);
            } else {
                buckets[count] = [num];
            }
        }

        // reverse iterate and take top k then return
        const topK = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i]?.length) {
                for (const num of buckets[i]) {
                    topK.push(num);
                    if (topK.length === k) return topK;
                }
            }
        }
    }
}
