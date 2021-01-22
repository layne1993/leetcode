// 打印从 1 到最大的 n 位数

/*
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 */

/**
 * 示例：
 * 输入: n = 1
 * 输出: [1,2,3,4,5,6,7,8,9]
 */

/**
 * Comprehend
 * 循环输出数字
 */

/**
 * Choose
 * 数据结构： 数组
 * 方法：遍历
 */

// Code
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  if (n <= 0) return [];
  let sum = Math.pow(10, n);
  let result = [];
  for (let i = 1; i < sum; i++) {
    result.push(i);
  }
  return result;
};

/**
 * Consider
 * 考虑大数情况，建议使用字符串解决
 */

// Code
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  if (n <= 0) return [];
  let number = new Array(n).fill(0);
  let res = [];
  while (!Increment(number)) {
    res.push(number.join(''));
  }
  return res;
};

function Increment(number) {
  let isOverflow = false; // 判断是否溢出
  let nTakeOver = 0; //表示进位
  let len = number.length;
  for (let i = len - 1; i >= 0; i--) {
    let nSum = number[i] + nTakeOver;
    if (i === len - 1) nSum++;
    if (nSum >= 10) {
      if (i === 0) {
        isOverflow = true;
      } else {
        nSum -= 10;
        nTakeOver = 1;
        number[i] = nSum;
      }
    } else {
      number[i] = nSum;
      break;
    }
  }
  return isOverflow;
}
