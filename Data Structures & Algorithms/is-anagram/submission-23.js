class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        // build frequency map
        const sf = {}, tf = {};
        for (let i = 0; i < s.length; i++) {
            sf[s[i]] = (sf[s[i]] ?? 0) + 1;
            tf[t[i]] = (tf[t[i]] ?? 0) + 1;
        }


        // ensure everything in s is in t
        for (const char in sf) {
            if (!(char in tf) || sf[char] !== tf[char]) return false;

            delete sf[char];
            delete tf[char];
        }

        // tf should now be empty but if not, t has letters not in f
        if (Object.keys(tf).length !== 0) return false;

        return true;
    }
}
