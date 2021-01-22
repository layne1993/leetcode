// 二维数组的查找

/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

/**
 * 示例：
 * 现有矩阵martix如下:
 * [
 *  [1, 4, 7, 11, 15],
 *  [2, 5, 8, 12, 19],
 *  [3, 6, 9, 16, 22],
 *  [10, 13, 14, 17, 24],
 *  [18, 21, 23, 26, 30]
 * ]
 * 给定target = 5，返回 true
 * 给定target = 20，返回 false
 */

/**
 * Comprehend
 * 遍历二维数组，找出是否有符合题意的选项
 */

/**
 * Choose
 * 数据结构： 数组/二维数组
 * 方法： 循环遍历
 */

// Code
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;
  const n = matrix.length,
    m = matrix[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Consider
 * 使用双指针进行优化遍历
 * x -> 从左向右遍历
 * y -> 从下往上遍历
 * 若matrix[y][x] > target, y--；matrix[y][x] < target, x++;
 * 若x > matrix[0].length || y < 0 return false;
 */

// Code
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;
  let x = 0, y = matrix.length - 1;
  while (x < matrix[0].length && y >= 0) {
    if (matrix[y][x] > target) {
      y--;
    } else if (matrix[y][x] < target) {
      x++;
    } else {
      return true;
    }
  }
  return false;
};
