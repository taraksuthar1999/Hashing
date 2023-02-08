/**
 * Time Complexity = O(n)
 * Space Complexity = O(n)
 * @param {[number]} nums [100,4,200,1,3,2]
 */
function solve(nums){
    let min = Number.MAX_SAFE_INTEGER
    const hset = new Set()
    let max = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i]<min) min = nums[i]
        hset.add(nums[i])
    }
    for(let i = 0;i<nums.length;i++){   
        if(!hset.has(nums[i]-1)){
            let count = 0
            let start = nums[i]
            while(hset.has(start)){
                count++
                start++
            }
            max = Math.max(max,count)
        }
    }
    return max
}
solve([100,4,200,1,3,2])

//https://leetcode.com/problems/longest-consecutive-sequence/