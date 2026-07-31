class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, str) => `${acc}${str.length}#${str}`, '');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let idx = 0;
        const strs = [];
        while (idx < str.length) {
            const hashIdx = str.indexOf('#', idx);
            const strLen = parseInt(str.slice(idx, hashIdx));
            const next = str.slice(hashIdx + 1, hashIdx + 1 + strLen);
            strs.push(next);
            idx = hashIdx + 1 + strLen;
        }
        return strs;
    }
}
