class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const s1 = s.split("").sort().join("");
        const s2 = t.split("").sort().join("");
        console.log("s1 ->" + s1)
        console.log("s2 ->" + s2)
        if(s1===s2){
            return true;
        }
        return false;
    }
}
