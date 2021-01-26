// 求1+2+3+...+n

/**
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句
 */

/**
 * 示例：
 * 输入：n = 3
 * 输出：6
 */

/**
 * Comprehend
 * 加法求和，不能用求和公式
 */

/**
 * Choose
 * 数据结构：数学
 * 方法：
 *  1  使用递归求和
 *  2  使用短路结构代替三目表达式
 */

// Code
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  return n && sumNums(n - 1) + n;
};
