// 左旋转字符串

/**
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
 */

/**
 * 示例：
 * 输入：s = 'abcdefg', k = 2
 * 输出：'cdefgab'
 */

/**
 * Comprehend
 * k等于几，就将字符串的前几个数移到数组后面
 */

/**
 * Choose
 * 数据结构：字符串
 * 方法：遍历，拼接
 */

//Code
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  let result = '';
  if (s.length <= n) return s;
  for (let i = n; i < s.length; i++) {
    result += s[i];
  }
  for (let i = 0; i < n; i++) {
    result += s[i];
  }
  return result;
};

/**
 * Consider
 * 下面是使用API解决
 */

// Code
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  return s.slice(n) + s.slice(0, n);
};
