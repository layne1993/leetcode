// 第一个只出现一次的字符

/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母
 */

/**
 * 示例：
 * 输入：'abaccdeff'
 * 输出：'b'
 */

/**
 * Comprehend
 * 查找出第一次出现一次的字符
 */

/**
 * Choose
 * 数据结构：字符串、哈希表
 * 方法：遍历比较
 */

// Code  字符串遍历，利用字符串API
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i];
    }
  }
  return ' ';
};

// 利用哈希表 Map
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  let map = new Map();
  for(const ch of s) {
      map.set(ch, !map.has(ch));
  }
  for(const ch of s) {
      if(map.get(ch)) {
          return ch;
      }
  }
  return ' ';
};
