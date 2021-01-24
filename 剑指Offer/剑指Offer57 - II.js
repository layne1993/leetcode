// 和为s的连续正数序列

/**
 * 输入一个正整数target,输出所有和为target的连续正整数序列（至少包含两个数）
 * 序列中的数字必须由小到大排列，不同序列按照首个数字由小到大
 */

/**
 * 示例：
 * 输入： target = 9
 * 输出: [[2, 3, 4], [4, 5]]
 */

/**
 * Comprehend
 * 遍历1--target/2 找出满足题意的数组
 */

/**
 * Choose
 * 数据结构： 数组
 * 方法： 遍历
 */

// Code  暴力解法
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let end = Math.floor(target / 2);
  let result = [], sum = 0;
  for (let i = 1; i <= end; ++i) {
    for (let j = i;; ++j) {
      sum += j;
      if (sum > target) {
        sum = 0;
        break;
      } else if (sum === target) {
        let res = new Array(j - i + 1);
        for (k = i; k <=j; ++k) {
          res[k - i] = k;
        }
        result.push(res);
        sum = 0;
        break;
      }
    }
  }
  return result;
};

/**
 * Consider
 * 使用滑动窗口+指针
 * 设立左右指针，维护一个窗口，判断窗口内元素之和为target，
 * 小于窗口右移，大于窗口左移。
 */

// Code
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let left = 1, right = 2;
  let result = [];
  while (left < right) {
    let sum = (left + right) * (right - left + 1) / 2; // 求和公式
    if (sum > target) {
      left++;
    } else if (sum < target) {
      right++;
    } else {
      let arr = [];
      for (let k = left; k <= right; k++) {
        arr[k - left] = k;
      }
      result.push(arr);
      left++;
    }
  }
  return result;
}
