// 顺时针打印矩阵

/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 */

/**
 * 示例:
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 */

/**
 * Comprehend
 * 遍历二维数组，顺时针读取
 */

/**
 * Choose
 * 数据结构：数组
 * 方法：顺时针遍历
 *  可模拟顺时针方向，定义一个二维数组表示方向(右下左上)[[0, 1], [1, 0], [0, -1], [-1, 0]]
 */

// Code
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) return [];
  let rows = matrix.length, cols = matrix[0].length;
  let visited = [];  // 记录是否已经访问过
  for (let i = 0; i < rows; i++) {
    visited.push([]);
    for (let j = 0; j < cols; j++) {
      visited[i].push(0);
    }
  }
  let total = rows * cols; // 一共有几个元素
  let direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 模拟方向
  let directionIndex = 0; // 记录指针的位置
  let result = [];
  let x = 0, y = 0; // 初始化
  for (let i = 0; i < total; i++) {
    result.push(matrix[x][y]);
    visited[x][y] = 1;
    let nextX = x + direction[directionIndex][0], nextY = y + direction[directionIndex][1];
    if (nextX < 0 || nextX >= rows || nextY < 0 || nextY >= cols || visited[nextX][nextY]) {
      // 边界判断
      directionIndex = (directionIndex + 1) % 4;
    }
    x += direction[directionIndex][0];
    y += direction[directionIndex][1];
  }
  return result;
};

/**
 * Consider
 * 先遍历最外层，再遍历次外层，逐个往里走
 * 对于每层，从左上方开始以顺时针的顺序遍历所有元素。
 * 从左到右遍历上侧元素，依次为(top,left) 到 (top,right)。
 * 从上往下遍历右侧元素，依次为(top + 1, right) 到 (bottom, right)。
 * 如果left<right 且 top<bottom，从右往左遍历底侧元素，依次为(bottomm, right - 1) 到 (bottom, left + 1)。
 * 如果left<right 且 top<bottom，从下往上遍历左侧元素，依次为(bottom, left) 到 (top + 1, left)。
 * 遍历完当前层的元素之后，将left和top分别增加1，将right和bottom分别减少1，进入下一层继续遍历，直到遍历完所有元素为止。
 */

// Code
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) return [];
  let rows = matrix.length, cols = matrix[0].length;
  let left = 0,
      right = cols - 1,
      top = 0,
      bottom = rows - 1;
  let result = [];
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      result.push(matrix[top][column]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column >= left + 1; column--) {
        result.push(matrix[bottom][column]);
      }
      for (let row = bottom; row >= top + 1; row--) {
        result.push(matrix[row][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return result;
}
