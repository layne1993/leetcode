// 数组中重复的数字

/**
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 */

/**
 * 示例：
 * 输入：[2, 3, 1, 0, 2, 5, 3]
 * 输出：2或者3
 */

/**
 * Comprehend
 * 找出重复的数字
 */

/**
 * Choose
 * 数据结构：数组、哈希表
 * 方法：排序后比较、利用哈希表存储
 */

//Code (利用排序再比较)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }
  return -1;
};

// 利用Set(Map同理)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let hashSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (hashSet.has(nums[i])) {
      return nums[i];
    }
    hashSet.add(nums[i]);
  }
  return -1;
};

/**
 * Consider
 * 利用数组本身作为哈希表，从而节省空间
 */

// Code
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      if (nums[i] === nums[nums[i]]) {
        return nums[i];
      }
      const temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  return -1;
};