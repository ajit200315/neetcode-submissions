class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) {
            return 0;
        }

        let hashM = new Map(nums.map((index, num) => [index, num]));
        let temp = new Set();
        let count = 0;
        for (let num of nums) {
            if (!hashM.has(num - 1)) {
                temp.add(num);
            }
        }
        console.log(temp);

        for (let i of temp) {
            let tempCount = 0;
            while (hashM.has(i + 1)) {
                tempCount++;
                i++;
                if (tempCount > count) {
                    count = tempCount;
                }
            }
        }

        return count + 1;
    }
}
