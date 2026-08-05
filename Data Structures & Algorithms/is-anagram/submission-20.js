class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sf = new Map();
        const tf = new Map();

        for (let i = 0; i < s.length; i++) {
            sf.set(s[i], (sf.get(s[i]) ?? 0) + 1);
            tf.set(t[i], (tf.get(t[i]) ?? 0) + 1);
        }

        for (const [char, count] of sf) {
            if (!tf.has(char) || tf.get(char) !== count) return false;

            sf.delete(char);
            tf.delete(char);
        }

        if (tf.size !== 0) return false;

        return true;
    }
}
