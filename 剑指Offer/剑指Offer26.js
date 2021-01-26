// 树的子结构

/**
 * 输入两棵二叉树A和B，判断B是不是A的子结构。
 * 约定空树不是任意一个树的子结构
 */

/**
 * 示例：
 * 输入：A = [3, 4, 5, 1, 2], B = [4, 1]
 * 输出：true
 */

/**
 * Comprehend
 * 如上面的例子
 * A:    3                B     4
 *    4     5                1
 * 1     2
 * A中有B的结构，故结果为true
 */

/**
 * Choose
 * 数据结构：树
 * 方法：递归
 * 1  若A或B为空，则返回false
 * 2  若B为A的子树，那么A包含B的所有节点，且B的叶子节点一定为A的叶子节点
 *    就是说，A包含了B的一个节点，就得包含这个节点下的所有节点
 * 3  若B为A的子结构，那么A包含B的所有节点，但B的叶子节点不一定是A的叶子节点
 *    就是说B只是A的某一部分
 */

// Code
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if (A === null || B === null) return false;
  return isInclude(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

function isInclude(A, B) {
  if (B === null) return true;
  if (A === null) return false;
  if (A.val !== B.val) return false;
  return isInclude(A.left, B.left) && isInclude(A.right, B.right);
}
