/**
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 * 
 * @param {number[]} arr1 [2,3,1,3,2,4,6,7,9,2,19]
 * @param {number[]} arr2 [2,1,4,3,9,6]
 * 
 * using frequency hashmap
 */
function solve(arr1,arr2){
    const hmap = new Map()
    for(let i of arr2){
        hmap.set(i,0)
    }
    const missing = []
    arr1.sort((a,b)=>a-b)
    for(let i of arr1){
        if(hmap.has(i)) hmap.set(i,hmap.get(i)+1)
        else missing.push(i)
    }
    const ans = []
    for(let i of hmap){
        for(let j = 0;j<i[1];j++){
            ans.push(i[0])
        }
    }
    return ans.concat(missing)
}
solve([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6])


//https://leetcode.com/problems/relative-sort-array/