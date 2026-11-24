class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let string = n.toString(2)
        let counter = 0 ; 
        for(let i = 0 ; i < string.length ; i++){
            if(string[i] == 1){
                counter++
            }
        }
        return counter 
    }
}
