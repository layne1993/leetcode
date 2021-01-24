// 翻转单词顺序

/**
 * 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。
 * 例如输入字符串"I am a student. "，则输出"student. a am I"。
 */

/**
 * 示例：
 * 输入："the sky is blue"
 * 输出："blue is sky the"
 */

/**
 * Comprehend
 * 句子翻转  去掉前后空格 去掉中间多余空格(字符串之间只保留一个空格)
 */

/**
 * Choose
 * 数据结构：数组
 * 方法：去空格，拿到每个单词，反转，拼接
 */

// Code
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let sWithTrim = s.trim();
  let arr = sWithTrim.split(' ');
  let new_arr = arr.filter(item => item).reverse();
  return new_arr.join(' ');
};

/**
 * Consider
 * 上面是采用String API和Array API所解决的
 * 下面采用双指针解法
 * 定义两个指针，指向字符串最右端
 * 结束条件： start < 0
 * 如果sWithTrim[start]不为空格，表示还未获取完整单词，start--
 * 获得单词后，截取[start+1, end+1]，加入新的字符串中，反转
 * 如果sWithTrim[start]为空格，表示还未到下个单词开始位置，start--
 * 到单词结尾后,end=start，重复上面动作
 */

// Code
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let sWithTrim = s.trim();
  let start = sWithTrim.length - 1, end = sWithTrim.length;
  let result = '';
  while (start >= 0) {
    while (start>= 0 && sWithTrim[start] !== ' ') {
      start--;
    }
    result += sWithTrim.substring(start + 1, end + 1) + ' ';
    while (start >= 0 && sWithTrim[start] === ' ') {
      start--;
    }
    end = start;
  }
  return result.trim();
};
