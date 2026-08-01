class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pfx = [], sfx = [], prods = [];
        let i;

        // calculate prefix products -> O(n)
        for (i = 0; i < nums.length; i++) {
            if (i === 0) {
                pfx[i] = 1;
            } else {
                pfx[i] = pfx[i - 1] * nums[i - 1];
            }
        }

        // calculate suffix products -> O(n)
        for (i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                sfx[i] = 1;
            } else {
                sfx[i] = sfx[i + 1] * nums[i + 1];
            }
        }

        // populate final products array -> O(n)
        for (i = 0; i < nums.length; i++)
        {
            // handle first element
            if (i === 0)
            {                      
                prods[i] = sfx[i];
            }
            // handle last element
            else if (i === nums.length - 1)
            { 
                prods[i] = pfx[i];
            }
            // every other element in the array
            else
            {                            
                prods[i] = sfx[i] * pfx[i];
            }
        }

        // Total time = O(3n) = O(n)
        return prods;
    }
}
