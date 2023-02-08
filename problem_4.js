/**
 * Time Complexity : O(n)
 * Space Complexity : O(n)
 * 
 * @param {string} A "abbaee"
 * 
 * as to form a palindrome there should me at most 1 odd occurrance element and rest should have even occurrence
 */
function solve(A){
    let hmap = new Map()
    for(let i of A){
        if(hmap.has(i)) hmap.set(i,hmap.get(i)+1)
        else hmap.set(i,1)
    }
    let count = 0
    for(let i of hmap){
        if(i[1]&1) count++
    }
    if(A.length&1 && count>1) return 0
    else if(count>0) return 0
    else return 1
}

solve("abbaee")
//https://leetcode.com/problems/palindrome-permutation/