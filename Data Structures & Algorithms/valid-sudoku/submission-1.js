class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = Array.from({ length: 9 }, () => ({}));
        const rows = Array.from({ length: 9 }, () => ({}));
        const sectors = Array.from(
            { length: 3 },
            () => Array.from({ length: 3 }, () => ({}))
        );

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                // ignore periods
                if (board[row][col] === '.') continue;

                const sectY = Math.floor(row / 3),
                      sectX = Math.floor(col / 3); 

                // handle duplicate found
                if (board[row][col] in cols[col] ||
                    board[row][col] in rows[row] ||
                    board[row][col] in sectors[sectY][sectX]) return false;

                // store found value in the current column, row, and sector
                rows[row][board[row][col]] = true;
                cols[col][board[row][col]] = true;
                sectors[sectY][sectX][board[row][col]] = true;
            }
        }

        return true;
    }
}
