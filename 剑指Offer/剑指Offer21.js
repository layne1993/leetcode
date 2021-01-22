// 调整数组顺序使奇数位于偶数前面

/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分.
 */

/**
 * 示例：
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,2,4]
 */

/**
 * Comprehend
 * 遍历数组，将偶数全部提出，再拼接到后面
 */

/**
 * Choose
 * 数据结构：数组
 * 方法：遍历
 */

// Code
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let oddNum = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] % 2 === 0) {
      let num = nums[i];
      nums.splice(i, 1);
      oddNum.push(num);
      i--;
    }
  }
  return nums.concat(oddNum);
};

/**
 * Consider
 * 利用双指针，两边同时出发
 * 当 nums[start] 为奇数时， start++
 * 当 nums[end] 为偶数时，end--
 * 否则两个数进行对换
 */

// Code
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  if (!nums.length) return [];
  let start = 0, end = nums.length - 1;
  while (start < end) {
    while (start < end && nums[start] % 2 === 1) start++;
    while (start < end && nums[end] % 2 === 0) end--;
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
  }
  return nums;
};
