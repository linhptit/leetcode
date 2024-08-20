
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    return dummyHead.next;
}
