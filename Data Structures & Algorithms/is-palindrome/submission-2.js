class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let small = s.toLowerCase()
        const clean = small.replace(/[^a-zA-Z0-9]/g, '');
        let left = 0 
        let right = clean.length -1

        for(let i = 0 ; i < clean.length ; i++){
            if(left == right){
                return true 
            }
            else if(clean[left] != clean[right]){
                console.log(clean[left] , clean[right])
                return false 
            }else{
                left++ 
                right-- 
            }
        }
        return true
    }
}
