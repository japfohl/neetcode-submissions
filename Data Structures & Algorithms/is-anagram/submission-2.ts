class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        
        const 
            sCount = new Map<string, number>(),
            tCount = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            sCount.set(s[i], (sCount.get(s[i]) ?? 0) + 1);
            tCount.set(t[i], (tCount.get(t[i]) ?? 0) + 1);
        }

        function matchesCounts(n: Map<string, number>, k: Map<string, number>): boolean {
            for (const [char, count] of n) {
                if (!k.has(char)) return false;
                if (count !== k.get(char)) return false;
            }
            return true;
        }

        return matchesCounts(sCount, tCount) && matchesCounts(tCount, sCount);
    }
}
