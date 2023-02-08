/**
 * Time Complexity : O(n)
 * Space Complexity : O(n)
 * @param {[number]} nums [9,2,3,4,8,3,7,2,1,2]
 * @param {number} k  = 3
 */
function solve(nums,k){
    const ans = []
    const hmap = new Map()
    for(let i = 0;i<k;i++){
        if(hmap.has(nums[i])) hmap.set(nums[i],hmap.get(nums[i])+1)
        else hmap.set(nums[i],1)
    }
    ans.push(hmap.size)
    for(let i = k;i<nums.length;i++){
        hmap.set(nums[i-k],hmap.get(nums[i-k])-1)
        if(hmap.get(nums[i-k])==0) hmap.delete(nums[i-k])
        if(hmap.has(nums[i])) hmap.set(nums[i],hmap.get(nums[i])+1)
        else hmap.set(nums[i],1)
        ans.push(hmap.size)
    }
    return ans   
}
solve([1,1,1,1,2,3,4],4)

//  https://leetcode.com/problems/distinct-numbers-in-each-subarray/