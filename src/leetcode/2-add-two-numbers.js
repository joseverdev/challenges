/* PROBLEM
2. Add Two Numbers
Medium

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)

**Input:** l1 = [2,4,3], l2 = [5,6,4]
**Output:** [7,0,8]
**Explanation:** 342 + 465 = 807.

**Example 2:**

**Input:** l1 = [0], l2 = [0]
**Output:** [0]

**Example 3:**

**Input:** l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
**Output:** [8,9,9,9,0,0,0,1]

**Constraints:**

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

*/

// SOLUTION

//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  function getArr(list, arr = []) {
    arr.push(list.val);

    if (list.next === null) {
      return arr;
    } else {
      return getArr(list.next, arr);
    }
  }
  const arr1 = getArr(l1);
  const arr2 = getArr(l2);
  const num1 = arr1.reverse().join('');
  const num2 = arr2.reverse().join('');

  let sum = 0;

  if (num1.length > 15 || num2.length > 15) {
    const num1BigInt = BigInt(num1);
    const num2BigInt = BigInt(num2);
    sum = num1BigInt + num2BigInt;
  } else {
    sum = parseInt(num1) + parseInt(num2);
  }

  const sumArr = sum.toString().split('').reverse();

  const result = sumArr.reduceRight((acc, val) => {
    return new ListNode(parseInt(val), acc);
  }, null);

  return result;
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));
