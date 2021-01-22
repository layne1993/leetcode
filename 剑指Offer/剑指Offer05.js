//替换空格

/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 */

/**
 * 示例：
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

/**
 * Comprehend
 * 遍历字符串，遇到空格处将其转换为%20
 */

/**
 * Choose
 * 数据结构：字符串、数组
 * 方法：将字符串分割成数组，将数组拼接成字符串
 */

// Code
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  let str_array = s.split(' ');
  return str_array.join('%20');
};

/**
 * Consider
 * 无，下面是不用给定的API求解
 */

// Code
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  if (!s.length) return '';
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      res += '%20';
    } else {
      res += s[i];
    }
  }
  return res;
};
