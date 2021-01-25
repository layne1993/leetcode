// 用两个栈实现队列

/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead 。
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 */

/**
 * 示例：
 * 输入：["CQueue", "appendTail", "deleteHead", "deleteHead"]
 * [[], [3], [], []]
 * 输出：[null, null, 3, -1]
 */

/**
 * Comprehend
 * 使用栈模拟队列功能（实现元素先进先出的功能）
 */

/**
 * Choose
 * 数据结构：栈、队列
 * 方法：使用两个栈，元素从栈A进栈，从栈B出栈
 */

// Code
var CQueue = function() {
  this.stackA = [];
  this.stackB = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stackA.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (!this.stackB.length) {
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop());
    }
  }
  if (!this.stackB.length) {
    return -1;
  } else {
    return this.stackB.pop();
  }
};
