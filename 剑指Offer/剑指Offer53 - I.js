// 在排序数组中查找数字 I

/**
 * 统计一个数字在排序数组中出现的次数。
 */

/**
 * 示例
 * 输入：nums = [5, 7, 7, 8, 8, 10], target = 8
 * 输出：2
 */

/**
 * Comprehend
 * 在有序数组中，找出target出现的次数
 */

/**
 * Choose
 * 数据结构：数组
 * 方法：循环比较
 */

// Code
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums || !nums.length) return 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      count++;
    }
  }
  return count;
};

/**
 * Consider
 * 因为是有序数组，故可以进行使用二分查找
 * 找出target在数组中的右边界和左边界，然后进行求差即可
 * 但左边界比较难求，我们可以转换成求target - 1的右边界。
 */

// Code
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums || !nums.length) return 0;
  return getRightMargin(nums, target) - getRightMargin(nums, target - 1);
};

function getRightMargin(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
