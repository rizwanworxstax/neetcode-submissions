class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const needed = target - nums[i];
            const matchIndex = seen.get(needed);

            if (matchIndex !== undefined) {
            return [matchIndex, i];
            }

            seen.set(nums[i], i);
        }

        return [];    
    }
}
