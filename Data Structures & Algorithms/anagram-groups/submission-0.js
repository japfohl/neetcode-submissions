class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
        for (const str of strs) {
            const freqs = new Array(26).fill(0);
            for (const char of str) {
                freqs[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const key = freqs.join(',');
            groups.set(key, [...(groups.get(key) ?? []), str]);
        }
        return Array.from(groups.values());
    }
}
