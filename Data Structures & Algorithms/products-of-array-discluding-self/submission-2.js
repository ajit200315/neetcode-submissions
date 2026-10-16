class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let totalM = 1
        let zeroflag = 0
        for(let n of nums){

            if(n != 0){
            totalM *= n
            }else{
                zeroflag++
            }
        }
        let sol = []
        for(let n of nums){
            if(!zeroflag){
            sol.push(totalM/n)
            }else if(zeroflag === 1){
                if(n != 0){
                    sol.push(0)
                }else{
                    sol.push(totalM)
                }
            }else{
                sol.push(0)
            }
        }
        return sol
    }
}
