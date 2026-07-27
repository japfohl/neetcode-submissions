class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const seen = new Map<string, number>();

        let i: number;
        for (i = 0; i < s.length; i++) {
            seen.set(s[i], (seen.get(s[i]) ?? 0) + 1);
        }

        for (i = 0; i < t.length; i++) {
            if (!seen.has(t[i]) || seen.get(t[i]) === 0) return false;
            seen.set(t[i], seen.get(t[i]) - 1);
        }

        return true;
    }
}
