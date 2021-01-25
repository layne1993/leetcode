// 滑动窗口的最大值

/**
 * 给定一个数组nums和滑动窗口的大小k，请找出所有滑动窗口里的最大值。
 */

/**
 * 示例：
 * 输入：nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 * 输出：[3,3,5,5,6,7] 
 */

/**
 * Comprehend
 * 滑动窗口在nums中滑动，每次滑动取得最大值
 */

/**
 * Choose
 * 数据结构：队列、数组
 * 方法：维护一个滑动窗口，每次求滑动窗口里最大值
 */

// Code
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (!nums.length || k == 0) return [];
  let queue = [];
  let result = [];
  let index = 0;
  while (index < nums.length) {
    if (queue.length < k) {
      queue.push(nums[index]);
    } else {
      let maxVal = Math.max.apply(Math, queue);
      result.push(maxVal);
      queue.shift();
      queue.push(nums[index]);
    }
    index++;
  }
  if (queue.length === k) {
    let maxVal = Math.max.apply(Math, queue);
    result.push(maxVal);
  }
  return result;
};

/**
 * Consider
 * 上面维护一个滑动窗口，每次都需计算最大值，太耗费时间
 * 若将滑动窗口换乘一个单调数列，每次直接拿开始的即可，无须多次比较
 */

// Code
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (!nums.length || k == 0) return [];
  let queue = [];
  let result = [];
  for (let right = 0, left = 1 - k; right < nums.length; left++, right++) {
    if (left > 0 && queue[0] == nums[left - 1]) {
      queue.shift();
    }
    while (queue.length !== 0 && queue[queue.length - 1] < nums[right]) {
      queue.pop();
    }
    queue.push(nums[right]);
    if (left >= 0) {
      result[left] = queue[0];
    }
  }
  return result;
};
