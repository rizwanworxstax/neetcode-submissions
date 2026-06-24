class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        for (var i=0;i<nums.length;i++) {
            for (var j=i+1;j<nums.length;j++) {
                if(i!==j && nums[i]==nums[j]) {
                    return true;
                }
            }    
        }
        return false;
    }
}

var sol = new Solution();
console.log(sol.hasDuplicate([1,2,4,5]))
