// 旋转数组的最小数字

/*
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素.
 */

/**
 * 示例1
 * 输入：[3,4,5,1,2]
 * 输出：1
 * 
 * 示例2
 * 输入：[2,2,2,0,1]
 * 输出：0
 */

/**
 * Comprehend
 * 求数组的最小值
 */

/**
 * Choose
 * 数据结构：数组
 * 方法：排序遍历
 */

// Code
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0];
};

/**
 * Consider
 * 使用二分查找
 */

// Code
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (numbers[mid] < numbers[right]) {
      right = mid;
    } else if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else {
      right--;
    }
  }
  return numbers[left];
};
