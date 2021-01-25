// 从尾到头打印链表

/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 */

/**
  * 示例：
  * 输入：head = [1, 3, 2];
  * 输出：[2, 3, 1]
  */

/**
 * Comprehend
 * 将链表反向输出
 */

/**
 * Choose
 * 数据结构：链表、栈
 * 方法：将链表存入栈中，再从栈中取出即可（栈的性质后进先出）
 */

// Code
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  let stack = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  return stack.reverse();
};

/**
 * Consider
 * 可以使用递归
 * （其实递归也是调用栈的方法）
 */

// Code
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  if(!head) return []; 
  let p=head;
  let arr= reversePrint(head.next);
  arr.push(p.val);
  return arr;
};
