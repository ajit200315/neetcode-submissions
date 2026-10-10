class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let diff = null
        let index = null
        let map = new Map()
        for(let i = 0 ; i < nums.length ; i++){
            diff = target - nums[i]
            // index = nums.indexOf(diff)

            if(map.get(diff) == i){
                continue
            }
            if(map.has(diff)){
                console.log("aee may ander hun")
                return [i ,map.get(diff)]
            }
            map.set(nums[i], i)
        }
    }
}
