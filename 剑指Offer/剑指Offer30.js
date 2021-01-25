// 包含min函数的栈

/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 */

/**
 * 示例
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.min();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.min();   --> 返回 -2.
 */

/**
 * Comprehend
 * 每次调整stack，获取最小值
 */

/**
 * Choose
 * 数据结构：栈
 * 方法：每次入栈或出栈时，更新数组中的最小值
 */

// Code
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minVal = Number.MAX_VALUE;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  this.minVal = Math.min(this.minVal, x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let popVal = this.stack.pop();
  this.minVal = Math.min.apply(Math, this.stack);
  return popVal;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this.minVal;
};
