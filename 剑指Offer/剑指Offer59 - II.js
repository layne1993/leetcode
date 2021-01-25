// 队列的最大值

/**
 * 请定义一个队列并实现函数 max_value 得到队列里的最大值
 * 要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
 * 若队列为空，pop_front 和 max_value 需要返回 -1
 */

/**
 * 示例：
 * 输入：["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
 *      [[],[1],[2],[],[],[]]
 * 输出：[null,null,null,2,1,2]
 */

/**
 * Comprehend
 * 编写函数，每次修改时更新最大值
 */

/**
 * Choose
 * 数据结构：队列、数组
 * 方法：定义一个变量，专门存储最大值
 */

// Code
var MaxQueue = function() {
  this.queue = [];
  this.maxVal = Number.MIN_VALUE;
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (!this.queue.length) return -1;
  return this.maxVal;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value);
  this.maxVal = Math.max(this.maxVal, value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (!this.queue.length) return -1;
  let popVal = this.queue.shift();
  this.maxVal = Math.max.apply(Math, this.queue);
  return popVal;
};

/**
 * Consider
 * 维护一个单调队列，每次更新单调队列
 */

// Code
var MaxQueue = function() {
  this.queue = []; // 主队列
  this.monoQueue = []; // 辅助队列
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (!this.monoQueue.length) return -1;
  return this.monoQueue[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value);
  while (this.monoQueue.length && this.monoQueue[this.monoQueue.length - 1] < value) {
    this.monoQueue.pop();
  }
  this.monoQueue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (!this.queue.length) return -1;
  const value = this.queue.shift();
  if (value === this.monoQueue[0]) {
    monoQueue.shift();
  }
  return value;
};
