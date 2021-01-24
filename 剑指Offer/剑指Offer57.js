// 和为s的两个数字

/**
 * 输入一个递增排序数组和一个数字s，在数组中查找两个数，使得它们之和正好是s。如果右多对数字，只需输出任意一对即可
 */

/**
 * 示例：
 * 输入： nums = [2, 7, 11, 15], target = 9
 * 输出： [2, 7] 或 [7, 2]
 */

/**
 * Comprehend
 * 有序数组、指定值、找出一对即可
 */

/**
 * Choose
 * 数据结构： 数组
 * 方法： 双指针
 */

// Code
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [nums[left], nums[right]];
    }
  }
  return [];
};

/**
 * Consider
 * 双指针即为最优解
 */