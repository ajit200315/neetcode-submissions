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
        let slow = head
        let fast = head

        while (fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let prev = null
        let curr = slow.next
        slow.next = null
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        let tempF = null
        let tempR = null
        let i = head
        while (prev) {
            tempF = i.next
            tempR = prev.next

            i.next = prev
            prev.next = tempF

            prev = tempR
            i = tempF
        }

    }
}
