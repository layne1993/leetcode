// 栈的压入、弹出序列

/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
 */

/**
 * 示例：
 * 输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
 * 输出：true
 * 解释：我们可以按以下顺序执行：
 *  push(1), push(2), push(3), push(4), pop() -> 4,
 * push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
 */

/**
 * Comprehend
 * 栈1只能通过对元素的push、pop操作，变成栈2
 * 注意所有的元素只能入栈出栈各一次
 */

/**
 * Choose
 * 数据结构：栈、数组
 * 方法：辅助栈，模拟压入及弹出
 */

// Code
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let stack = []; // 辅助栈
  // 将pushed栈内元素移入辅助栈中，当辅助栈栈顶元素和popped相同，两个栈同时出栈
 let index = 0;
 for (let element of pushed) {
   stack.push(element);
   while (stack.length && stack[stack.length - 1] === popped[index]) {
     stack.pop();
     index++;
   }
 }
 return !stack.length;
};
