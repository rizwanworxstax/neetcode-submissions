class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const storedWords = new Map<string, string[]>();
        for(var i=0;i<strs.length;i++) {
            var key = strs[i].split('').sort().join('')
            if(storedWords.has(key)) {
                var arr:string[] = storedWords.get(key)!;
                arr.push(strs[i])
                storedWords.set(key,arr);
            } else {
                var arr:string[] = new Array();
                 arr.push(strs[i])
                 storedWords.set(key,arr);
            }
        }
        const valuesArray =  [...storedWords.values()];
        return valuesArray;
    }
}
