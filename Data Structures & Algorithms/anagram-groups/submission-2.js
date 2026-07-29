class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /**
         * @param {string} str
         * @return {string}
         */
        const createKey = (str) => {
            const freqs = new Array(26).fill(0);
            for (const char of str) {
                freqs[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            return freqs.join(',');
        }

        const groups = new Map();
        
        for (const str of strs) {
            const key = createKey(str);
            groups.set(
                key,
                [...(groups.get(key) ?? []), str]
            );
        }

        return Array.from(groups.values());
    }
}
