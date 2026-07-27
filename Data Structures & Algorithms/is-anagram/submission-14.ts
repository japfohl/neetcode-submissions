class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const seen = {};

        for (let i = 0; i < s.length; i++) {
            seen[s[i]] = (seen[s[i]] ?? 0) + 1;
        }

        for (let i = 0; i < t.length; i++) {
            if (!(t[i] in seen) || seen[t[i]] === 0) return false;
            seen[t[i]]--;
        }

        return true;
    }
}
