// 构建乘积数组

/**
 * 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积,
 * 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。
 * 不能使用除法。
 */

/**
 * 示例：
 * 输入：[1, 2, 3, 4, 5]
 * 输出：[120, 60, 40, 30, 24]
 */

/**
 * Comprehend
 * 得到数组，满足
 *  B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。
 */

/**
 * Choose
 * 数据结构：数组
 * 方法：遍历，计算
 */

// Code
/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
  // 将a*a拼接成一个矩阵
  let len = a.length;
  let result = new Array(len);
  // 先遍历矩阵的左下部分
  let left = 1;
  for (let i = 0; i < len; i++) {
    result[i] = left;
    left *= a[i];
  }
  // 再遍历矩阵的右上部分
  let right = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] *= right;
    right *= a[i];
  }
  return result;
};