class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let send = "" 
        for(let word of strs){
            let len = word.length 
            send += len 
            send += '#'
            send += word 
        }
        return send 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [] 
        let number = 0  
        let numberstr = ""
        let resString = "" 
        let flag = true 
        for(let char of str){

            if(flag == true){

            if(char != "#"){
                numberstr += char 
            }
            if(char == '#'){
                number = Number(numberstr)
                numberstr = ""
                flag = false 

                if(number == 0){
                    res.push("")
                    flag = true 
                }

            }

            continue 
            }

            if(!flag){
            resString += char 
            number-- 
            }

            if(number == 0){
                res.push(resString)
                resString = ""
                flag = true
            }
        }
        return res
    }
}
