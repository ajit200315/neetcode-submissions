class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        for(let i of nums){
            if(!map.has(i)){
                map.set(i , 0)
            }
            map.set(i, map.get(i) + 1 ) 
        }
        let count = 0 
        let solution = []
        let max = -Infinity
        let lastKey = 0 ; 
        let val ;
        while(count < k){
             max = 0
                val = - Infinity 
                lastKey = -Infinity 
            for(let [key,value] of map){
                max = Math.max(max, map.get(key))
                if(!(lastKey == max)){
                    lastKey = max 
                    console.log(lastKey, val)
                    val = key
                }
            }
            solution.push(val)
            map.delete(val)
            // console.log(map)
            count++
        }
        return solution 
    }
}
