/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
      let tra = head 
      let arr = []
      while(tra){
        arr.push(tra) 
        tra = tra.next 
      }
      let i = 0 
      let j = arr.length - 1
      while(i < j){
        arr[i].next = arr[j]
        i++
        if(i >= j) {break}
        arr[j].next = arr[i]
        j--
      }
      arr[i].next = null 
    }
}
