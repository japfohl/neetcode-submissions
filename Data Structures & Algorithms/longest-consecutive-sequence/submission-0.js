class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const distinctNums = new Set(nums);
        let longest = 0;
        
        for (let num of distinctNums) {
            // ignore numbers that aren't at the beginning of a sequence
            if (distinctNums.has(num - 1)) continue;

            // initial increment to handle single number sequences
            let seqLen = 1;
            distinctNums.delete(num);
            num++;

            // count how many BEYOND initial number
            while (distinctNums.has(num)) {
                seqLen++;
                distinctNums.delete(num);
                num++;
            }

            // update / store potential new longest sequence
            if (seqLen > longest) {
                longest = seqLen;
            }
        }

        return longest;
    }
}
