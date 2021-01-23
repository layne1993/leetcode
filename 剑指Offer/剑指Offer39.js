// 数组中出现次数超过一半的数字

/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 */

/**
 * 示例
 * 输入：数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 输出：2
 */

/**
 * Comprehend
 * 找出数组中出现次数超过一半的数字
 */

/**
 * Choose
 * 数据结构：数组
 * 方法： 
 *    1、先排序，那必定为数组最中间的一个数 时间复杂度O(nlogn)
 *    2、引入哈希表计数，当计数超过数组长度的一半即为所求值  时间复杂度O(n), 空间复杂度O(n)
 */

// Code (此题使用哈希表)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (!nums || !nums.length) return 0;
  let hash = new Map(), len = nums.length;
  for (let i = 0; i < len; i++) {
    if (hash.get(nums[i])) {
      hash.set(nums[i], hash.get(nums[i]) + 1);
    } else {
      hash.set(nums[i], 1)
    }
  }
  for (let [key, value] of hash.entries()) {
    if (value > len / 2) {
      return key;
    }
  }
};

/**
 * Consider
 * 由于所求值一定大于数组的一半，可以进行抵消。若两个数不相同就抵消，剩下来的那个一定是所求值
 */

// Code
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (!nums || !nums.length) return 0;
  let cur = 0,  // 记录当前值
      count = 0;  // 记录该值同时出现的次数
  for (let n of nums) {
    if (count === 0) cur = n;
    if (cur === n) {
      count++;
    } else {
      count--;
    }
  }
  return cur;
};
